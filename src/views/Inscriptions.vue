<template>
  <v-container class="inscription-page">
    <h1>Inscription aux examens</h1>

    <!-- Section de catégories -->
    <v-row dense class="category-section">
      <v-col cols="12" md="4" lg="3" v-for="(category, index) in categories" :key="index">
        <v-btn
          class="category-btn"
          :color="category.color"
          outlined
          large
          block
          @click="navigateTo(category.action)"
          aria-label="Accéder à {{ category.label }}"
        >
          <v-icon class="mr-2" :color="category.iconColor">{{ category.icon }}</v-icon>
          {{ category.label }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { label: 'Créer une candidature', icon: 'mdi-account-plus', action: 'createCandidate', color: 'primary', iconColor: 'blue' },
        { label: 'Consulter les candidatures', icon: 'mdi-account-search', action: 'viewCandidates', color: 'success', iconColor: 'green' },
        { label: 'Modifier une candidature', icon: 'mdi-pencil', action: 'editCandidate', color: 'warning', iconColor: 'orange' },
        { label: 'Importer des candidatures', icon: 'mdi-import', action: 'importCandidates', color: 'info', iconColor: 'teal' },
        { label: 'Gérer les consentements', icon: 'mdi-file-document', action: 'manageConsents', color: 'secondary', iconColor: 'purple' },
        { label: 'Informer les candidats', icon: 'mdi-bell', action: 'notifyCandidates', color: 'accent', iconColor: 'red' },
        { label: 'Changer d’académie', icon: 'mdi-swap-horizontal', action: 'changeAcademy', color: 'error', iconColor: 'pink' },
        { label: 'Pré-inscrire en masse', icon: 'mdi-account-multiple', action: 'bulkPreRegister', color: 'grey', iconColor: 'brown' },
      ],
    };
  },
  methods: {
    navigateTo(action) {
      alert(`Navigating to: ${action}`);
    },
  },
};
</script>

<style scoped>
.inscription-page {
  max-width: 1200px;
  margin: 0 auto;
}

.category-section {
  margin-top: 20px;
}

.category-btn {
  display: flex;
  justify-content: start;
  align-items: center;
}
</style>
