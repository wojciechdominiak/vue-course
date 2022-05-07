export default {
  increament(context) {
    setTimeout(function () {
      context.commit('increament');
    }, 2000);
  },
  increase(context, val) {
    setTimeout(function () {
      context.commit('increase', val);
    }, 2000);
    console.log(context);
  },
};
