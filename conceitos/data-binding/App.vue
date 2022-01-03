<template>
  <div class="titulo">
    <h1>Hello {{ name }}</h1>
    <h2 :style="{ textDecoration: decoration}">Sua idade é {{ idade}} anos</h2>

    <input type="text" v-model="name">
<br><br>
    <a :href="link">Link para o Google</a>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "Cleyton",
    idade: 33,
    decoration:'underline',
    link: 'http://www.google.com'
  }),
};
</script>
<style>
    .titulo{
        color:rgb(39, 10, 10);
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        box-shadow: 2px 2px 10px rgb(31, 23, 23);
        padding: 15px;
        border-radius: 10px;
        text-align: center;
        background-color: rgb(22, 24, 141);
        color: white;
        text-shadow: 1px 1px 2px black;
        margin: 5px;
    }
    .titulo:a{
    text-decoration: none;
    color: white;
    }
</style>
