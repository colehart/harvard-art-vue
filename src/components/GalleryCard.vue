<template>
  <div class="g-card" @click="showArt">
    <h2 class='g-card-name'>{{ gallery.name }}</h2>
    <div class='g-card-info-group'>
      <p class='g-card-floor'>Floor: {{ gallery.floor }}</p>
      <p class='g-card-theme'>Theme: {{ gallery.theme }}</p>
      <!-- <p class='g-card-description'> {{ gallery.labeltext }}</p> -->
    </div>
  </div>
</template>

<script>
  // import ArtInfo from '../services/api/GalleryInfo'
  // import ArtContainer from  './ArtContainer.vue'
  // import ArtCard from  './ArtCard.vue'

  export default {
    name: 'GalleryCard',
    props: {
      gallery: {}
    },
    // data () {
    //   return {
    //     galleries: [],
    //     loading: true,
    //     errored: false,
    //   }
    // },
    // methods: {
    //   getGalleries () {
    //     GalleryInfo.getGalleries()
    //       .then(apiGalleries => {
    //         this.galleries = apiGalleries
    //       })
    //       .catch(error => {
    //         console.log(error)
    //         this.errored = true
    //       })
    //       .finally(() => this.loading = false)
    //   }
    // },
    // mounted () {
    //   this.getGalleries()
    // }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .g-card {
    box-shadow: 0px 7px 12px 0px #00000040;
    padding: 27.5px;
    width: 60vw;
    margin: 10px 0;
  }

  .g-card-description {
    text-align: left;
  }
</style>
