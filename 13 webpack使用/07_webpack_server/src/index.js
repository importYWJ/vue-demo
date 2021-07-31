import * as mathUtils from './js/mathUtils';
import './js/element';
import './js/demo';
// import { createApp } from 'vue';  // 为默认的runtime.esm-bundler版本
import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './vue/App';
import axios from 'axios';

if(module.hot) {
  module.hot.accept("./js/element.js", () => {
    console.log('热模块回调');
  })
}

console.log(mathUtils.add(10, 20));
console.log(mathUtils.mul(10, 20));

const app = createApp(App);
app.mount("#app");  // 挂载html的id 

console.log("dddd");

axios.get("")