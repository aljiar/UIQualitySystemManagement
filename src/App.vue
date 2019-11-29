<template>
  <v-app>
    <Navbar />
    <v-content class="ma-xs-1 ma-md-2 ma-lg-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from './components/Navbar.vue'
export default Vue.extend({
  name: 'App',
  components: { Navbar },
  data: () => ({
    //
  })
})
</script>

<style>
  .primary-btn{
    border: 0.5px solid  #2962FF;
    background-color: #333333;
  }
  .primary-txt {
    color: #2962FF;
  }
  .secondary-btn{
    border: 1px solid  #FDD835;
    background-color: #333333;
  }
  .secondary-txt {
    color: #FDD835;
  }
</style>
