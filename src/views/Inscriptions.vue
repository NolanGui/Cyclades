<template>
  <v-container class="inscription-page">
    <h1>Inscription aux examens</h1>

    <v-row dense class="category-section">
      <v-col cols="12" md="4" lg="3" v-for="(category, index) in categories" :key="index">
        <v-card
          class="category-card"
          outlined
          @click="navigateTo(category.action)"
          aria-label="Accéder à {{ category.label }}"
        >
          <div class="category-img-container">
            <img :src="category.image" :alt="'Icone de ' + category.label" class="category-img" />
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
import creerImage from "@/assets/creer.png";
import consulterImage from "@/assets/consulter.png";
import gererImage from "@/assets/gerer.png";
import importerImage from "@/assets/importer.png";
import informerImage from "@/assets/informer.png";

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
          label: 'Consulter les candidatures',
          action: 'viewCandidates',
          image: consulterImage,
        },
        {
          label: 'Modifier une candidature',
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
          label: 'Pré-inscrire en masse',
          action: 'bulkPreRegister',
          image: consulterImage,
        },
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
  padding: 20px;
}

.category-section {
  display: flex;
  flex-wrap: wrap; /* Permet de passer à la ligne quand il n'y a plus de place */
  gap: 20px; /* Ajoute un espace uniforme entre les éléments */
  justify-content: center; /* Centre les cartes horizontalement */
}

.category-card {
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  border-radius: 10px; /* Coins arrondis */
  text-align: center;
  padding: 15px;
  background-color: #f9f9f9;
  flex: 1 1 calc(25% - 20px); /* Définit une largeur flexible (25% moins le gap) */
  max-width: calc(25% - 20px); /* Limite la largeur à 25% de la ligne */
  box-sizing: border-box; /* Inclut le padding et la bordure dans la largeur */
  display: flex;
  flex-direction: column; /* Utilisation de flex en colonne pour bien aligner l'image et le texte */
  align-items: center; /* Centrer le contenu horizontalement */
  justify-content: space-between; /* Assurer que le texte et l'image sont bien espacés */
  height: 350px; /* Hauteur fixe pour garantir que tout le contenu est bien espacé */
}

.category-card:hover {
  transform: scale(1.1); /* Effet de zoom plus marqué */
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3); /* Effet d'ombre plus profond */
  border-color: #007bff; /* Change la couleur du cadre au survol (bleu vif) */
  background-color: #eaf4ff; /* Change légèrement la couleur de fond pour un effet visuel */
}

.category-img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px; /* Hauteur plus grande pour l'image */
  margin-bottom: 15px; /* Espace sous l'image */
  overflow: hidden;
}

.category-img {
  max-height: 100px; /* Ajuste la taille maximale de l'image */
  max-width: 100px; /* Limite les dimensions */
  object-fit: contain;
}

.category-label {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-top: 10px;
  padding: 15px 20px; /* Ajoute du padding autour du texte pour plus d'espace */
  border: 2px solid #e0e0e0; /* Cadre autour du texte */
  border-radius: 5px; /* Coins arrondis pour le cadre du texte */
  background-color: #fff; /* Fond blanc pour le texte */
  display: inline-block; /* Assure que le texte est bien contenu dans un bloc */
  transition: transform 0.2s ease; /* Ajoute un effet de transition au texte */
}

.category-label:hover {
  transform: scale(1.1); /* Effet de zoom sur le texte au survol */
}
</style>
