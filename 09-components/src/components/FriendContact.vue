<template>
  <li>
    <h2>{{ name }} {{ isFavourite ? "Favourite" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavourite">Change favourite</button>
    <ul v-if="detailsAreVisible">
      <li>Phone: {{ phoneNumber }}</li>
      <li>Email: {{ emailAdress }}</li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAdress: { type: String, required: true },
    isFavourite: {
      type: Boolean,
      required: false,
      default: false,
      /*       validator: function (value) {
        return value === "1" || value === 0;
      }, */
    },
  },
  emits: ["toggle-friend", "delete"],
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavourite() {
      this.$emit("toggle-favourite", this.id);
    },
  },
};
</script>
