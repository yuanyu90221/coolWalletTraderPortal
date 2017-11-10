<template>
  <ul>
    <li claas="nav_acct">{{userName}}</li>
    <li class="nav_signout" v-if:="isLogin">{{signOut}}</li>
    <li class="nav_signin" v-if:="!isLogin">{{signIn}}</li>
  </ul>
</template>
<script>
export default {
  props: ['isLogin'],
  data: ()=>{
    return {
      "userName": "user name",
      "signOut": "Sign out",
      "signIn": "Sign in"
    }
  }
}
</script>
