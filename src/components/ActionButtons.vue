<script setup lang="ts">
import { ref } from 'vue'
import { downloadCurrentProject } from '../services/fileService'

const exportMenu = ref(false)
const isDownloading = ref(false)
const showError = ref(false)
const errorMessage = ref('')

const downloadFile = async () => {
  try {
    isDownloading.value = true
    await downloadCurrentProject()
    showError.value = false
  } catch (error) {
    console.error('Failed to download project:', error)
    errorMessage.value = 'Failed to download project. Please try again.'
    showError.value = true
  } finally {
    isDownloading.value = false
    exportMenu.value = false
  }
}

const openInStackBlitz = () => {
  window.open('https://stackblitz.com/~/github.com/your-repo', '_blank')
}

const connectToSupabase = () => {
  console.log('Connecting to Supabase...')
}

const deploy = () => {
  console.log('Deploying...')
}
</script>

<template>
  <div class="d-flex align-center gap-3">
    <!-- Export Button with Menu -->
    <v-menu
      v-model="exportMenu"
      :close-on-content-click="true"
      location="bottom"
      offset="5"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          class="custom-btn export-btn"
          size="small"
          variant="outlined"
        >
          <v-icon size="18" class="mr-2">mdi-export</v-icon>
          Export
          <v-icon size="18" class="ml-1">mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      
      <v-list class="custom-menu" bg-color="rgb(32, 32, 32)">
        <v-list-item
          @click="downloadFile"
          :disabled="isDownloading"
          class="custom-menu-item"
          height="36"
        >
          <template v-slot:prepend>
            <v-icon
              v-if="!isDownloading"
              size="18"
              class="mr-2"
            >mdi-download</v-icon>
            <v-progress-circular
              v-else
              indeterminate
              size="16"
              width="2"
              color="white"
              class="mr-2"
            />
          </template>
          <v-list-item-title class="text-body-2">
            {{ isDownloading ? 'Downloading...' : 'Download' }}
          </v-list-item-title>
        </v-list-item>
        
        <v-list-item
          @click="openInStackBlitz"
          class="custom-menu-item"
          height="36"
        >
          <template v-slot:prepend>
            <v-icon size="18" class="mr-2">mdi-lightning-bolt</v-icon>
          </template>
          <v-list-item-title class="text-body-2">
            Open in StackBlitz
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- Connect to Supabase Button -->
    <v-btn
      class="custom-btn supabase-btn"
      size="small"
      variant="outlined"
      @click="connectToSupabase"
    >
      <v-icon size="18" class="mr-2">mdi-database</v-icon>
      Connect to Supabase
    </v-btn>

    <!-- Deploy Button -->
    <v-btn
      class="custom-btn deploy-btn"
      size="small"
      @click="deploy"
    >
      <v-icon size="18" class="mr-2">mdi-rocket-launch</v-icon>
      Deploy
    </v-btn>

    <!-- Error Snackbar -->
    <v-snackbar
      v-model="showError"
      color="error"
      timeout="3000"
      location="bottom"
    >
      {{ errorMessage }}
    </v-snackbar>
  </div>
</template>

<style scoped>
/* ... existing styles remain the same ... */
</style>
