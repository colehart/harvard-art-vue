<template>
  <div class="gallery-container">
    <h1>{{ msg }}</h1>
    <p>
      Click on a gallery to see its art.
    </p>
    <ul class='gallery-list'>
      <li v-for='gallery in galleries' :key='gallery.id'>
        <GalleryCard :gallery='gallery'/>
      </li>
    </ul>
  </div>
</template>

<script>
  import GalleryInfo from '../services/api/GalleryInfo'
  import GalleryCard from  './GalleryCard.vue'

  export default {
    name: 'GalleriesContainer',
    components: {
      GalleryCard
    },
    props: {
      msg: String
    },
    data () {
      return {
        galleries: [],
        loading: true,
        errored: false,
      }
    },
    methods: {
      getGalleries () {
        GalleryInfo.getGalleries()
          .then(apiGalleries => {
            this.galleries = apiGalleries
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
          .finally(() => this.loading = false)
      }
    },
    mounted () {
      this.getGalleries()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
    margin-top: 50px;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
</style>
