<template>
  <h1>Auth</h1>
  <button v-if="!isLoged" @click="logToggle">Login</button>
  <button v-else @click="logToggle">Logout</button>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isLoged']),
  },
  methods: {
    ...mapActions(['logToggle'])
  },
};
</script>
