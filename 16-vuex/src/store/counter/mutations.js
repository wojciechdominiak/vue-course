export default {
  increament(state) {
    state.counter++;
  },
  increase(state, val) {
    console.log(state);
    state.counter = state.counter + val.value;
  },
};
