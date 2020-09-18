<template>
  <div>
    <div class="overview-title">Synopsis :</div>
      <span class="overview">{{overview}}</span>
  </div>
</template>

<script>
export default {
  name: 'Overview',
  data() {
    return {
      overview: ''
    }
  },
  methods: {
    setOverview() {
      const media = this.$store.state.media.media
      this.overview = media.info.overview
    }
  },
  created() {
    this.setOverview()
  }
}
</script>

<style scoped>
.overview-title {
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
}
.overview {
  color: lightgrey;
  margin-bottom: 15px;
  font-size: 0.95em;
}
</style>