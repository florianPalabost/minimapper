<template>
  <div class="aroundMe">
    <h1>Autour de moi</h1>
    <iframe height="280" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCOEjpNMEz9QASG-qgdtrr32zCixNq6k1w&q=Nautibus,France+Fr">
</iframe>
  </div>
</template>

<script>
export default {
  name: 'AroundMe',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
iframe{
  min-width: 50%;
  max-width:100%;
  max-height:100%;
}
</style>
