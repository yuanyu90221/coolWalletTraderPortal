<template>
  <div class="basic">
    <div class="header clear main">
      <header>
        <link href="http://fonts.googleapis.com/css?family=Open+Sans:600,400,300" rel="stylesheet" type="text/css">
        <!-- <link rel='icon' type='image/x-icon' href: '~/assets/favicon.png'> -->
      </header>
      <Navbar/>
      <Buttons/>
      <nuxt/>
    </div>
    <Bottom/>
  </div>
</template>
<script>
import Navbar from '~/components/Navbar.vue'
import Buttons from '~/components/Buttons.vue'
import Bottom from '~/components/Bottom.vue'
// import UserForm from '~/components/UserForm.vue'
export default {
  components: {
    Navbar,
    Buttons,
    Bottom
  }
}
</script>
