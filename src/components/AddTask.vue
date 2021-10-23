<template>
  <form @submit="addNewTask" class="add-form">
    <div class="form-group">
      <label for="task">Task</label>
      <input
        v-model="task"
        name="task"
        type="text"
        class="form-control"
        id="task"
        aria-describedby="task"
        placeholder="Task"
      />
    </div>
    <div class="form-group">
      <label for="day-and-time">Day & Time</label>
      <input
        v-model="day"
        name="day"
        type="text"
        class="form-control"
        id="day-and-time"
        placeholder="Day & Time"
      />
    </div>
    <div class="form-check">
      <input
        v-model="reminder"
        name="reminder"
        type="checkbox"
        class="form-check-input"
        id="reminder"
      />
      <label class="form-check-label" for="reminder">Set Reminder</label>
    </div>
    <button type="submit" class="btn btn-success btn-lg btn-block">
      Save Task
    </button>
  </form>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      task: "",
      day: "",
      reminder: false,
    };
  },
  methods: {
    addNewTask(event) {
      event.preventDefault();

      if (!this.task) {
        alert("Please add a task");
        return;
      }

      const newTask = {
        id: Math.floor(Math.random() * 100000),
        text: this.task,
        reminder: this.reminder,
        day: this.day,
      };
      this.$emit("add-task", newTask);
      this.task = "";
      this.day = "";
      this.reminder = false;
    },
  },
};
</script>

<style scoped>
.task {
  margin: 10px;
}
button {
  width: 100%;
}
</style>
