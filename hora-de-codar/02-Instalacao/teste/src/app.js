const meusDados = {
    data(){
        return{
            nome: "Cleyton Pereira de Souza",
            idade: 33,
            sexo: "Masculino",
            profissao: "Analista de Sistema Pleno",
            endereco: "Rua Tal, numero tal, bairro tal e cidade tal",
            telefone: 33431662
        }
    }
}
Vue.createApp(meusDados).mount("#dados")