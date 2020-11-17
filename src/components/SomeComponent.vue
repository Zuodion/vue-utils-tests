<template>
  <div>Hello</div>
  <div v-if="count % 2 === 0">Count: {{ count }}. Count is even.</div>
  <div v-if="count % 2 !== 0">Count: {{ count }}. Count is odd.</div>
</template>

<script>
export default {
  props: {
    count: Number,
  },
};
</script>

<style>
</style>