<template>
  <div class="gc">
    <h1>{{ msg }}</h1>
    <p>
      Please choose a gallery.
    </p>
  </div>
</template>

<script>
  import GalleryInfo from '../services/api/GalleryInfo'

  export default {
    name: 'GalleriesContainer',
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
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
