<template>
  <q-page padding>
    <header>
      <h2>Filmes</h2>
      </header>
      <q-list bordered separator>
      <q-item clickable v-ripple v-for="filme in listaDeFilmes" :key="filme.name">
        <q-item-section>{{filme.title}}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>
<script>
export default {
  name: 'FilmesPage',
  data () {
    return {
      listaDeFilmes: []
    }
  },
  mounted () {
    this.$axios.get('https://swapi.dev/api/films/')
      .then((response) => {
        console.log(response)
        this.listaDeFilmes = response.data.results
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
