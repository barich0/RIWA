<template>
  <q-page class="q-pa-md">

    <div class="q-pa-md" style="max-width: 500px">
      <div class="text-h6 q-mb-md">Pretraživanje knjiga</div>

      <q-input
        filled
        v-model="searchTerm"
        label="Unesite pojam za pretragu"
        dense
        class="q-mb-md"
      />

      <div class="q-gutter-sm q-mb-md">
        <q-checkbox v-model="searchByTitle" label="Po naslovu" />
        <q-checkbox v-model="searchByAuthor" label="Po autoru" />
      </div>

      <q-btn color="primary" label="Traži" @click="pretraziKnjige" />
    </div>

    <div v-if="filteredBooks.length" class="q-pa-md">
      <q-table
        title="Rezultati pretrage"
        :rows="filteredBooks"
        :columns="columns"
        row-key="id"
        flat
        bordered
      >
        <template v-slot:body-cell-slika="props">
          <q-td :props="props">
            <img
              :src="props.row.slika"
              alt="slika knjige"
              style="width: 60px; height: 80px; object-fit: cover; border-radius: 4px;"
            />
          </q-td>
        </template>
      </q-table>
    </div>

    <div v-else class="q-pa-md text-grey">
      Nema rezultata pretrage.
    </div>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const searchTerm = ref('')
const searchByTitle = ref(true)
const searchByAuthor = ref(false)
const filteredBooks = ref([])

const rows = [
  {
    id: 1,
    naslov: '1984',
    autor: 'George Orwell',
    opis: 'Distopijski roman o totalitarnom društvu.',
    slika: 'https://covers.openlibrary.org/b/id/7222246-L.jpg',
    status: 'slobodna'
  },
  {
    id: 2,
    naslov: 'Mali princ',
    autor: 'Antoine de Saint-Exupéry',
    opis: 'Priča o dječaku i smislu života.',
    slika: 'https://www.knjiga.ba/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/slike/mali_princ_novo.jpg',
    status: 'zauzeta'
  },
  {
    id: 3,
    naslov: 'Lovac u žitu',
    autor: 'J.D.Salinger',
    opis: 'Roman o 17-ogodišnjem dječaku.',
    slika: 'https://mojaknjiga.hr/wp-content/uploads/2024/08/37058-LOVAC-U-ZITU.jpg',
    status: 'slobodna'
  },
  {
    id: 4,
    naslov: 'Zločin i kazna',
    autor: 'Fjodor Dostojevski',
    opis: 'Priča o moralnim dvojbama i iskupljenju.',
    slika: 'https://www.knjigeonline.com/wp-content/uploads/2022/04/Fjodor-Mihailovic-Dostojevski-Zlocin-i-Kazna-knjiga.jpg',
    status: 'zauzeta'
  }
]

const columns = [
  { name: 'id', label: 'ID', field: 'id', align: 'left' },
  { name: 'naslov', label: 'Naslov', field: 'naslov', align: 'left' },
  { name: 'autor', label: 'Autor', field: 'autor', align: 'left' },
  { name: 'opis', label: 'Opis', field: 'opis', align: 'left' },
  { name: 'slika', label: 'Slika', field: 'slika', align: 'center' },
  { name: 'status', label: 'Status', field: 'status', align: 'center' }
]

function pretraziKnjige() {
  const pojam = searchTerm.value.toLowerCase().trim()
  if (!pojam) {
    filteredBooks.value = []
    return
  }

  filteredBooks.value = rows.filter(knjiga => {
    const naslovOk = searchByTitle.value && knjiga.naslov.toLowerCase().includes(pojam)
    const autorOk = searchByAuthor.value && knjiga.autor.toLowerCase().includes(pojam)
    return naslovOk || autorOk
  })
}
</script>
