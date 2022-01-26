const Cadastro = {
    data() {
        return{
            nome: '',
            idade: '',
            telefone: '',
            email: '',
            input_name: "",
            input_idade: '',
            input_telefone:'',
            input_email:''
        }
    },
    methods: {
        submitForm(e){
            e.preventDefault();
            
            this.nome = this.input_name
            this.idade = this.input_idade
            this.telefone = this.input_telefone
            this.email = this.input_email

        }
    }
}
Vue.createApp(Cadastro).mount('#cad');