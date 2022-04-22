const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    increase (num) {
      this.counter=this.counter+num;
    },
    decrease (num) {
      this.counter=this.counter-num;
    },
    submitForm () {
      alert('submitted');
    }
  }
});

app.mount('#events');
