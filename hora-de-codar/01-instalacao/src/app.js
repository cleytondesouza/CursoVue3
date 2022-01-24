const MyNameApp = {
    data() {
        return{
            name: "Cleyton",
            idade: 32
        }
    }
}

Vue.createApp(MyNameApp).mount('#app');