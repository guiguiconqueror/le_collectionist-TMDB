<template>
  <v-container>
    <v-carousel :height="bannerSize" cycle interval="8000" continuous show-arrows-on-hover hide-delimiters transition="slide-x-transition">
      <div v-for="(movie,i) in movies" :key="i">
          <v-carousel-item
            :src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`"
            reverse-transition="fade-transition"
            transition="fade-transition"
            class="slide"
          >
            <BannerOverlay :media="movie" />
          </v-carousel-item>
      </div>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  name: 'BannerCarousel',
  props: {
    movies: {
      type: Array,
      required: true
    }
  },
  computed: {
    bannerSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '500'
        case 'sm': return '550'
        case 'md': return '600'
        case 'lg': return '650'
        case 'xl': return '650'
      }
    },
  }
}
</script>

<style scoped>
.v-carousel {
  border-radius: 8px;
}
</style>