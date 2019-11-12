<template>
  <div class="container">
    <div>
      <h1>index</h1>
      <div>{{$store.state.num}}</div>
      <button @click="$store.commit('add')">add</button>
      <div>
        {{$store.getters.count}}
      </div>
      <button @click="$store.dispatch('getTest')">getTest</button>
    </div>
    <div class="box"></div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
.box{
    width:10*10px;
    height: 100px;
    background:$col;
  }
</style>
