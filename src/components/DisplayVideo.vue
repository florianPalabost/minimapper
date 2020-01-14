<template>
  <v-flex text-xs-center>
    <video id="oneVideo" width="640" height="480" autoplay></video>
      <img id="fleche" src="../assets/arrow_up.png" alt="fleche" />
  </v-flex>
</template>

<script>
/* eslint no-useless-concat: "error" */
export default {
  name: 'DisplayVideo',
  methods: {
    accesCamera() {
      const constraint = { video: { facingMode: 'environment', video: true } };
      const video = document.getElementById('oneVideo');
      // fonctionne avec Google Chrome
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Not adding `{ audio: true }` since we only want video now
        navigator.mediaDevices.getUserMedia(constraint).then((stream) => {
          video.srcObject = stream;
          video.play();
        });
      }
    },
  },
  mounted() {
    this.accesCamera();
  },
  destroyed() {
    const video = document.getElementById('oneVideo');
    video.stop();
  },
};

window.addEventListener('deviceorientation', (event) => {
  // process event.alpha, event.beta and event.gamma
  // bugs chargement dans testModernizr sinon ?
  if (window.location.hash === '#/video') {
    const img = document.getElementById('fleche');
    img.style.transform = `rotateX(${event.beta}deg) ` +
      `rotateZ(${event.alpha}deg)`;
  }
}, true);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  z-index: 9999;
  position: relative;
  color:rgb(53, 193, 248);
}
video{
  position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;
}
</style>
