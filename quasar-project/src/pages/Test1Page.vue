<template>
  <q-page padding>
    <div class="q-pa-md q-gutter-sm">
    <q-btn push color="white" text-color="primary" label="Unread Mails">
      <q-badge color="orange" v-model="unread" floating>{{ unread }}</q-badge>
    </q-btn>

    <q-btn dense color="purple" round icon="email" class="q-ml-md">
      <q-badge color="red" v-model="open" floating>{{ open }}</q-badge>
    </q-btn>

    <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">{{ title }}</div>
        <div class="text-subtitle2">{{autor}}</div>
      </q-card-section>

      <q-card-section>
        {{ tekst }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat @click="openMsg()">Open</q-btn>
        <q-btn flat @click="deleteMsg()">Delete</q-btn>
      </q-card-actions>
    </q-card>
    </div>
  </div>
  </q-page>
</template>

<script setup>
  import {ref} from 'vue'
  const title='Changing Planet'
  const autor='John Doe'
  const tekst='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  let unread = ref(22)
  let open = ref(4)

  function openMsg() {
    if (open.value>0){
    open.value -= 1
    console.log("open" + open.value)      
    }
    else {
      console.log("Nema više nepročitanih poruka.")
    }

  }
  function deleteMsg() {
    if (unread.value>0){
    unread.value -= 1
    console.log("delete" + unread.value)      
    }
    else {
      console.log("Nema više nepročitanih poruka.")
    }
  }
  
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px  
</style>
