<template>
  <v-container class="inscription-page">
    <h1>Inscription aux examens</h1>

    <v-row dense class="category-section">
      <v-col cols="12" md="4" lg="3" v-for="(category, index) in categories" :key="index">
        <v-card
          class="category-card"
          outlined
          role="button"
          tabindex="0"
          @click="navigateTo(category.action)"
          @keydown.enter="navigateTo(category.action)"
          @keydown.space.prevent="navigateTo(category.action)"
          aria-label="Accéder à {{ category.label }}"
        >
          <div class="category-img-container">
            <img :src="category.image" :alt="'Icône de ' + category.label" class="category-img" />
          </div>
          <v-card-text class="text-center">
            <span class="category-label">{{ category.label }}</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import creerImage from '@/assets/creer.png'
import consulterImage from '@/assets/consulter.png'
import gererImage from '@/assets/gerer.png'
import importerImage from '@/assets/importer.png'
import informerImage from '@/assets/informer.png'

export default {
  data() {
    return {
      categories: [
        {
          label: 'Créer une candidature',
          action: 'createCandidate',
          image: creerImage,
        },
        {
          label: 'Consulter/modifier les candidatures',
          action: 'viewCandidates',
          image: consulterImage,
        },
        {
          label: 'Modifier les données',
          action: 'editCandidate',
          image: consulterImage,
        },
        {
          label: 'Importer des candidatures',
          action: 'importCandidates',
          image: importerImage,
        },
        {
          label: 'Gérer les consentements',
          action: 'manageConsents',
          image: informerImage,
        },
        {
          label: 'Informer les candidats',
          action: 'notifyCandidates',
          image: informerImage,
        },
        {
          label: 'Changer d’académie',
          action: 'changeAcademy',
          image: gererImage,
        },
        {
          label: 'Préinscrire en masse',
          action: 'bulkPreRegister',
          image: consulterImage,
        },
      ],
    }
  },
  methods: {
    navigateTo(action) {
      alert(`Navigating to: ${action}`)
    },
  },
}
</script>

<style scoped>
.inscription-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.category-section {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.category-card {
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
  border-radius: 10px;
  text-align: center;
  padding: 15px;
  background-color: #f9f9f9;
  flex: 1 1 calc(33.33% - 20px);
  max-width: calc(33.33% - 20px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 300px;
  outline: none;
}

.category-card:focus {
  box-shadow: 0 0 0 3px #007bff;
  background-color: #eaf4ff;
}

.category-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  border-color: #007bff;
}

.category-img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130px;
  margin-bottom: 15px;
  overflow: hidden;
}

.category-img {
  max-height: 90px;
  max-width: 90px;
  object-fit: contain;
}

.category-label {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-top: 10px;
  padding: 15px 20px;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  background-color: #fff;
  display: inline-block;
  transition: transform 0.2s ease;
}

.category-label:hover {
  transform: scale(1.1);
}
</style>
