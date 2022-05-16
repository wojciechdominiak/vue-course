<template>
  <section class="container">
    <h1>{{ title }}</h1>
    <user-data
      :firstName="firstName"
      :lastName="lastName"
      :age="user.age"
    ></user-data>
    <button @click="change">Change</button>
    <div>
      <input type="text" placeholder="First name" v-model="firstName" />
      <input type="text" placeholder="Last name" ref="lastNameInput" />
      <button @click="setLastName">Set name</button>
    </div>
  </section>
</template>

<script setup>
import UserData from './components/UserData.vue';
import { ref, reactive, /* computed */ watch } from 'vue';

const title = ref('Composition API');
const firstName = ref('');
const lastName = ref('');
const lastNameInput = ref(null);

const user = reactive({
  age: 31,
});

watch([firstName, lastName], function (newValues, oldValues) {
  console.log('Old ' + oldValues);
  console.log('New ' + newValues);
});

/* const name = computed(() => {
  return firstName.value + ' ' + lastName.value;
}); */

function change() {
  user.age = user.age + 2;
  title.value = 'Great';
}

function setLastName() {
  lastName.value = lastNameInput.value.value;
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
