const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      task: "",
      isVisible: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.task);
    },
    toggleList() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount("#assignment");
