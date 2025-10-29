<template>
  <q-page padding>
    <!-- content -->

     <q-toolbar class="bg-purple-6 text-white">
      <q-toolbar-title>
        Nove Knjige
      </q-toolbar-title>
    </q-toolbar>

     <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img src="https://covers.openlibrary.org/b/id/7222246-L.jpg">

      <q-card-section>
        <div class="text-h6">1984</div>
        <div class="text-subtitle2">George Orwell</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ jedan }}
      </q-card-section>
    </q-card>
    
    <q-card class="my-card">
      <img src="https://www.knjiga.ba/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/slike/mali_princ_novo.jpg">

      <q-card-section>
        <div class="text-h6">Mali princ</div>
        <div class="text-subtitle2">Antoine de Saint-Exupéry</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ princ }}
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <img src="https://mojaknjiga.hr/wp-content/uploads/2024/08/37058-LOVAC-U-ZITU.jpg">

      <q-card-section>
        <div class="text-h6">Lovac u žitu</div>
        <div class="text-subtitle2">J.D. Salinger</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lovac }}
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <img src="https://www.knjigeonline.com/wp-content/uploads/2022/04/Fjodor-Mihailovic-Dostojevski-Zlocin-i-Kazna-knjiga.jpg" alt="Zločin i kazna">
      <q-card-section>
        <div class="text-h6">Zločin i kazna</div>
        <div class="text-subtitle2">Fjodor Dostojevski</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ zlocinikazna }}
      </q-card-section>
    </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  setup () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      zlocinikazna: 'Roman "Zločin i kazna" objavljen je 1866. godine i smatra se jednim od najvažnijih djela ruske književnosti. Radnja se odvija u Sankt-Peterburgu i prati propalog studenta prava, Rodiona Raskoljnikova, koji odlučuje ubiti lihvaricu Aljonu Ivanovnu kako bi riješio svoje financijske probleme. Raskoljnikov vjeruje da su neki ljudi iznad moralnih zakona i da imaju pravo činiti zlo ako to vodi višem cilju. Međutim, nakon zločina, suočava se s dubokim psihološkim mukama i moralnom krizom.',
      lovac: 'U knjizi, 17-godišnji Holden Caulfield prepričava svoja iskustva iz prijašnje godine svoga života (kada je imao 16 godina). Holden je izbačen iz Pencey Preparatory School (privatna srednja škola koju pohađa), nakon što pada iz svih predmeta osim engleskog jezika. Holden odlazi u New York, planirajući provesti par dana u gradu prije nego što ode kući i obavijesti roditelje. Knjiga, pisana u prvom licu, prepričava ta tri dana provedena u New Yorku.',
      princ: 'Mali princ je suvremena bajka čija je radnja izmišljena i nestvarna, ali ipak ima stvarne likove. Autor nam je kroz nju prikazao probleme modernog doba. Ono o čemu govori priča su nedostatak ljubavi i njezin pronalazak, otuđenost od ljudi i usamljenost.',
      jedan: '1984 je distopijski roman George-a Orwell-a koji istražuje teme totalitarizma, nadzora i manipulacije, a i dalje ostaje izuzetno relevantan u današnjem društvu.'
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
