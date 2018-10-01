<template>
  <div id="app">
    <google-sign-in @failure="signinFailure" @success="signinSuccess"></google-sign-in>
    <google-sign-out></google-sign-out>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import GoogleSignIn from './components/GoogleSignIn.vue';
import GoogleSignOut from './components/GoogleSignOut.vue';

export default Vue.extend({
  components: {
    'google-sign-in': GoogleSignIn,
    'google-sign-out': GoogleSignOut,
  },
  methods: {
    signinFailure() {
      console.log('signin failed');
    },
    signinSuccess() {
      console.log('signin succeeded');
    },
  },
});
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
