<template>
  <nav>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="display = !display"></v-app-bar-nav-icon>
      <v-toolbar-title>Page title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="item in menu_items" :key="item.id" @click="updateLoginDialog">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <Login />
    <v-navigation-drawer v-model="display" app temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.id" :to="item.route">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Login from '../components/Login.vue'
export default {
  data () {
    return {
      display: false,
      items: [
        { id: 0, title: 'Home', icon: 'home', route: '/' },
        { id: 1, title: 'About', icon: 'info', route: '/about' }
      ],
      menu_items: [
        { id: 0, title: 'login', icon: 'mdi-login' }
      ]
    }
  },
  components: {
    Login
  },
  methods: {
    updateLoginDialog: function () {
      this.$store.dispatch('updateLoginDialog', true)
    }
  }
}
</script>
