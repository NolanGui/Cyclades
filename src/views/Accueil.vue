<template>
  <main id="Accueil">
    <section class="welcome-section" aria-labelledby="welcome-title">
      <h1 id="welcome-title">Bienvenue sur l'application Cyclades</h1>
      <p>
        Gérez efficacement vos concours et examens grâce à une interface repensée, intuitive et
        accessible.
      </p>
    </section>

    <nav aria-label="Navigation principale">
      <ul class="navigation-links">
        <li>
          <router-link to="/inscriptions" class="nav-link">Gérer les inscriptions</router-link>
        </li>
        <li>
          <router-link to="/convocations" class="nav-link">Gérer les convocations</router-link>
        </li>
        <li>
          <router-link to="/resultats" class="nav-link">Suivre les résultats</router-link>
        </li>
      </ul>
    </nav>

    <section class="features-section" aria-labelledby="features-title">
      <h2 id="features-title">Fonctionnalités principales</h2>
      <ul class="features-list">
        <li>Inscription rapide des candidats</li>
        <li>Convocation simplifiée</li>
        <li>Suivi détaillé des résultats</li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
/* Styles de base pour la page d'accueil */
#homepage {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
  background-color: #ffffff;
}

/* Section de bienvenue */
.welcome-section {
  text-align: center;
  margin-bottom: 40px;
}

.welcome-section h1 {
  font-size: 2rem;
  color: #004080;
}

.welcome-section p {
  font-size: 1.2rem;
  margin-top: 10px;
}

/* Navigation */
.navigation-links {
  list-style: none;
  padding: 0;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.nav-link {
  text-decoration: none;
  color: #004080;
  font-weight: bold;
  padding: 10px 20px;
  border: 2px solid #004080;
  border-radius: 5px;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.nav-link:hover,
.nav-link:focus {
  background-color: #004080;
  color: #ffffff;
  outline: none;
}

/* Section fonctionnalités */
.features-section {
  margin-top: 40px;
}

.features-section h2 {
  font-size: 1.5rem;
  color: #004080;
  margin-bottom: 20px;
}

.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f0f8ff;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
