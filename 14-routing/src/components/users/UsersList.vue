<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="savesChanges">Save Changes</button>

  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return { changesSaved: false };
  },
  methods: {
    confirmInput() {
      this.$router.push('/teams');
    },
    savesChanges() {
      this.changesSaved = true;
      console.log('kurwa');
    },
  },

  beforeRouteLeave(to, from, next) {
    console.log('UsersListCmp beforeRouteLeave');
    console.log(to, from);
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm('Are you sure You got unsaved cahges!');
      next(userWantsToLeave);
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('Before Users');
    console.log(to, from);
    next();
  },
  unmounted() {
    console.log('unmounted');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
