const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    plus() {
      this.counter = this.counter + 1;
    },
    minus() {
      this.counter = this.counter - 1;
    },
  },
});

app.mount("#this-goal");
