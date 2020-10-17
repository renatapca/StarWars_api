<template>
  <q-page padding>
    <header>
      <h2>Personagens</h2>
    </header>
    <q-list bordered separator>
      <q-item clickable v-ripple v-for="personagem in listaDePersonagens" :key="personagem.name">
        <q-item-section>{{personagem.name}}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'PersonagensPage',
  data () {
    return {
      listaDePersonagens: []
    }
  },
  mounted () {
    this.$axios.get('https://swapi.dev/api/people/')
      .then((response) => {
        console.log(response)
        this.listaDePersonagens = response.data.results
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
