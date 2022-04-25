 const MyNameApp = {
     data(){
         return{
             name: "Cleyton", //Tudo que for trocado aqui será trocado em tempo real na nossa index
                idade: 33,
                profissao: "Analista de Sistemas"
         }
     }
 }

 Vue.createApp(MyNameApp).mount("#app") //Criação do App que está na nossa Div do Index