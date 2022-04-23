const app = Vue.createApp({
  data() {
    return {
      inputText: "",
      isVisible: true,
      color: ""
    };
  },
  computed: {
    pclass() {
      if (this.isVisible) {
        return "visible";
      } else {
        return "hidden";
      }
    },
  },
  methods: {
    toggle() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount("#assignment");
