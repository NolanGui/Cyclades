<template>
  <v-container class="results-page">
    <h1>Résultats des examens</h1>

    <div class="search-filters">
      <v-text-field
        v-model="searchQuery"
        label="Rechercher un candidat"
        outlined
        class="search-bar"
        aria-label="Recherche par nom ou numéro d'inscription"
      ></v-text-field>

      <v-select
        v-model="selectedFilter"
        :items="filters"
        label="Filtrer par statut"
        outlined
        class="filter-dropdown"
        aria-label="Filtrer les résultats par statut"
      ></v-select>
    </div>

    <v-data-table
      :headers="headers"
      :items="filteredResults"
      :search="searchQuery"
      class="results-table"
      item-value="id"
      dense
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Résultats</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="downloadResults" aria-label="Télécharger les résultats">
            Télécharger les résultats
          </v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item.status="{ item }">
        <v-chip :color="statusColors[item.status]" dark>{{ item.status }}</v-chip>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: 'ResultatsPage',
  data() {
    return {
      searchQuery: '',
      selectedFilter: '',
      headers: [
        { text: "Numéro d'inscription", value: 'registrationNumber' },
        { text: 'Nom', value: 'name' },
        { text: 'Examen', value: 'exam' },
        { text: 'Statut', value: 'status' },
        { text: 'Score', value: 'score' },
      ],
      results: [
        {
          id: 1,
          registrationNumber: '202401',
          name: 'Dupont Jean',
          exam: 'Mathématiques',
          status: 'Admis',
          score: 85,
        },
        {
          id: 2,
          registrationNumber: '202402',
          name: 'Durand Sophie',
          exam: 'Physique',
          status: 'Ajourné',
          score: 45,
        },
      ],
      filters: ['Tous', 'Admis', 'Ajourné', 'En attente'],
    }
  },
  computed: {
    filteredResults() {
      if (this.selectedFilter && this.selectedFilter !== 'Tous') {
        return this.results.filter((item) => item.status === this.selectedFilter)
      }
      return this.results
    },
  },
  methods: {
    downloadResults() {
      const csvContent = [
        ["Numéro d'inscription", 'Nom', 'Examen', 'Statut', 'Score'],
        ...this.results.map((result) => [
          result.registrationNumber,
          result.name,
          result.exam,
          result.status,
          result.score,
        ]),
      ]
        .map((row) => row.join(','))
        .join('\n')

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.setAttribute('download', 'resultats.csv')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },
  },
}
</script>

<style scoped>
.results-page {
  margin: 20px auto;
  max-width: 1200px;
}
.search-filters {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}
.search-bar,
.filter-dropdown {
  flex: 1;
}
.results-table {
  margin-top: 20px;
}
</style>
