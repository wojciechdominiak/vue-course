<template>
  <h2>{{ fullName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script setup>
import {
  defineProps,
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';

const props = defineProps({
  firstName: String,
  lastName: String,
});

const age = inject('age');

onBeforeMount(function () {
  console.log('beforemount');
});
onMounted(function () {
  console.log('onMounted');
});
onBeforeUpdate(function () {
  console.log('beforeupdate');
});
onUpdated(function () {
  console.log('onUpdated');
});
onBeforeUnmount(function () {
  console.log('beforeUnmount');
});
onUnmounted(function () {
  console.log('Unmonted');
});

const fullName = computed(() => {
  return props.firstName + ' ' + props.lastName;
});
</script>
