<template>
  <v-container class="inscription-page">
    <h1>Inscription aux examens</h1>

    <v-card class="inscription-form-card" elevation="2">
      <v-card-title class="headline">Formulaire d'inscription</v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="formValid">
          <v-text-field
            v-model="formData.fullName"
            label="Nom complet"
            outlined
            required
            aria-label="Nom complet"
            :rules="[rules.required]"
          ></v-text-field>

          <v-text-field
            v-model="formData.email"
            label="Adresse email"
            outlined
            required
            aria-label="Adresse email"
            :rules="[rules.required, rules.email]"
          ></v-text-field>

          <v-text-field
            v-model="formData.registrationNumber"
            label="Numéro d'inscription"
            outlined
            required
            aria-label="Numéro d'inscription"
            :rules="[rules.required]"
          ></v-text-field>

          <v-select
            v-model="formData.exam"
            :items="exams"
            label="Examen"
            outlined
            required
            aria-label="Sélectionnez l'examen"
            :rules="[rules.required]"
          ></v-select>

          <v-select
            v-model="formData.center"
            :items="centers"
            label="Centre d'examen"
            outlined
            required
            aria-label="Sélectionnez le centre d'examen"
            :rules="[rules.required]"
          ></v-select>

          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="formData.birthDate"
                label="Date de naissance"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                outlined
                required
                aria-label="Sélectionnez votre date de naissance"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="formData.birthDate"
              no-title
              @input="menu = false"
              :rules="[rules.required]"
            ></v-date-picker>
          </v-menu>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-btn
          :disabled="!formValid"
          color="primary"
          class="submit-btn"
          @click="submitForm"
          aria-label="Soumettre l'inscription"
        >
          Soumettre
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'InscriptionPage',
  data() {
    return {
      formValid: false,
      formData: {
        fullName: '',
        email: '',
        registrationNumber: '',
        exam: '',
        center: '',
        birthDate: '',
      },
      menu: false,
      exams: ['Mathématiques', 'Physique', 'Chimie', 'Informatique'],
      centers: ['Paris', 'Lyon', 'Marseille', 'Rennes'],
      rules: {
        required: (value) => !!value || 'Ce champ est requis.',
        email: (value) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'Adresse email invalide.',
      },
    }
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        console.log('Formulaire soumis : ', this.formData)
        alert('Votre inscription a été enregistrée avec succès !')
        this.resetForm()
      }
    },
    resetForm() {
      this.formData = {
        fullName: '',
        email: '',
        registrationNumber: '',
        exam: '',
        center: '',
        birthDate: '',
      }
      this.$refs.form.resetValidation()
    },
  },
}
</script>

<style scoped>
.inscription-page {
  margin: 20px auto;
  max-width: 800px;
}

.inscription-form-card {
  padding: 20px;
  margin-top: 20px;
}

.submit-btn {
  margin-left: auto;
}
</style>
