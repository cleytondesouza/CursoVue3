<template>
  <div>
  <PrimeiroComponente />
  <p>O dado é {{testando}}</p>
  <life-cycle />
  </div>
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue'
import LifeCycle from './components/LifeCycle.vue'

export default {
  name: 'App',
  components: {
    PrimeiroComponente,
    LifeCycle
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