const app = Vue.createApp({
  data() {
    return {
      name: "Wojciech",
      age: 25,
      val: "sth",
      img: "https://zdobywcysieci.pl/images/na-czym-polega-wyszukiwanie-w-google-grafice.jpg",
    };
  },
  methods: {
    randomNum() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
