<template>
  <v-container class="convocations-page">
    <h1>Gestion des convocations</h1>

    <div class="search-filters">
      <v-text-field
        v-model="searchQuery"
        label="Rechercher un candidat"
        outlined
        class="search-bar"
        aria-label="Rechercher par nom ou numéro d'inscription"
      ></v-text-field>

      <v-select
        v-model="selectedExam"
        :items="exams"
        label="Filtrer par examen"
        outlined
        class="filter-dropdown"
        aria-label="Filtrer par type d'examen"
      ></v-select>

      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="selectedDate"
            label="Filtrer par date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            outlined
          ></v-text-field>
        </template>
        <v-date-picker v-model="selectedDate" no-title @input="menu = false"></v-date-picker>
      </v-menu>
    </div>

    <v-data-table
      :headers="headers"
      :items="filteredConvocations"
      :search="searchQuery"
      class="convocations-table"
      dense
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Liste des convocations</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="downloadConvocations"
            aria-label="Télécharger les convocations"
          >
            Télécharger les convocations
          </v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item.date="{ item }">
        {{ formatDate(item.date) }}
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: 'ConvocationsPage',
  data() {
    return {
      searchQuery: '',
      selectedExam: '',
      selectedDate: '',
      menu: false,
      headers: [
        { text: "Numéro d'inscription", value: 'registrationNumber' },
        { text: 'Nom', value: 'name' },
        { text: 'Examen', value: 'exam' },
        { text: 'Date', value: 'date' },
        { text: 'Lieu', value: 'location' },
      ],
      convocations: [
        {
          id: 1,
          registrationNumber: '202301',
          name: 'Dupont Jean',
          exam: 'Mathématiques',
          date: '2024-12-01',
          location: 'Salle A1',
        },
        {
          id: 2,
          registrationNumber: '202302',
          name: 'Durand Sophie',
          exam: 'Physique',
          date: '2024-12-05',
          location: 'Salle B2',
        },
        // Ajoutez d'autres convocations ici
      ],
      exams: ['Tous', 'Mathématiques', 'Physique', 'Chimie', 'Informatique'],
    }
  },
  computed: {
    filteredConvocations() {
      return this.convocations.filter((convocation) => {
        const matchesExam =
          !this.selectedExam ||
          this.selectedExam === 'Tous' ||
          convocation.exam === this.selectedExam
        const matchesDate = !this.selectedDate || convocation.date === this.selectedDate
        return matchesExam && matchesDate
      })
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('fr-FR', options)
    },
    downloadConvocations() {
      const csvContent = [
        ["Numéro d'inscription", 'Nom', 'Examen', 'Date', 'Lieu'],
        ...this.convocations.map((convocation) => [
          convocation.registrationNumber,
          convocation.name,
          convocation.exam,
          convocation.date,
          convocation.location,
        ]),
      ]
        .map((row) => row.join(','))
        .join('\n')

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.setAttribute('download', 'convocations.csv')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },
  },
}
</script>

<style scoped>
.convocations-page {
  margin: 20px auto;
  max-width: 1200px;
}
.search-filters {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}
.search-bar,
.filter-dropdown {
  flex: 1;
}
.convocations-table {
  margin-top: 20px;
}
</style>
