<template>
  <q-page class="">

  <!-- MENU  -->
  <div class="q-pa-sm">
    <div class="q-gutter-y-sm  full-width">
      <q-tabs
        v-model="tab"
        class="q-pb-xs text-grey row justify-evenly"
        align="justify"
        dense
      >
        <q-tab name="inr" label="INR" />
      </q-tabs>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="inr">
          <div class="text-h6">INR</div>
          Stats of INR measurement

          <div class="q-pa-xs">
            <q-table
              :data="INRdata"
              row-key="ID"
            />
          </div>

        </q-tab-panel>

      </q-tab-panels>

    </div>
  </div>

    <!-- <p>INR data</p>
    <ul>
      <li v-for="item in INRdata" :key="item.ID">
        {{ item }}
      </li>
    </ul> -->

  </q-page>
</template>

<script>
export default {
  name: 'PageStatistics',
  data () {
    return {
      INRdata: [
        { ID: 1, Date: '2021-01-05', INR: 2, PTs: 0, Doze: 7.5, Method: 'Qlabs', Comments: 'No change' },
        { ID: 3, Date: '2021-01-06', INR: 2.5, PTs: 0, Doze: 7.5, Method: 'Clinic', Comments: 'No change' },
        { ID: 4, Date: '2021-02-05', INR: 3, PTs: 0, Doze: 7.5, Method: 'Clinic', Comments: 'No change' },
        { ID: 5, Date: '2021-03-05', INR: 3.2, PTs: 0, Doze: 7.5, Method: 'Qlabs', Comments: 'Decrease weekly doze' },
        { ID: 6, Date: '2021-04-05', INR: 2.5, PTs: 0, Doze: 7.5, Method: 'Qlabs', Comments: 'No change' }
      ],
      tab: 'inr'

    }
  }

}
</script>
