// https://youtu.be/qZXt1Aom3Cs?t=4298

<template>
  <div class="body">
    <div class="container">
      <Header @toggle-add-task="toggleAddTask" title="Vue Task Tracker" :showAddTask="showAddTask" />
      <div v-show="showAddTask">
        <AddTask @add-task="addTask" />
      </div>
      <Tasks
        @toggle-reminder="toggleReminder"
        @delete-task="deleteTask"
        :tasks="tasks"
      />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

export default {
  name: "App",
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    addTask(task) {
      this.tasks = [...this.tasks, task];
    },
    deleteTask(id) {
      if (confirm("Are you sure? This task will be deleted?")) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    },
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "First Task",
        day: "March 1st at 2:30pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Second Task Task",
        day: "March 1st at 1:30pm",
        reminder: false,
      },
      {
        id: 3,
        text: "Third Task",
        day: "March 1st at 12:30pm",
        reminder: true,
      },
      {
        id: 4,
        text: "Fourth Task",
        day: "March 2nd at 2:30pm",
        reminder: false,
      },
      {
        id: 5,
        text: "Last Task",
        day: "March 3rd at 2:30pm",
        reminder: true,
      },
    ];
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: bold;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid blue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  font-family: inherit;
}
</style>
