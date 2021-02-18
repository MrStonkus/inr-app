<template>
    <q-card

      class="status-card"
      bordered
      @click="expanded = !expanded"
      >

      <q-card-section>
        <div class="text-h6 text-center">Your status</div>
        <div class="text-h4 text-center text-positive text-bold">{{statusText}}</div>
      </q-card-section>

      <!-- Insert status list items -->
      <q-card-section class="q-py-none">
        <p
          class="q-mb-none"
          v-for="item in StatusItems"
          :key="item.name"
          >
          {{item.name}} - {{item.value}}{{item.unit}}, {{item.comment}}</p>
      </q-card-section>

      <q-card-section class="q-py-none">
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
          >{{MoreOrLess}}
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
import { date } from 'quasar'

export default {
  props: {
    fullDate: Number
  },
  data () {
    return {
      expanded: false,
      inr: {
        value: 2.32,
        PT: 24.6,
        measurementDate: new Date(2021, 1, 18),
        targetValue: 2.5,
        minValue: 2,
        maxValue: 3,
        idealRange: 0.1, // maximum difference for ideal
        perfectRange: 0.2, // maximum difference for perfect
        normalRange: 0.5 // maximum difference for normal

      },
      statusText: 'Good',
      lorem: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic voluptas ex in commodi, aliquid, doloribus ipsam tempora non quisquam numquam, pariatur id facilis repellendus atque perspiciatis nihil modi? Ab.'
    }
  },
  computed: {
    MoreOrLess () {
      return this.expanded ? 'Less' : 'More'
    },
    StatusItems () {
      // get info for current inr
      const inr = this.inr.value
      const minIdeal = this.inr.targetValue - this.inr.idealRange
      const maxIdeal = this.inr.targetValue + this.inr.idealRange
      const minPerfect = this.inr.targetValue - this.inr.perfectRange
      const maxPerfect = this.inr.targetValue + this.inr.perfectRange
      let inrComment = ''

      if ((inr >= minIdeal) && (inr <= maxIdeal)) {
        inrComment = 'ideal'
      } else if ((inr >= minPerfect) && (inr <= maxPerfect)) {
        inrComment = 'perfect'
      } else if (inr >= this.inr.minValue && inr <= this.inr.maxValue) {
        inrComment = 'normal, in range'
      } else if (inr >= this.inr.maxValue) {
        inrComment = 'attention, too high!'
      } else {
        inrComment = 'attention, too low!'
      }

      // get info for last measurement
      const today = date.formatDate(Date.now(), 'YYYY-MM-DD')
      const measurementDate = date.formatDate(this.inr.measurementDate, 'YYYY-MM-DD')
      const diff = date.getDateDiff(today, measurementDate, 'days')
      let lastMeasure = ''

      if (diff === 0) {
        lastMeasure = 'today'
      } else if (diff === 1) {
        lastMeasure = 'yesterday'
      } else if (diff < 0) {
        lastMeasure = 'in the future, strange...'
      } else {
        lastMeasure = diff + ' days ago'
      }

      // create and return list of status objects
      return [
        { name: 'Current INR', value: this.inr.value, unit: '', comment: inrComment },
        { name: 'Last measurement', value: lastMeasure, unit: '', comment: inrComment }
        // { name: 'Weekly dose', value: 40, unit: 'mg' }
      ]
    }
  },
  methods: {

  }
}
</script>
<style lang="sass" scoped>
.status-card
  width: 100%
</style>
