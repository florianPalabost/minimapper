//This is the service worker with the Cache-first network

var CACHE = 'pwabuilder-precache';
var precacheFiles = [
      /* Add an array of files to precache for your app */
      '/',
      'index.html',
      'offline.html',
      '/static/images/ic_launcher48.png',
      '/static/images/ic_launcher72.png',
      '/static/images/ic_launcher96.png',
      '/static/images/ic_launcher144.png',
      '/static/images/ic_launcher192.png',
      '/static/images/640px-Tramway_Lyon_1-plan.svg.png',
      '/static/images/1024px-Tramway_Lyon_1-plan.svg.png',
      '/static/inline.css',
      'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
    ];

//Install stage sets up the cache-array to configure pre-cache content
self.addEventListener('install', function(evt) {
  console.log('[PWA Builder] The service worker is being installed.');
  evt.waitUntil(precache().then(function() {
    console.log('[PWA Builder] Skip waiting on install');
    return self.skipWaiting();
  }));
});


//allow sw to control of current page
self.addEventListener('activate', function(event) {
  console.log('[PWA Builder] Claiming clients for current page');
  return self.clients.claim();
});

self.addEventListener('fetch', function(evt) {
  console.log('[PWA Builder] The service worker is serving the asset.'+ evt.request.url);
  evt.respondWith(fromCache(evt.request).catch(fromServer(evt.request)));
  evt.waitUntil(update(evt.request));
});


function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll(precacheFiles);
  });
}

function fromCache(request) {
  //we pull files from the cache first thing so we can show them fast
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}

function update(request) {
  //this is where we call the server to get the newest version of the 
  //file to use the next time we show view
  return caches.open(CACHE).then(function (cache) {
    if (request.cache === 'only-if-cached' && request.mode !== 'same-origin') return;
    return fetch(request).then(function (response) {
      return cache.put(request, response);
    });
  });
}

function fromServer(request){
  //this is the fallback if it is not in the cache to go to the server and get it
  if (request.cache === 'only-if-cached' && request.mode !== 'same-origin') return;
  return fetch(request).then(function(response){ return response});
}
