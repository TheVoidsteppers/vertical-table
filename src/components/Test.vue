<template>
  <div>
    <ul>
      <li v-for="todo in data" :key="todo">
        <slot name="todo" v-bind:todo="todo">
          {{ todo }}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { name: "jack" },
        { name: "tom" },
        { name: "ali" },
        { name: "cheng" }
      ]
    };
  }
};
</script>