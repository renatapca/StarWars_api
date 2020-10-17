<template>
  <q-page padding>
    <!-- content -->
     <header>
      <h2>Planetas</h2>
      </header>
      <q-list bordered separator>
      <q-item clickable v-ripple v-for="planeta in listaDePlanetas" :key="planeta.name">
        <q-item-section>{{planeta.name}}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'PlanetasPage',
  data () {
    return {
      listaDePlanetas: []
    }
  },
  mounted () {
    this.$axios.get('https://swapi.dev/api/planets/?')
      .then((response) => {
        console.log(response)
        this.listaDePlanetas = response.data.results
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
