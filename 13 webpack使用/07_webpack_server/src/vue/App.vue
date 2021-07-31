<template>
  <h2>template模板内容:我是Vue渲染的!</h2>
  <h2>{{title}}</h2>
  <hello-world></hello-world>
</template>

<script>
import HelloWorld from "./HelloWorld";
// import { defineComponent } from '@vue/composition-api'

export default {
  data() {
    return {
      title: "Hello World"
    }
  },
  methods: {},
  components: {
    HelloWorld
  }
}
</script>

<!-- 表示样式的作用域 -->
<style scoped>
  h2 {
    color: red;
  }
</style>
