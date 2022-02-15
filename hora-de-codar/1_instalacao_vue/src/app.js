const MyNameApp = {
    data () {
        return{
            name: "Cleyton",
            idade: 33,
            profissao: "Desenvolvedor"
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");