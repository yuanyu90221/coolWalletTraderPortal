<template>
  <div>
    Footer
    <button class="btn btn-default" @click="$store.commit('incre')">{{$store.state.accumulator}}</button>
  </div>
</template>
