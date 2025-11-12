<template>
  <q-page class="q-pa-md">
    <q-card class="q-pa-lg" style="max-width: 600px; margin: auto;">
      <q-card-section>
        <div class="text-h6">Unos nove knjige</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="spremiKnjigu" ref="formaKnjiga">
          <q-input filled v-model="knjiga.id" label="ID knjige" readonly class="q-mb-md" />
          <q-input filled v-model="knjiga.naslov" label="Naslov" class="q-mb-md" />
          <q-input filled v-model="knjiga.autor" label="Autor" class="q-mb-md" />
          <q-input filled type="textarea" v-model="knjiga.opis" label="Opis" class="q-mb-md" />
          <q-file filled v-model="knjiga.slika" label="Odaberi sliku" accept="image/*" class="q-mb-md" />
          <q-select filled v-model="knjiga.status" :options="statusOpcije" label="Status" class="q-mb-md" />

          <div class="row justify-end q-gutter-sm q-mt-lg">
            <q-btn label="Odustani" color="negative" @click="odustani" flat />
            <q-btn label="Spremi" color="primary" type="submit" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>

    <div v-if="knjige.length" class="q-mt-xl">
      <div class="text-h6 text-center q-mb-md">Popis unesenih knjiga</div>

      <div class="row q-col-gutter-md justify-center">
        <q-card
          v-for="(k, i) in knjige"
          :key="i"
          class="col-12 col-sm-6 col-md-4"
        >
          <q-img
            v-if="k.slikaURL"
            :src="k.slikaURL"
            ratio="4/3"
          />
          <q-card-section>
            <div><b>ID:</b> {{ k.id }}</div>
            <div><b>Naslov:</b> {{ k.naslov }}</div>
            <div><b>Autor:</b> {{ k.autor }}</div>
            <div><b>Opis:</b> {{ k.opis }}</div>
            <div><b>Status:</b> {{ k.status }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const formaKnjiga = ref(null)
const knjige = ref([])

const knjiga = ref({
  id: 1,
  naslov: '',
  autor: '',
  opis: '',
  slika: null,
  status: ''
})

const statusOpcije = [
  { label: 'Slobodna', value: 'slobodna' },
  { label: 'Zauzeta', value: 'zauzeta' }
]

function spremiKnjigu() {
  let slikaURL = null
  if (Array.isArray(knjiga.value.slika)) {
    slikaURL = URL.createObjectURL(knjiga.value.slika[0])
  } else if (knjiga.value.slika instanceof File) {
    slikaURL = URL.createObjectURL(knjiga.value.slika)
  }

  knjige.value.push({
    id: knjiga.value.id,
    naslov: knjiga.value.naslov,
    autor: knjiga.value.autor,
    opis: knjiga.value.opis,
    status: knjiga.value.status,
    slikaURL
  })

  knjiga.value.id++
  odustani()
}

function odustani() {
  knjiga.value.naslov = ''
  knjiga.value.autor = ''
  knjiga.value.opis = ''
  knjiga.value.slika = null
  knjiga.value.status = ''
  formaKnjiga.value.resetValidation()
}
</script>
