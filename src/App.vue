<template>
  <button @click="increment"></button>
  App counter: {{count}}
  <SomeComponent :count="count" />
</template>

<script>
import SomeComponent from "./components/SomeComponent";
export default {
  components: {
    SomeComponent,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
