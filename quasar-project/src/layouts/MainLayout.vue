<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-black"> Quasar Aplikacija Knjižnica </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Stranice knjižnice </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Knjižnica - početna',
    caption: 'Knjižnica - početna stranica',
    icon: 'home',
    link: '#/',
  },
  {
    title: 'Unos novih knjiga',
    caption: 'Unos novih knjiga u knjižnicu',
    icon: 'add',
    link: '#/UnosKnjiga',
  },
  {
    title: 'Nove knjige',
    caption: 'Nove knjige u knjižnici',
    icon: 'book',
    link: '#/NoveKnjige',
  },
  {
    title: 'Popis knjiga',
    caption: 'Popis knjiga u knjižnici',
    icon: 'list',
    link: '#/PopisKnjiga',
  },
  {
    title: 'Pretraživanje',
    caption: 'Pretraživanje knjižnice',
    icon: 'search',
    link: '#/Pretrazivanje',
  },
  {
    title: 'Lokacija',
    caption: 'Lokacija knjižnice',
    icon: 'directions',
    link: '#/Lokacija',
  },
  {
    title: 'Login',
    caption: 'Login u knjižnicu',
    icon: 'login',
    link: '#/Login',
  },
  {
    title: 'Registracija',
    caption: 'Registracija u knjižnicu',
    icon: 'face',
    link: '#/Registracija',
  },
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
