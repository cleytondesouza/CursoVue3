<template>
  <div>
    <h1>Minha Lista de Tarefas!</h1>

    <button @click="handleShowHideList">Ver a Lista!</button>
    <br />
    <input type="text" v-focus />
    <ul v-if="showList">
      <li v-for="(task, index) in tasks" 
      dblclick="complete(task)"
      :key="`${task}-${index}`">
        {{ task.name }}

        <button
          @click="remove(task)"
        
        >&times;</button>

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

    tasks: [{ name: "Fazer o Curso", isDone: false }],
  }),
  methods: {
    handleShowHideList (){
      this.showList = !this.showList
    },
    complete (task){

      this.tasks = this.tasks.map(t =>{
        if(t.name === task.name){
          return{...t, isDone: !t.isDone}
        }
        return { ...t }
      })

    },
    remove (task){
      this.tasks = this.tasks.filter(t => t.name !== task.name)
      console.log('task', task)
    }
  }
}
</script>

<style>
</style> 