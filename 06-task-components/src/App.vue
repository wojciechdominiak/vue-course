<template>
  <active-user
    v-for="user in users"
    :key="user.id"
    :id="user.id"
    :name="user.name"
    :age="user.age"
  ></active-user>
  <user-data @add-contact="addContact"></user-data>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: "",
          name: "",
          age: "",
        },
      ],
    };
  },
  methods: {
    addContact(name, age) {
      const newFriendContact = {
        id: new Date().toISOString(),
        name: name,
        age: age,
      };
      this.users[0]=newFriendContact;
    },
  },
};
</script>
