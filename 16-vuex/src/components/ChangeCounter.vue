<template>
  <button @click="increament">increament</button>
  <button @click="increase({value:10})">increase</button>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  methods: {
   /*  addOne() {
      this.$store.dispatch('increament');
    }, */
    ...mapActions('counter',['increament', 'increase'])
  },
};
</script>
