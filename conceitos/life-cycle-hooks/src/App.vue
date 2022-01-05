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

  ----Apos montar as máquinas e subir pra o docker temos que ter em mente que nosso back agora é somente didático
  Ele nao tem conexão alguma com nenhum banco de dados
  }
}
*/
</script>

<style>
</style>