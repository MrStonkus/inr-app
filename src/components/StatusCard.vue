<template>
    <q-card

      class="status-card"
      bordered
      @click="expanded = !expanded"
      >

      <q-card-section>
        <div class="text-h6 text-center">Your status</div>
        <div class="text-h4 text-center text-positive text-bold">Very Good</div>
      </q-card-section>
      <q-card-section class="q-py-none">
        <p class="q-mb-none">Current INR - 2.32</p>
        <p class="q-mb-none">Measurement was - today</p>
        <p class="q-mb-none">Weekly dose - 40mg</p>
        <p class="q-mb-none">Dose and medicine monitoring - automaticaly</p>
      </q-card-section>
      <q-card-actions class="q-py-none">
        <q-space />
        <q-btn
          color="grey"
          class="text-capitalize"
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = expanded"
          >{{moreOrLess}}
        </q-btn>
      </q-card-actions>
      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle1">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>

    </q-card>
</template>
<script>
export default {
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic voluptas ex in commodi, aliquid, doloribus ipsam tempora non quisquam numquam, pariatur id facilis repellendus atque perspiciatis nihil modi? Ab.',
      expanded: false
    }
  },
  computed: {
    moreOrLess () {
      return this.expanded ? 'Less' : 'More'
    },
    INRComment () {
      const inr = this.currentINR
      const min = this.INRrangeLowest
      const max = this.INRrangeHighest
      const middle = (max - min) / 2 + min
      const maxDiff = this.maxDiffForPerfect

      if ((inr >= (middle - maxDiff)) && (inr <= (middle + maxDiff))) {
        return 'perfect'
      } else {
        return (inr >= min && inr <= max) ? 'in range' : 'not in range'
      }
    },
    statusItems () {
      return [
        { name: 'Current INR', value: this.currentINR, unit: '', comment: this.INRComment },
        { name: 'Measurement was', value: 'today', unit: 'days' },
        { name: 'Weekly dose', value: 40, unit: 'mg' }
      ]
    }
  }
}
</script>
<style lang="sass" scoped>
.status-card
  width: 100%
</style>
