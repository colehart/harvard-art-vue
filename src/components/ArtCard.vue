<template>
  <div class="ac-card">
    <img class='ac-img' :src='art.image' width=300px>
    <div class='ac-info'>
      <h4>{{ art.title }}</h4>
      <p>{{ creatorList }}</p>
      <p>{{ art.date }}</p>
      <p>{{ art.technique }}</p>
      <p class='ac-description'>{{ art.description }}</p>

      <p><a :href='art.link'>Visit this work at the Harvard Museum</a></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ArtCard',
    props: {
      art: Object
    },
    computed: {
      creatorList: function() {
        return this.art.creators.join(', ')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ac-card {
    box-shadow: 0px 7px 12px 0px #00000040;
    padding: 27.5px;
    width: 50vw;
    max-width: 500px;
    margin: 10px 0;
    background-color: #E3E6E9;
  }

  .ac-description {
    text-align: left;
  }
</style>
