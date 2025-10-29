<template>
  <q-page padding>

    <div class="q-pa-md" style="max-width: 350px">
      <q-list bordered separator>
        <q-item clickable v-ripple>
          <q-item-section>Single line item</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>Item with caption</q-item-label>
            <q-item-label caption>Caption</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label overline>OVERLINE</q-item-label>
            <q-item-label>Item with overline</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <div class="q-pa-md" style="max-width: 350px">
      <q-list bordered>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="bluetooth" />
          </q-item-section>
          <q-item-section>Icon as avatar</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar color="teal" text-color="white" icon="bluetooth" />
          </q-item-section>
          <q-item-section>Avatar-type icon</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar rounded color="purple" text-color="white" icon="bluetooth" />
          </q-item-section>
          <q-item-section>Rounded avatar-type icon</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white">
              R
            </q-avatar>
          </q-item-section>
          <q-item-section>Letter avatar-type</q-item-section>
        </q-item>

        <q-separator />

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>Image avatar</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar square>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>Image square avatar</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar rounded>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>Image rounded avatar</q-item-section>
        </q-item>

        <q-separator />

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar rounded>
              <img src="https://cdn.quasar.dev/img/mountains.jpg">
            </q-avatar>
          </q-item-section>
          <q-item-section>List item</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section thumbnail>
            <img src="https://cdn.quasar.dev/img/mountains.jpg">
          </q-item-section>
          <q-item-section>List item</q-item-section>
        </q-item>
      </q-list>
    </div>

    <div class="q-pa-md">
      <q-table
        title="Knjige"
        :rows="rows"
        :columns="columns"
        row-key="id"
        flat
        bordered
      >
        <template v-slot:body-cell-slika="props">
          <q-td :props="props">
            <img
              :src="props.row.slika"
              alt="Slika knjige"
              style="width: 60px; height: 80px; object-fit: cover; border-radius: 4px;"
            />
          </q-td>
        </template>
      </q-table>
    </div>

  </q-page>
</template>

<script setup>
const columns = [
  {
    name: 'id',
    label: 'ID',
    field: 'id',
    align: 'left',
    sortable: true,
    style: { fontSize: '14px' },
    headerStyle: { fontSize: '18px' }
  },
  {
    name: 'naslov',
    label: 'Naslov',
    field: 'naslov',
    align: 'left',
    sortable: true,
    style: { fontSize: '14px' },
    headerStyle: { fontSize: '18px' }
  },
  {
    name: 'autor',
    label: 'Autor',
    field: 'autor',
    align: 'left',
    sortable: true,
    style: { fontSize: '14px' },
    headerStyle: { fontSize: '18px' }
  },
  {
    name: 'opis',
    label: 'Opis',
    field: 'opis',
    align: 'left',
    style: { fontSize: '14px' },
    headerStyle: { fontSize: '18px' }
  },
  {
    name: 'slika',
    label: 'Slika',
    field: 'slika',
    align: 'center',
    style: { fontSize: '14px' },
    headerStyle: { fontSize: '18px' }
  },
  {
    name: 'status',
    label: 'Status',
    field: 'status',
    align: 'center',
    sortable: true,
    style: { fontSize: '14px' },
    headerStyle: { fontSize: '18px' }
  }
]

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
    opis: 'Roman o 17-ogodišnjem dječaku',
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
</script>
