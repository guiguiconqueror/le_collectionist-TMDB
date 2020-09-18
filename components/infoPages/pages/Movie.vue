<template>
  <div>
    <!-- Dynamic banner image -->
    <v-img :src="`https://image.tmdb.org/t/p/original${storeMovie.info.backdrop_path}`" class="backdrop-image">

      <!-- Poster image and movie info -->
      <v-container fluid fill-height class="overlay-container">
        <v-container>
          <v-row align="center" justify="space-between">
            <v-col cols="8" align-self="center">
              <div class="movie-div">
                <div class="movie-title-div">
                  <span class="movie-title">{{storeMovie.info.title}}<span v-if="storeMovie.info.release_date" class="released-year">({{ storeMovie.info.release_date }})</span></span>
                </div>
                <!-- Overview -->
                <div v-if="storeMovie.info.overview">
                  <Overview :overview="storeMovie.info.overview" />
                </div>
                <div class="movie-title-div">
                  <span class="movie-director">Directeur :</span>
                </div>
                <span class="movie-director-name">{{storeMovie.crew.director.name}}</span>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-img>
  </div>
</template>

<script>
import Overview from '@/components/infoPages/Overview.vue'

export default {
  name: 'Movie',
  components: {
    Overview
  },
  computed: {
    storeMovie() {
      return this.$store.state.media.media
    }
  }
}
</script>

<style scoped>
.backdrop-image {
  height: 100%;
}
.overlay-container {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to right, rgba(12, 10, 9, 0.985) 150px, rgba(32, 28, 20, 0.85) 100%);
  align-items: center;
  display: flex;
}
.movie-title-div {
  font-weight: bold;
  display:flex;
  align-items: center;
}
.movie-title {
  font-size: 2.1em;
  font-weight: 750;
}
.released-year {
  color: lightgrey;
  font-size: 1.9rem !important;
  font-weight: normal;
  padding-left: 8px;
}
.movie-info {
  margin-top: -5px;
  margin-bottom: 5px;
  padding-left: 4px;
  display: flex;
  align-content: center;
  font-size: 0.96em;
}
.movie-info-subdiv {
  align-self: center;
}
.bullet-divider {
  margin: 0 12px 0 12px;
  font-size: 1.4em;
}
.movie-tagline {
  font-size: 1em;
  color: lightgrey;
  font-style: italic;
}
.movie-director {
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
}
.movie-director-name {
  color: lightgrey;
  margin-bottom: 15px;
  font-size: 0.95em;
}
.link {
  text-decoration: none;
  color: white;
}
.link:hover {
  text-decoration: underline;
}
.link.crew:hover {
  text-decoration: none;
}
.crew-name {
  font-weight: 715;
  font-size: 0.97em;
}
.crew-role {
  font-weight: 400;
  font-size: 0.9em;
  color: lightgrey;
}

/* MEDIA QUERIES */

/* MD */
@media (max-width: 1263px) {
  .movie-div {
    padding-left: 25px;
  }
  .movie-title {
    font-size: 2em;
    font-weight: 700;
  }
  .released-year {
    font-size: 1.8rem;
  }
}
</style>