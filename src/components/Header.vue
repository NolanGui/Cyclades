<template>
  <header class="app-header">
    <div class="logo-container">
      <img src="@/assets/image.png" alt="Logo Cyclades" class="logo" />
    </div>
    <nav class="nav-menu" aria-label="Navigation principale">
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/administration">Administration</router-link></li>
        <li><router-link to="/reglementation">Règlementation</router-link></li>
        <li><router-link to="/inscriptions">Inscriptions</router-link></li>
        <li><router-link to="/orga-affectation">Orga-Affectation</router-link></li>
        <li><router-link to="/deroulement">Déroulement</router-link></li>
        <li><router-link to="/evaluation">Évaluation</router-link></li>
        <li><router-link to="/deliberation">Délibération</router-link></li>
        <li><router-link to="/publication">Publication</router-link></li>
        <li><router-link to="/documents">Documents</router-link></li>
      </ul>
    </nav>
    <div class="search-container">
      <input
        type="text"
        id="search"
        placeholder="Rechercher..."
        v-model="searchTerm"
        @input="handleSearch"
        aria-label="Rechercher"
      />
      <button
        type="button"
        class="search-button"
        @click="executeSearch"
        aria-label="Lancer la recherche"
      >
        🔍
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      searchTerm: '',
    }
  },
  methods: {
    handleSearch() {
      console.log(`Recherche : ${this.searchTerm}`)
    },
  },
}
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007bff;
  padding: 10px 20px;
  color: white;
  width: 100%;
  box-sizing: border-box;
}

.logo-container .logo {
  height: 50px;
}

.nav-menu ul {
  display: flex;
  list-style: none;
  gap: 15px;
  padding: 0;
  margin: 0;
}

.nav-menu a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav-menu a:hover,
.nav-menu a:focus {
  text-decoration: underline;
}

.search-container {
  display: flex;
  align-items: center;
  padding-left: 10px;
  gap: 5px;
}

.search-container input {
  padding: 5px 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.search-container input:focus {
  border-color: #0056b3;
}

.search-button {
  background-color: #0056b3;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
}

.search-button:hover,
.search-button:focus {
  background-color: #004494;
}

.nav-menu .router-link-active {
  text-decoration: underline;
  font-weight: bold;
}
</style>

