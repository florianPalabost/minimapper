<template>
  <div id="addresslist">
    <div v-if="counter === 0">
      <p italic>Aucune adresse disponible.</p>
    </div>
    <div  v-else>
      <p v-if="counter === 1">{{counter}} adresse disponible.</p>
      <p v-else>{{counter}} adresses disponibles.</p>
      <div v-for="address in addresses" :key="address.name">
        <address-item v-bind:address="address" ></address-item>
      </div>
    </div>
  </div>
</template>

<script type = "text/javascript">
import AddressItem from './AddressItem';

export default {
  name: 'AddressList',
  components: {
    AddressItem,
  },
  computed: {
    addresses() {
      return this.$store.getters.addresses;
    },
    counter() {
      return this.$store.getters.counter;
    },
  },
};
</script>
