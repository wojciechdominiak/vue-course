<template>
  <h2>{{ fullName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script setup>
import { defineProps, computed } from 'vue';
const props = defineProps({
  firstName: String,
  lastName: String,
  age: Number,
});

const fullName = computed(() => {
  return props.firstName + ' ' + props.lastName;
});
</script>
