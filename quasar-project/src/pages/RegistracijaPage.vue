<template>
  <q-page class="q-pa-md">

    <div class="q-pa-md" style="max-width: 400px">
      <div class="text-h6 q-mb-md">Registracija korisnika</div>

      <q-input filled v-model="ime" label="Ime" dense class="q-mb-sm" />
      <q-input filled v-model="prezime" label="Prezime" dense class="q-mb-sm" />
      <q-input filled v-model="korisnickoIme" label="Korisničko ime" dense class="q-mb-sm" />
      <q-input filled v-model="email" label="Email" type="email" dense class="q-mb-sm" />
      <q-input filled v-model="lozinka" label="Lozinka" type="password" dense class="q-mb-md" />

      <q-btn color="primary" label="Potvrdi" @click="potvrdi" />
    </div>

    <div v-if="poruka" class="q-mt-md text-positive">{{ poruka }}</div>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const ime = ref('')
const prezime = ref('')
const korisnickoIme = ref('')
const email = ref('')
const lozinka = ref('')
const poruka = ref('')

function potvrdi() {
  if (!ime.value || !prezime.value || !korisnickoIme.value || !email.value || !lozinka.value) {
    poruka.value = 'Molimo popunite sva polja.'
    return
  }

  poruka.value = `Korisnik ${ime.value} ${prezime.value} (${korisnickoIme.value}) uspješno registriran!`

  ime.value = prezime.value = korisnickoIme.value = email.value = lozinka.value = ''
}
</script>
