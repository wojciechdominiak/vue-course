const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  watch:{
      number() {
        const that = this;
        setTimeout(function () {
          that.number = 0;
        }, 5000);
      }
  },
  computed: {
    fullnum() {
      if (this.number < 37) {
        return ("Not there yet");
      } else if (this.number > 37) {
        return ("Too much!");
      } else {
        return (this.number);
      }
    },
  },
  methods: {
    add(num) {
      this.number += num;
    },
  },
});

app.mount("#assignment");
