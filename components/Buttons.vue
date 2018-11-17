<template>
  <ul class="nav">
    <li class="nav_top">
      <nuxt-link @click.native="changeRoute({path:'/user/signin' , target:'Sign in'})" class="btn btn-warning" to="/" style="display:inline;">
        Sign in
      </nuxt-link>
      <nuxt-link @click.native="changeRoute({path: '/user/signup', target:'Sign out'})" class="btn btn-warning" to="/user/sign-up" style="display:inline;">
        Sign up
      </nuxt-link>
      <nuxt-link @click.native="changeRoute({path: '/daily/report', target:'Daily Report'})" class="btn btn-warning" to="/daily/report" style="display:inline;">
        DailyReport
      </nuxt-link>
      <nuxt-link @click.native="changeRoute({path: '/daily/', target:'DailyFee'})" class="btn btn-warning" to="/daily/transactionFee" style="display:inline;">
        DailyFee
      </nuxt-link>
      <nuxt-link @click.native="changeRoute({path: '/secret', target:'Secret page'})" class="btn btn-warning" to="/secret" style="display:inline;">
        Super secret page
      </nuxt-link>
    </li>
  </ul>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations({
      // use to map the change to nav action
      changeRoute: 'nav'
    }),
    validate({params, query, store}) {
      console.log(`validate`)
      return true
    }
  }
}
</script>
