const dadosPessoais = {
    data (){
        return{
            nome: "Jose",
            email: "jose@jose",
            idade: 56,
            profissao: "Encanador"
        }
    }
}

Vue.createApp(dadosPessoais).mount("#dados")