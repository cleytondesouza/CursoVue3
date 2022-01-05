<template>
  <h1>Life Cycle Hooks</h1>
</template>

<script>
import{onMounted} from 'vue'
export default {
  setup () {
    onMounted(() => {
      console.log('Foi montado composition API')
    })
  }
}

/*
export default {
  mounted(){
    console.log('Componente foi montado')
  }
}
*/
</script>

<style>
</style>