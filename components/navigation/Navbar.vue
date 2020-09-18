<template>
  <v-app-bar class="app-bar">
    <v-container fluid>
      <v-row align="center" class="d-md-flex pl-4" justify="center">
          <nuxt-link to="/" class="site-name">
            <div class="logo-frame">
              <span class="logo-helper"></span><img src="~/assets/logo.svg" width="100" class="logo"><img>
            </div>
          </nuxt-link>
        <v-col cols="6">
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>

export default {
  name: 'Navbar'
}
</script>

<style>
</style>

<style scoped>
.app-bar {
  background-color: #121212 !important;
  color: white;
  max-height: 64px;
}
.site-name {
  color: #E50914 !important;
  text-decoration: none !important;
}
.logo-frame {
  height: 33.91px;
  width: 100px;
  white-space: nowrap;
  margin-right: 20px;
}
.logo-helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.logo {
  vertical-align: middle;
}
.menu-button {
  margin-right: 10px;
}
</style>