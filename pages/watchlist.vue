<template>
  <div>
    <h3 v-if="watchlist.length" class="text-center watchlist-title heading">
      Ma Liste de suivi ({{ watchlist.length }})
    </h3>
    <h3 v-else class="text-center watchlist-title">Votre liste est vide</h3>

    <v-list-item v-if="!watchlist.length">
      <v-list-item-title class="text-center watchlist-empty-title"
        >Votre liste est vide.</v-list-item-title
      >
    </v-list-item>
    <v-container>
      <v-layout wrap justify-space-around>
        <v-flex
          v-for="(watchlistMedia, i) in watchlist"
          :key="i"
          class="watchlist-item"
        >
          <v-card class="media-card">
            <!-- <Bookmark :media="media" /> -->
            <nuxt-link
              :to="{ path: `/info/movies/${watchlistMedia.id}` }"
              class="media-card-link"
            >
              <v-img
                v-if="watchlistMedia.poster_path"
                class="media-card-poster"
                :src="
                  `https://image.tmdb.org/t/p/w185${watchlistMedia.poster_path}`
                "
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey darken-2"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <div v-else class="placeholder-icon-div">
                <v-icon
                  class="placeholder-media-icon"
                  size="110"
                  color="grey darken-2"
                  >mdi-video-image</v-icon
                >
              </div>
            </nuxt-link>
            <nuxt-link
              :to="{ path: `/info/movies/${watchlistMedia.id}` }"
              class="media-card-link"
            >
              <v-card-text class="media-card-title">{{
                watchlistMedia.title || watchlistMedia.name
              }}</v-card-text>
            </nuxt-link>

            <v-card-actions class="card-actions d-block">
              <AddWatchlistButton :media="watchlistMedia" />
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import AddWatchlistButton from '@/components/buttons/AddWatchlistButton'

export default {
  name: "Watchlist",
  computed: {
    ...mapState(["watchlist"])
  },
  methods: {
    ...mapActions(["removeFromWatchlist"]),
    releasedYear(media) {
      if (media.release_date) {
        const date = media.release_date.toString();
        return date.slice(0, 4);
      }
      if (media.first_air_date) {
        const date = media.first_air_date.toString();
        return date.slice(0, 4);
      }
    }
  },
    components: {
    AddWatchlistButton
  },
};
</script>

<style scoped>
.media-card {
  height: 350px;
  width: 175px;
  margin: 10px;
}
.media-card-poster {
  height: 261.19px;
  width: 100%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
.media-card-poster:hover {
  opacity: 0.8;
}
.placeholder-icon-div {
  height: 261.19px;
  width: 100%;
  text-align: center;
  padding-top: 30px;
}
.media-card-link {
  text-decoration: none;
}
.media-card-title {
  color: white;
  font-size: 0.9em;
  font-weight: bold;
  line-height: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-bottom: 0;
}
.media-card-title:hover {
  color: #E50914;
}
.media-card-rating-div {
  padding: 4px 16px 16px 16px;
  display: flex;
  align-items: center;
}
.media-card-rating-star {
  color: #E50914;
  padding-right: 2px;
}
.media-card-rating {
  font-size: 0.8em;
  color: darkgrey;
  padding-left: 2px;
}
.card-actions {
  position: absolute;
  bottom: 5px;
  width: 100%;
}

@media (max-width: 599px) {
  .media-card {
    width: 145px;
    height: 325px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .media-card-poster {
    height: 216.42px;
    width: 100%;
  }
  .placeholder-icon-div {
    height: 216.42px;
  }
  .media-card-title {
    font-size: 0.81em;
  }
  .media-card-rating {
    font-size: 0.76em;
    padding-top: 2px;
  }
  .media-card-rating-div {
    padding-top: 0;
  }
}
</style>
