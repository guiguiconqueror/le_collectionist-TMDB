<template>
  <div>
    <AddWatchlistButton class="watchlist-absolute" :media="media" />
    <nuxt-link :to="{ path: `/info/movies/${media.id}` }" class="link">
      <div class="background-div"></div>
      <v-row class="overlay-row" justify="center">
        <v-col cols="7" sm="8" md="9" align-self="start">
          <div class="text-div">
            <v-btn fab large class="play-button">
              <v-icon size="45" class="play-button-icon">mdi-eye</v-icon>
            </v-btn>
            <div class="title-div">
              <div class="media-title">{{ media.title || media.name }}</div>
              <div class="media-subtitle">{{ media.release_date }}</div>
            </div>
          </div>
        </v-col>
      </v-row>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "BannerOverlay",
  props: {
    media: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.slide-link {
  text-decoration: none;
}
.slide:hover {
  opacity: 0.9;
}
.background-div {
  width: 100%;
  height: 150px;
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(8, 7, 7, 0.8981967787114846) 55%,
    rgba(14, 12, 12, 0.7525385154061625) 70%,
    rgba(24, 21, 21, 0.5116421568627452) 85%,
    rgba(0, 0, 0, 0) 100%
  );
}
.overlay-row {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.text-div {
  display: flex;
  align-items: center;
}
.play-button {
  background-color: transparent !important;
  border: 3px solid white;
  margin-left: 10px;
  margin-right: 15px;
}
.play-button:hover {
  border-color: #e50914;
}
.play-button:hover .play-button-icon {
  color: #e50914 !important;
}
.title-div {
  padding-left: 5px;
}
.media-title {
  font-size: 2.35em;
  font-weight: 500;
  color: white;
}
.media-title:hover {
  color: #e50914;
}
.media-subtitle {
  font-size: 1.9em;
  color: grey;
}

.watchlist-absolute {
  position: absolute;
  top: 15px;
  right: 15px;
}

/* MEDIA QUERIES */

/* SM */
@media (max-width: 959px) {
  .play-button {
    display: none;
  }
  .media-title {
    font-size: 1.8em;
  }
  .media-subtitle {
    font-size: 1.3em;
  }
}

/* XS */
@media (max-width: 599px) {
  .media-title {
    font-size: 1.35em;
  }
  .media-subtitle {
    font-size: 0.95em;
  }
}
</style>
