<script setup lang="ts">
import ActionButtons from './components/ActionButtons.vue'
</script>

<template>
  <v-app>
    <v-app-bar flat color="rgb(24, 24, 24)">
      <v-container class="d-flex justify-end py-2 px-4">
        <ActionButtons />
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <!-- Main content here -->
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
.v-application {
  background-color: rgb(24, 24, 24) !important;
}

.v-app-bar {
  border-bottom: 1px solid rgb(64, 64, 64) !important;
}

.v-container {
  max-width: none !important;
}
</style>
