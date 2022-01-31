<template>
<div>
  <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
  <p v-else>Estou em Busca de Trabalho</p>
  <p>Utilizo as seguinte tecnologias</p>
  <ul>
  <li>PHP</li>
  <li>Vue3</li>
  <li>Python</li>
  </ul>
  <p v-show="mostrar_email">Mande uma mensagem para {{ email }}</p>
</div>
  
</template>

<script>
export default {
name: 'Info',
data() {
  return{
    esta_trabalhando: false,
    mostrar_email: true,
    email: 'cleyton@gmaial.com'
  }
}
}
</script>
