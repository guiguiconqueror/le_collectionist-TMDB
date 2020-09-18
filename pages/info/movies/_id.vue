<template>
  <v-app>
    <Movie v-if="loaded" />
  </v-app>
</template>

<script>
import Movie from '@/components/infoPages/pages/Movie.vue'

export default {
  name: 'MoviePage',
  components: {
    Movie
  },
  data () {
    return {
      loaded: false,
      movieId: this.$route.params.id,
      movie: {},
      cast: [],
      crew: {}
    }
  },
  methods: {
    async getMovie() {
      try {
        this.movie = await this.$axios.$get(`https://api.themoviedb.org/3/movie/${this.movieId}?api_key=${process.env.apikey}&language=en-US`)
      } catch (err) {
        if (err.response.status === 404) {
          return this.$nuxt.error({ statusCode: 404, message: err.message })
        }
        return this.$nuxt.error({ statusCode: 500, message: err.message })
      }
    },
    async getCredits() {
      try {
        const credits = await this.$axios.$get(`https://api.themoviedb.org/3/movie/${this.movieId}/credits?api_key=${process.env.apikey}`)
        this.cast = credits.cast.slice(0, 24)
        const director = credits.crew.find(crew => crew.job === "Director") || {}
        console.log(director)
          if (director) this.crew["director"] = director
      } catch(err) {
        // console.log(err)
      }
    },
    async addMovieToStore() {
      try {
        await this.$store.dispatch('media/updateMedia', {
          info: this.movie,
          cast: this.cast,
          crew: this.crew
        })
      } catch(err) {
        console.log(err)
      }
    }
  },
  created() {
    Promise.all([
      this.getMovie(),
      this.getCredits(),
    ])
    .then(() => {
      this.addMovieToStore()
      this.loaded = true
    })
    .catch(err => {
      console.log(err)
    })
  },
}
</script>