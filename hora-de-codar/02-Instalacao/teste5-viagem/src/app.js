const dadosViagem = {
    data () {
        return{
            local: "Guarapari",
            mes: "janeiro"
        }
    }
}

Vue.createApp(dadosViagem).mount("#viagem")