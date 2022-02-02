<template>
  <div>
  <PrimeiroComponente />
  <p>O dado é {{testando}}</p>
  <life-cycle />
  <pessoa />
  </div>
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue'
import LifeCycle from './components/LifeCycle.vue'
import Pessoa from './components/pessoa.vue'

export default {
  name: 'App',
  components: {
    PrimeiroComponente,
    LifeCycle,
    Pessoa
  },
  data(){
    return{
      testando: 'Teste'
    }
  }
}
</script>

<style>

</style>