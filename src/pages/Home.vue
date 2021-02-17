<template>
  <div class="q-pa-md row items-start q-gutter-md text-dark">

    <q-card class="home-card ">
      <q-card-section>
        <div class="text-h6 text-center">Your status</div>
        <div class="text-h4 text-center text-positive text-bold">Very Good</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <p class="q-mb-none">Current INR - 2.32</p>
        <p class="q-mb-none">Measurement was - today</p>
        <p class="q-mb-none">Weekly dose - 40mg</p>
        <p class="q-mb-none">Dose and medicine monitoring - automaticaly</p>
      </q-card-section>
    </q-card>

    <q-card class="home-card ">
      <q-card-section>
        <div class="text-h6 ">Personal recommentations</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <p class="q-mb-none">Keep using same weekly dose</p>
        <p class="q-mb-none">Check INR after 10 days</p>
      </q-card-section>
    </q-card>

    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">How can i help myself?</div>
        <div class="text-subtitle2">Stop smoking</div>
        {{ lorem }}
      </q-card-section>
      <q-separator inset />

      <q-card-section class="q-pt-none">
        <div class="text-subtitle2">More activity</div>
        {{ lorem }}
      </q-card-section>

    </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>
<style lang="sass" scoped>
.home-card
  width: 100%
  // max-width: 250px
</style>
