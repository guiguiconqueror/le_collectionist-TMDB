<template>
  <div>
    <v-container>
      <h3 class="heading">Les Meilleures Films</h3>
    </v-container>
    <BannerCarousel :movies="topMovies" />
    <v-container>
      <h3 class="heading">Les Films les plus populaires</h3>
    </v-container>
    <BannerCarousel :movies="popularMovies" />
    <v-container>
      <h3 class="heading">Bientôt disponibles</h3>
    </v-container>
    <BannerCarousel :movies="upcomingMovies" />
  </div>
</template>

<script>
import BannerCarousel from "@/components/sliders/BannerCarousel.vue";

export default {
  components: {
    BannerCarousel
  },
  data() {
    return {
      popularMovies: [],
      topMovies: [],
      upcomingMovies: [],
      watchList: []
    };
  },
  methods: {
    async getPopularMovies() {
      const movies = await this.$axios.$get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.apikey}&language=en-US&page=1`
      );
      this.popularMovies = movies.results;
    },
    async getTopMovies() {
      const movies = await this.$axios.$get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.apikey}&language=en-US&page=1`
      );
      this.topMovies = movies.results;
    },
    async getUpcomingMovies() {
      const movies = await this.$axios.$get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.apikey}&language=en-US&page=1`)
      this.upcomingMovies = movies.results
    },
  },

  created() {
    Promise.all([this.getTopMovies(), this.getPopularMovies(), this.getUpcomingMovies()]);
  }
};
</script>
