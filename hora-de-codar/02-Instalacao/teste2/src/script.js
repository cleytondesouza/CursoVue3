const endereco = {
    data () {
        return{
            nome: "Cleyton Pereira de Souza",
            rua: "Filadelpho Coutinho Araujo",
            numero: 93,
            complemento: "Apt 103",
            bairro: "Alfa Sul",
            cidade: "Manhuacu",
            estado: "Minas Gerais",
            pais: "Brasil",
            cep: 36976000
        }
    }
}
Vue.createApp(endereco).mount("#end")