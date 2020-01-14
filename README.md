# TP6 Vue.js 30/06/18 FLorian PALABOST 11301169

# Résumé du projet
   - 
   - Début tp8 : pour le tp8 j'ai enlevé le component my address sur la page de demarrage vu qu'il n'y est pas sur le test audit du tp8. 

# à corriger / a ajouter



# minimapper

> A Vue.js project : contenu du projet
/build webpack config files
/config -> index.js : main project config
/node_modules
/src  ->main.js app entry file, App.vue : main app component, components : ui components, asset: module asset, store ...
/static : pure static assets
/test

ces commandes sont définies dans package.json
build dev mode : 
    npm run dev
build prod mode : 
    npm run build


## Build Setup and fix errors 
- avoir le gestionnaire de paquets npm d'installé

``` bash
# install dependencies
npm install

# deveoloppment local sur localhost:8080
npm run dev

# build for production with minification
npm run build

# before move to dist and then deploy production with minification
surge --domain https://minimapper.surge.sh 

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test

# fix "Expected linebreaks to be 'LF' but found 'CRLF' gitlab" or cross OS
npm run lint -- --fix

# fix webpack-dev-server not global present 
 npm install webpack-dev-server -g
 
# fix vuetify not present 
npm install --save vuetify

# fix moment not present 
npm install --save moment

# fix modernizr not present 
npm install --save modernizr
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


