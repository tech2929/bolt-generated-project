<script setup lang="ts">
import { ref } from 'vue'
import { downloadCurrentProject } from '../services/fileService'
import SupabaseModal from './SupabaseModal.vue'

const exportMenu = ref(false)
const supabaseMenu = ref(false)
const isDownloading = ref(false)
const showError = ref(false)
const errorMessage = ref('')
const showSupabaseModal = ref(false)

const downloadFile = async () => {
  try {
    isDownloading.value = true
    await downloadCurrentProject()
    showError.value = false
  } catch (error) {
    console.error('Failed to download project:', error)
    errorMessage.value = error instanceof Error ? error.message : 'Failed to download project. Please try again.'
    showError.value = true
  } finally {
    isDownloading.value = false
    exportMenu.value = false
  }
}

const openInStackBlitz = () => {
  const currentPath = window.location.pathname;
  window.open(`https://stackblitz.com${currentPath}`, '_blank');
}

const createSupabaseProject = () => {
  showSupabaseModal.value = true
  supabaseMenu.value = false
}

const signInToSupabase = () => {
  window.open('https://app.supabase.com/sign-in', '_blank')
  supabaseMenu.value = false
}

const handleSupabaseConnect = (projectRef: string) => {
  console.log('Connected to Supabase project:', projectRef)
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

    <!-- Supabase Button with Menu -->
    <v-menu
      v-model="supabaseMenu"
      :close-on-content-click="true"
      location="bottom"
      offset="5"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          class="custom-btn supabase-btn"
          size="small"
          variant="outlined"
        >
          <v-icon size="18" class="mr-2">mdi-database</v-icon>
          Connect to Supabase
          <v-icon size="18" class="ml-1">mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      
      <v-list class="custom-menu" bg-color="rgb(32, 32, 32)">
        <v-list-item
          @click="createSupabaseProject"
          class="custom-menu-item"
          height="36"
        >
          <template v-slot:prepend>
            <v-icon size="18" class="mr-2">mdi-plus</v-icon>
          </template>
          <v-list-item-title class="text-body-2">
            Create New Project
          </v-list-item-title>
        </v-list-item>
        
        <v-list-item
          @click="signInToSupabase"
          class="custom-menu-item"
          height="36"
        >
          <template v-slot:prepend>
            <v-icon size="18" class="mr-2">mdi-login</v-icon>
          </template>
          <v-list-item-title class="text-body-2">
            Sign In
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

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
      :timeout="5000"
      location="bottom"
    >
      {{ errorMessage }}
      <template v-slot:actions>
        <v-btn
          color="white"
          variant="text"
          @click="showError = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <!-- Supabase Modal -->
    <SupabaseModal
      v-model="showSupabaseModal"
      @connect="handleSupabaseConnect"
    />
  </div>
</template>

<style scoped>
.custom-btn {
  text-transform: none;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 0;
  height: 32px !important;
  border-radius: 6px;
}

.export-btn {
  background-color: rgb(32, 32, 32) !important;
  border-color: rgb(64, 64, 64) !important;
  color: rgb(255, 255, 255) !important;
}

.export-btn:hover {
  background-color: rgb(40, 40, 40) !important;
}

.supabase-btn {
  background-color: rgb(32, 32, 32) !important;
  border-color: rgb(64, 64, 64) !important;
  color: rgb(255, 255, 255) !important;
}

.supabase-btn:hover {
  background-color: rgb(40, 40, 40) !important;
}

.deploy-btn {
  background-color: rgb(59, 130, 246) !important;
  color: white !important;
  border: none !important;
}

.deploy-btn:hover {
  background-color: rgb(37, 99, 235) !important;
}

:deep(.custom-menu) {
  background-color: rgb(32, 32, 32) !important;
  border: 1px solid rgb(64, 64, 64) !important;
  border-radius: 6px;
  min-width: 200px;
  margin-top: 4px;
}

:deep(.custom-menu-item) {
  min-height: 36px !important;
  padding: 0 12px !important;
}

:deep(.custom-menu-item:hover) {
  background-color: rgb(40, 40, 40) !important;
}

:deep(.v-list-item-title) {
  font-size: 13px !important;
  font-weight: 400;
  color: white;
}

:deep(.v-icon) {
  opacity: 0.9;
}
</style>
