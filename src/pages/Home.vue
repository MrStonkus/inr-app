<template>
  <div class="q-pa-md row items-start q-gutter-md text-dark">

    <StatusCard v-if="showStatusCard"/>
    <RecommendationsCard v-if="showRecommendationsCard"/>

    <div class="card-width row ">
      <div
        class="col
         q-card
         q-mr-md
         q-pa-md

         "
         >
        INR check
      </div>
      <div
        bordered
        class="col
         q-card
         q-pa-md

        ">Today warfarin
      </div>

    </div>

    <q-card  bordered class="half-card">
      <q-card-section>
        <div class="text-h10">Next INR check</div>
        <span class="text-subtitle2">Tap to check</span>
      </q-card-section>
    </q-card>

    <q-card  bordered class="half-card">
      <q-card-section>
        <div class="text-h10">Next INR check</div>
        <span class="text-subtitle2">Tap to check</span>
      </q-card-section>
    </q-card>

  </div>
</template>

<script>
import StatusCard from '../components/StatusCard.vue'
import RecommendationsCard from '../components/RecommendationsCard.vue'

export default {
  components: {
    StatusCard,
    RecommendationsCard
  },
  data () {
    return {
      showStatusCard: true,
      showRecommendationsCard: true,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>
<style lang="sass" scoped>

.card-width
  width: 100%

.half-card
  width: 45%
  // max-width: 250px

</style>
