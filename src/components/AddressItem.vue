<template>
  <div class='address'>
    <em class='label'>
        {{address.name }} : &nbsp;
    </em>
    <span class='desc'>
        {{ address.address }}
    </span>
    <v-btn
      color="error"
      small fab v-on:click="removeAddress(address)">
      <v-icon>delete</v-icon>
     </v-btn>
  </div>
</template>

<script>
export default {
  props: ['address'],
  methods: {
    removeAddress(address) {
      this.$store.dispatch('delAddress', address);
    },
  },
};
</script>
<style>
.label{
  font-weight: bold;
}
</style>
