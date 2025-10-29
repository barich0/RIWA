<template>
  <q-page class="q-pa-md">

    <div class="q-pa-md" style="max-width: 400px">
      <div class="text-h6 q-mb-md">Prijava korisnika</div>

      <q-input filled v-model="korisnickoIme" label="Korisničko ime" dense class="q-mb-sm" />
      <q-input filled v-model="lozinka" label="Lozinka" type="password" dense class="q-mb-md" />

      <q-btn color="primary" label="Potvrdi" @click="prijavi" />
    </div>

    <div v-if="poruka" class="q-mt-md text-positive">{{ poruka }}</div>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const korisnickoIme = ref('')
const lozinka = ref('')
const poruka = ref('')

function prijavi() {
  if (!korisnickoIme.value || !lozinka.value) {
    poruka.value = 'Molimo unesite korisničko ime i lozinku.'
    return
  }

  poruka.value = `Korisnik ${korisnickoIme.value} uspješno prijavljen!`

  korisnickoIme.value = ''
  lozinka.value = ''
}
</script>
