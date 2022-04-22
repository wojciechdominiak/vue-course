const app = Vue.createApp({
  data() {
    return {
      output: "",
      mess: "",
    };
  },
  methods: {
    show() {
      alert("hello");
    },
    confirmed(event) {
      this.mess = event.target.value;
    },
  },
});

app.mount("#assignment");
