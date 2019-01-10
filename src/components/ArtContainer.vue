<template>
  <div class="art-container">
    <ul class='artworks-list'>
      <li v-for='art in artworks' :key='art.id'>
        <ArtCard :art='art'/>
      </li>
    </ul>
  </div>
</template>

<script>
  import ArtInfo from '../services/api/ArtInfo'
  import ArtCard from  './ArtCard.vue'

  export default {
    name: 'ArtContainer',
    components: {
      ArtCard
    },
    props: {
      galleryId: Number
    },
    data () {
      return {
        artworks: [],
        loading: true,
        errored: false,
      }
    },
    methods: {
      getArtInfo() {
        ArtInfo.getArt(this.galleryId)
          .then(apiArtworks => {
            this.artworks = apiArtworks
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
          .finally(() => this.loading = false)
      }
    },
    mounted () {
      this.getArtInfo()
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
