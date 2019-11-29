<template>
  <v-row>
    <v-dialog v-model="dialog" max-width="400">
      <v-card class="mx-auto" dark max-width="400">
        <v-card-title>
          <v-icon large left>mdi-login</v-icon>
          <span class="title font-weight-light">Login</span>
        </v-card-title>
        <v-card-text>
          <form>
            <v-text-field label="Code" type="text" append-icon="mdi-account"></v-text-field>
            <v-text-field label="Password" type="password" append-icon="mdi-key"></v-text-field>
          </form>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn outlined class="primary-btn"><v-text class="primary-txt">Login</v-text></v-btn>
          <v-btn outlined class="secondary-btn" @click="updateLoginDialog"><v-text class="secondary-txt">Later</v-text></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  computed: {
    dialog () {
      return this.$store.getters.getLoginDialog
    }
  },
  methods: {
    updateLoginDialog: function () {
      this.$store.dispatch('updateLoginDialog', false)
    }
  }
}
</script>
