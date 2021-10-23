<template>
  <header>
    <h1 class="title">{{ title }}</h1>
    <div class="buttons">
      <Button
        @btn-click="$emit('toggle-add-task')"
        class="btn-primary"
        :text="showAddTask ? 'Close' : 'Add Task'"
        :class="showAddTask ? 'btn-danger' : 'btn-primary'"
      />
    </div>
  </header>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Header",
  props: {
    title: String,
    showAddTask: Boolean,
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}
.title {
  font-weight: bold;
}
.buttons {
  padding-bottom: 5px;
}
</style>