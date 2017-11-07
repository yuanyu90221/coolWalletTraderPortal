<template>
  <div class="header clear">
    <header>
      <link href="http://fonts.googleapis.com/css?family=Open+Sans:600,400,300" rel="stylesheet" type="text/css">
      <link rel='icon' type='image/x-icon' href: '/favicon.png'>
    </header>
    <div class="content">
      <Navbar/>
      <Buttons/>
      <nuxt/>
    </div>
  </div>
</template>
<script>
import Navbar from '~/components/Navbar.vue'
import Buttons from '~/components/Buttons.vue'
export default {
  components: {
    Navbar,
    Buttons
  }
}
</script>

