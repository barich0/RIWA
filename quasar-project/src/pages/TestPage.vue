<template>
  <q-page padding>
    <!-- content -->
     <h1>{{ msg }}</h1>
     <p v-html="poruka"></p>
     <p v-html="htmlText"></p>
     <p v-text="htmlText"></p>

     <p v-for="item in days" :key="item">
      <button v-if="item == 'Ponedjeljak'">
        {{ item }}*
      </button>
      <button v-else-if="item == 'Utorak'" v-show="false">
        {{ item }}
      </button>
      <button v-else>
        {{ item }}
      </button>
    </p>
  </q-page>
</template>

<script setup>
  const msg = "Test stranica"
  const poruka = "Ovo je test"
  const htmlText = "<p><b>Formatirani tekst</b> na stranici</p>"
  const days = ['Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota', 'Nedjelja']
</script>
