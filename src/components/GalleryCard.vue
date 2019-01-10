<template>
  <div class="g-card" @click="toggleShow">
    <h2 class='g-card-name'>{{ gallery.name }}</h2>
    <div class='g-card-info-group'>
      <p class='g-card-floor'>Floor: {{ gallery.floor }}</p>
      <p class='g-card-theme'>Theme: {{ gallery.theme }}</p>
      <p class='g-card-short-description' v-show='showShorter'> {{ shortText }}</p>
      <p class='g-card-long-description' v-show='showLonger'> {{ gallery.labeltext }}</p>
    </div>
    <ArtContainer v-if="showArt" :galleryId='gallery.id' />
  </div>
</template>

<script>
  import ArtContainer from  './ArtContainer.vue'

  export default {
    name: 'GalleryCard',
    props: {
      gallery: {}
    },
    components: {
      ArtContainer
    },
    data () {
      return {
        artworks: [],
        showShorter: true,
        showLonger: false,
        showArt: false
      }
    },
    computed: {
      shortText: function() {
        return this.gallery.labeltext.slice(0, 200) + '...'
      }
    },
    methods: {
      toggleShow() {
        this.showShorter = !this.showShorter
        this.showLonger = !this.showLonger
        this.showArt = !this.showArt
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .g-card {
    box-shadow: 0px 7px 12px 0px #00000040;
    padding: 27.5px;
    width: 60vw;
    max-width: 560px;
    margin: 10px 0;
    background-color: #E3E6E9;
    transition: 0.25s;
  }

  .g-card:hover {
    cursor: pointer;
    background-color: #efefef;
    opacity: 1;
  }

  .g-card-short-description,
  .g-card-long-description {
    text-align: left;
  }
</style>
