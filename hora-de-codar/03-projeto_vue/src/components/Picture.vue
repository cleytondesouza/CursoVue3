<template>
    <img :src="logo" :alt="descricao">
</template>

<script>
export default {
    name: 'Picture',
    data() {
        return{
            logo: "./img/logo.png",
            descricao: "Cleyton de Souza"
        }
    }
}
</script>
