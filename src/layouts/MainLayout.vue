<template>
  <q-layout view="lHh lpR lFf">

    <!-- Header content -->
    <q-header
      bordered
      class="bg-primary text-secondary"
      height-hint="98">
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          style="font-size: 1.4em;"
          @click="left = !left" />

        <q-toolbar-title class="text-h6 gt-xs">
          INR Assistant
        </q-toolbar-title>

        <div class="absolute-right">
          <!-- Date string  -->
          <span>
            {{fullDate}}
          </span>
          <!-- Account dialog  -->
          <q-btn
            flat
            dense
            round
            icon="account_circle"
            style="font-size: 1.5em;"
            aria-label="Account"
            @click="showAccountDialog = true"
          />
          <q-dialog v-model="showAccountDialog">
            <q-card>
              <q-toolbar>
                <q-avatar>
                  <img src="../assets/google.png">
                </q-avatar>

                <q-toolbar-title>Account</q-toolbar-title>

                <q-btn flat round dense icon="close" v-close-popup />
              </q-toolbar>

              <q-card-section>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>

      </q-toolbar>
    </q-header>

    <!-- Drawer  -->
    <q-drawer
      show-if-above
      v-model="left"
      side="left"
      bordered
      >
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <!-- page content -->
      <router-view />
    </q-page-container>

    <!-- Footer  -->
    <q-footer bordered class="bg-primary">
      <q-toolbar  >
          <div class="q-gutter-y-md full-width" >

            <q-tabs
              v-model="tab"
              class="q-pb-xs text-secondary row justify-evenly"
              dense
            >
              <q-route-tab
                name="home"
                icon="home"
                to="/"
                label="Home"
                class=" justify-center"
                exact
              />
              <q-route-tab
                name="schedule"
                icon="schedule"
                to="/schedule"
                label="Schedule"
                exact

              />
              <q-route-tab
                name="stats"
                icon="insights"
                label="Statistics"
                to="/stats"
                exact
              />
            </q-tabs>

          </div>

      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { date } from 'quasar'

export default {
  data () {
    return {
      showAccountDialog: false,
      left: false,
      tab: 'home',
      fullDate: ''

    }
  },
  created () {
    // get fullDate at start
    this.getDate()
    // update fullDate every minute
    setInterval(() => {
      this.getDate()
    }, 60000)
  },
  methods: {
    getDate: function () {
      this.fullDate = date.formatDate(Date.now(), 'dddd, YYYY-MM-DD')
    }
  }
}
</script>
