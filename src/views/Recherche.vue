<template>
  <div class="convocations-page">
    <h1>Gestion des convocations</h1>

    <div class="search-filters">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Rechercher un candidat (nom ou numéro)"
        class="search-bar"
      />

      <select v-model="selectedExam" class="filter-dropdown">
        <option value="">Tous les examens</option>
        <option v-for="exam in exams" :key="exam" :value="exam">
          {{ exam }}
        </option>
      </select>

      <input
        v-model="selectedDate"
        type="date"
        class="filter-date"
        placeholder="Filtrer par date"
      />
    </div>

    <table class="convocations-table">
      <thead>
        <tr>
          <th>Numéro d'inscription</th>
          <th>Nom</th>
          <th>Examen</th>
          <th>Date</th>
          <th>Lieu</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="convocation in filteredConvocations" :key="convocation.id">
          <td>{{ convocation.registrationNumber }}</td>
          <td>{{ convocation.name }}</td>
          <td>{{ convocation.exam }}</td>
          <td>{{ formatDate(convocation.date) }}</td>
          <td>{{ convocation.location }}</td>
        </tr>
      </tbody>
    </table>

    <button @click="downloadConvocations" class="download-button">
      Télécharger les convocations
    </button>
  </div>
</template>

<script>
export default {
  name: 'ConvocationsPage',
  data() {
    return {
      searchQuery: '',
      selectedExam: '',
      selectedDate: '',
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
      ],
      exams: ['Mathématiques', 'Physique', 'Chimie', 'Informatique'],
    }
  },
  computed: {
    filteredConvocations() {
      return this.convocations.filter((convocation) => {
        const matchesExam = !this.selectedExam || convocation.exam === this.selectedExam
        const matchesDate = !this.selectedDate || convocation.date === this.selectedDate
        const matchesSearch =
          !this.searchQuery ||
          convocation.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          convocation.registrationNumber.includes(this.searchQuery)
        return matchesExam && matchesDate && matchesSearch
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
  max-width: 800px;
  font-family: Arial, sans-serif;
}
.search-filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.search-bar,
.filter-dropdown,
.filter-date {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  flex: 1;
}
.convocations-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
.convocations-table th,
.convocations-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
.convocations-table th {
  background-color: #f4f4f4;
}
.download-button {
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.download-button:hover {
  background-color: #0056b3;
}
</style>
