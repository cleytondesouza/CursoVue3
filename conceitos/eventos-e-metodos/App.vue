<template>
  <div>
    <h1>Minha Lista de Tarefas!</h1>

    <button @click="handleShowHideList">Ver a Lista!</button>
    <br />
    <input 
       
    
    type="text" 
    @keyup.enter="addTask"
    v-focus  
    v-model="currentTask"/>
       
    
    <ul v-if="showList">
      <li
        v-for="(task, index) in tasks"
        @dblclick="complete(task)"
        :key="`${task}-${index}`"
        class="task-item"
        :class="{
          'linha': task.isDone,
        }"
      >
        {{ task.name }}

        <button @click="remove(task)">&times;</button>
      </li>
    </ul>
    <p v-else>Lista de tarefas escondida</p>
  </div>
</template>

<script>
const focus = {
  inserted: (el) => {
    el.focus();
  },
};

export default {
  directives: {
    focus,
  },
  data: () => ({
    showList: false,
    currentTask:'' ,
    tasks: [{ name: "Fazer o Curso", isDone: false }],
  }),
  methods: {
    handleShowHideList() {
      this.showList = !this.showList;
    },
    addTask (){
      this.tasks.push({
        name: this.currentTask,
        isDone: false
      })
      this.currentTask = ''
    },
    complete(task) {
      this.tasks = this.tasks.map((t) => {
        if (t.name === task.name) {
          return { ...t, isDone: !t.isDone };
        }
        return { ...t };
      });
    },
    remove(task) {
      this.tasks = this.tasks.filter((t) => t.name !== task.name);
      console.log("task", task);
    },
  },
};
</script>

<style scoped>
.linha {
  text-decoration: line-through;
}
</style> 