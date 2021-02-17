<template>
  <div class="q-pa-md row items-start q-gutter-md text-dark">

    <StatusCard v-if="showStatusCard"/>

    <q-card class="home-card " bordered>
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
      <q-separator inset class="q-mb-sm"/>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle2">More activity</div>
        {{ lorem }}
      </q-card-section>

    </q-card>
  </div>
</template>

<script>
import StatusCard from '../components/StatusCard.vue'

export default {
  components: {
    StatusCard
  },
  data () {
    return {
      showStatusCard: true,
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
