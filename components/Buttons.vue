<template>
  <ul class="nav">
    <li class="nav_top">
      <nuxt-link @click.native="changeRoute" class="btn btn-warning" to="/daily/report" style="display:inline;">
        DailyReport
      </nuxt-link>
      <nuxt-link @click.native="changeRoute" class="btn btn-warning" to="/daily/transactionFee" style="display:inline;">
        DailyFee
      </nuxt-link>
    </li>
  </ul>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    changeRoute(e) {
      console.log(this.$store.state.currentPage)
      this.$store.commit('nav', e.target.value)
      console.log(e.target.value)
      console.log(this.$store.state.currentPage)
    },
    ...mapMutations({
      changeRoute: 'nav'
    })
  }
}
</script>
