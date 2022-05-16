<template>
  <section class="container">
    <h1>{{ title }}</h1>
    <h2>{{ name }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="change">Change</button>
    <div>
      <input type="text" placeholder="First name" v-model="firstName" />
      <input type="text" placeholder="Last name" v-model="lastName" />
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue';

const title = ref('Composition API');
const firstName = ref('');
const lastName = ref('');

const user = reactive({
  age: 31,
});


watch([firstName, lastName], function(newValues, oldValues) {
  console.log('Old ' + oldValues);
  console.log('New ' + newValues);
});

const name = computed(() => {
  return firstName.value + ' ' + lastName.value;
});

function change() {
  user.age = user.age + 2;
  title.value = 'Great';
}
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
