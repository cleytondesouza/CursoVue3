const carro = {
    data (){
        return{
            modelo: "Corsa",
            ano: 2002,
            cor: "vermelho"
        }
    }

}

Vue.createApp(carro).mount("#car")