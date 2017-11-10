<template>
    <div class="container-fluid">
      <!-- nested view -->
      <div class="loginForm"></div>
      <nuxt-child></nuxt-child>
    </div>
</template>
<style lang="scss">
.loginForm {
  background:url('~/img/bg.jpg');
  // height: 100vmin;
  // display: block;
  // height: 500px;
  height: 90vmin;
  background-size: 90vmin;
  background-repeat: no-repeat;
  background-blend-mode: cover;
}
</style>
