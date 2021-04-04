<template>
  <div class="q-pa-md row items-start q-gutter-md text-dark">

    <StatusCard v-if="settings.showStatusCard"/>
    <RecommendationsCard v-if="settings.showRecommendationsCard"/>

    <!-- Two cards inline -->
    <div class="card-width row ">
      <div class="col q-card q-mr-md q-pa-md">
        INR check
      </div>
      <div bordered class="col q-card q-pa-md">
        Today warfarin
      </div>
    </div>

    <!-- Hide/show cards button -->
    <div class="full-width text-center">
      <q-btn
            color="grey"
            class="text-capitalize"
            flat
            dense
            @click="settings.hideShowCardsDialog = true"
            aria-label="Hide / Show cards"
            >Hide / show cards
          </q-btn>
      </div>

      <!-- Hide/show cards dialog  -->
      <q-dialog v-model="settings.hideShowCardsDialog">
        <q-card>
          <q-card-section>
            <div class="row">
              <div class="text-h6 ">Home cards</div>
              <q-space/>
              <q-btn flat round dense icon="close" v-close-popup />
            </div>
            <div class="text-subtitle2">Set home cards visibility</div>
            <div class="q-pa-md">
              <div class="column q-gutter-sm">
                <q-checkbox
                  v-model="settings.showStatusCard"
                  label="Status"
                  color="positive" />
                <q-checkbox
                  v-model="settings.showRecommendationsCard"
                  label="Recommendations"
                  color="positive" />
              </div>
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn
              flat
              label="Close"
              class="text-capitalize"
              color="secondary"
              v-close-popup />

        </q-card-actions>
        </q-card>
      </q-dialog>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import StatusCard from '../components/StatusCard.vue'
import RecommendationsCard from '../components/RecommendationsCard.vue'

export default {
  components: {
    StatusCard,
    RecommendationsCard
  },
  data () {
    return {

      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  computed: {
    // settings () { return this.$store.getters['settings/settings']}
    // or use mapGetters below
    ...mapGetters('settings', ['settings'])
  }
}
</script>
<style lang="sass" scoped>

.card-width
  width: 100%

</style>
