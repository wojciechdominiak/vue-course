<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="isVisible">{{ goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggle">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<!-- <script setup>
import { ref /* reactive */ } from 'vue';
/* const goal = ref('Find a job');
let isVisible = ref(true);

function toggle () {
  isVisible.value = !isVisible.value;
}*/
/* const object = reactive({
  goal: 'find a job',
  isVisible: true,
});

function toggle() {
  object.isVisible = !object.isVisible;
} */
</script> -->

<script>
export default {
  data() {
    return {
      goal:"find a job",
      isVisible: true,
    };
  },
  methods: {
    toggle() {
      this.isVisible=!this.isVisible;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
