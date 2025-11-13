<template>
  <q-page padding class="bg-grey-1">
    <h2 class="text-center q-mb-lg">Unos nove knjige</h2>

    <q-card flat bordered class="q-pa-lg q-mb-lg bg-white shadow-2" style="max-width: 400px; margin: auto;">
      <q-input
        outlined
        v-model="knjigaUnos.naslov"
        label="Naslov knjige"
        class="full-width q-mb-sm"
      />
      <q-input
        outlined
        v-model="knjigaUnos.autor"
        label="Autor"
        class="full-width q-mb-sm"
      />
      <q-input
        outlined
        v-model="knjigaUnos.opis"
        label="Opis knjige"
        type="textarea"
        class="full-width q-mb-sm"
      />
      <q-file
        filled
        v-model="knjigaUnos.slika"
        label="Odaberi sliku"
        accept="image/*"
        class="full-width q-mb-sm"
      />
      <q-select
        outlined
        v-model="knjigaUnos.status"
        :options="statusi"
        label="Status knjige"
        class="full-width q-mb-md"
      />

      <div class="flex justify-end">
        <q-btn color="primary" label="Spremi" @click="dodajKnjigu" class="q-mr-sm" />
        <q-btn color="negative" label="Poništi" flat @click="ponistiUnos" />
      </div>
    </q-card>

    <div class="column items-center q-gutter-md">
      <q-card
        v-for="item in listaKnjiga"
        :key="item.id"
        bordered
        class="full-width bg-grey-2 q-pa-sm"
        style="max-width: 400px;"
      >
        <q-img
          v-if="item.slikaUrl"
          :src="item.slikaUrl"
          :alt="item.naslov"
          style="height:180px; object-fit:cover; border-radius: 8px;"
        />
        <q-card-section>
          <div class="text-h6 q-mb-xs">{{ item.naslov }}</div>
          <div class="text-subtitle2 q-mb-xs">Autor: {{ item.autor }}</div>
          <div class="text-caption q-mb-sm">{{ item.opis }}</div>
          <q-badge
            :color="item.status === 'Slobodna' ? 'green' : 'red'"
            align="top"
          >
            {{ item.status }}
          </q-badge>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const statusi = ['Slobodna', 'Zauzeta']

const knjigaUnos = ref({
  id: null,
  naslov: '',
  autor: '',
  opis: '',
  slika: null,
  status: ''
})

const listaKnjiga = ref([])

function dodajKnjigu() {
  if (!knjigaUnos.value.naslov || !knjigaUnos.value.autor) {
    alert('Molimo unesite naslov i autora.')
    return
  }

  const noviId = listaKnjiga.value.length + 1

  let slikaUrl = ''
  if (knjigaUnos.value.slika) {
    slikaUrl = URL.createObjectURL(knjigaUnos.value.slika)
  }

  listaKnjiga.value.push({
    id: noviId,
    naslov: knjigaUnos.value.naslov,
    autor: knjigaUnos.value.autor,
    opis: knjigaUnos.value.opis,
    slikaUrl,
    status: knjigaUnos.value.status || 'Slobodna'
  })

  ponistiUnos()
}

function ponistiUnos() {
  knjigaUnos.value = {
    id: null,
    naslov: '',
    autor: '',
    opis: '',
    slika: null,
    status: ''
  }
}
</script>
