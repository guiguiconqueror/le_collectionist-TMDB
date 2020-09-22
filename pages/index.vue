<template>
  <div>
    <v-container>
      <h3 class="heading">Les Meilleurs Films</h3>
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

export default {
  async asyncData({app}) {
    const popularMovies = await app.$axios.$get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.apikey}&language=en-US&page=1`
    ).then(response => {
      return response.results
    });

    const topMovies = await app.$axios.$get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.apikey}&language=en-US&page=1`
    ).then(response => {
      return response.results
    });

    const upcomingMovies = await app.$axios.$get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.apikey}&language=en-US&page=1`
    ).then(response => {
      return response.results
    });
    return {popularMovies, topMovies, upcomingMovies}
  },
};
</script>
