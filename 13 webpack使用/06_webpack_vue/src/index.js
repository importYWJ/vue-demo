import * as mathUtils from './js/mathUtils';
import './js/element';
import './js/demo';
// import { createApp } from 'vue';  // 为默认的runtime.esm-bundler版本
import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './vue/App.vue';

console.log(mathUtils.add(10, 20));
console.log(mathUtils.mul(10, 20));


// Vue源代码
// const app = createApp({
//   // template: `<h2>我是Vue渲染的</h2>`,
//   template: '#my-app',
//   data() {
//     return {
//       title: "Hello World"
//     }
//   }
// });
const app = createApp(App);
app.mount("#app");  // 挂载html的id