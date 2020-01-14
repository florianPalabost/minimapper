<template>
  <div id="myaddresses">
    <h1>Mes adresses</h1>
    <address-list></address-list>
    <add-address></add-address>
  </div>
</template>

<script>
import AddressList from './AddressList';
import AddAddress from './AddAddress';

export default {
  name: 'MyAddresses',
  components: {
    // ex Reference to the AddressList component
    AddressList,
    AddAddress,
  },
};
</script>
