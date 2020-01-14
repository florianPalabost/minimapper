<template>
  <div>
    <v-form id="addform" v-model="valid" ref="form" lazy-validation>
        <v-text-field type="text" label="Nom" v-model="name" required :rules="nameRules"/>
        <v-text-field type="text" label="Adresse" v-model="address" required :rules="addressRules"/>
        <v-btn color="success" @click="createAddress">Ajouter</v-btn>
    </v-form>
  </div>
</template>

<script type = "text/javascript" >

export default {
  // fix : "Vue doesn’t allow dynamically adding root-level reactive properties"
  data() {
    return {
      valid: true,
      name: '',
      address: '',
      nameRules: [
        v => !!v || 'Le champs Nom est obligatoire !',
        v => (v && v.length <= 25 && v.length >= 2) || 'Le nom doit faire entre 2 et 25 caractères !',
      ],
      addressRules: [
        v => !!v || 'Le champs Adresse est obligatoire !',
        v => (v && v.length <= 25 && v.length >= 5) || "L'adresse doit faire entre 5 et 25 caractères !",
      ],
    };
  },
  methods: {
    createAddress() {
      if (this.$refs.form.validate()) {
        const name = this.name;
        const address = this.address;
        this.$emit('addAddress', {
          name,
          address,
          favorite: true,
        });
        this.$store.dispatch('addAddress', this);
        this.$refs.form.reset();
      }
    },
  },
};
</script>
