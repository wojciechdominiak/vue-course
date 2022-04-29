<template>
  <form @submit.prevent="submitData">
    <label>Name</label>
    <input type="text" v-model="name" />
    <label>Age</label>
    <input type="age" v-model="age" />
    <button>Add active user</button>
  </form>
</template>

<script>
export default {
    emits: ["add-contact"],
    data() {
        return{
            name:"",
            age:"",
        }
    },
    methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.name,
        this.age,
      );
    },
  },
};
</script>
