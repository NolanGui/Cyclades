<template>
  <footer class="app-footer">
    <div class="footer-links">
      <nav aria-label="Liens utiles">
        <ul>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">Conditions d'utilisation</a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">Politique de confidentialité</a>
          </li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">Aide</a></li>
        </ul>
      </nav>
    </div>
    <div class="footer-info">
      <p>&copy; 2024 Cyclades. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
.app-footer {
  background-color: #f8f9fa;
  color: #212529;
  padding: 20px;
  text-align: center;
  border-top: 1px solid #dee2e6;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.footer-links a {
  color: #007bff;
  text-decoration: none;
}

.footer-links a:hover,
.footer-links a:focus {
  text-decoration: underline;
}

.footer-info {
  margin-top: 10px;
  font-size: 0.9rem;
}
</style>
