<template>
  <q-layout view="lHh lpR lFf">

    <!-- Header content -->
    <q-header
      rounded
      class="bg-white text-grey"
      height-hint="98">
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="left = !left" />

        <q-toolbar-title class="text-h6">
          INR Helper
        </q-toolbar-title>

        <!-- Account dialog  -->
        <q-btn
          flat
          round
          dense
          icon="account_circle"
          aria-label="Account"
          @click="showAccountDialog = true"
        />
        <q-dialog v-model="showAccountDialog">
          <q-card>
            <q-toolbar>
              <q-avatar>
                <img src="../logos/google.png">
              </q-avatar>

              <q-toolbar-title>Account</q-toolbar-title>

              <q-btn flat round dense icon="close" v-close-popup />
            </q-toolbar>

            <q-card-section>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
            </q-card-section>
          </q-card>
        </q-dialog>

      </q-toolbar>
    </q-header>

    <!-- Drawer  -->
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
      <router-view />
    </q-page-container>

    <!-- Footer  -->
    <q-footer bordered class="bg-white text-grey">
      <q-toolbar>
          <div class="full-width" >

            <q-tabs
              v-model="tab"
              class="text-grey row justify-evenly"
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
export default {
  data () {
    return {
      showAccountDialog: false,
      left: false,
      tab: 'home'
    }
  }
}
</script>
