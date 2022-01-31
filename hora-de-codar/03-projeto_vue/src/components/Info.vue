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
  <p>Para acessar o meu portifólio <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a></p>
  <Picture />
</div>
  
</template>

<script>
import Picture from './Picture.vue'
export default {
name: 'Info',
components: {
  Picture
},
data() {
  return{
    esta_trabalhando: false,
    mostrar_email: true,
    email: 'cleyton@gmaial.com',
    meu_link: 'https://google.com'
  }
}
}
</script>
