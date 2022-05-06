<template>
  <base-container title="Vuex" v-if="isLoged">
    <TheCounter />
    <FavouriteValue />
    <button @click="addOne">Add 10</button>
    <ChangeCounter />
  </base-container>
  <base-container title="Auth">
    <UserAuth></UserAuth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';
import UserAuth from './components/UserAuth.vue';

import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteValue,
    UserAuth,
  },
  computed: {
    ...mapGetters(['isLoged']),
  },
  methods: {
    addOne() {
      /* this.$store.dispatch('increase', { value: 10 }); */
      this.$store.dispatch({ type: 'counter/increase', value: 10 });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
