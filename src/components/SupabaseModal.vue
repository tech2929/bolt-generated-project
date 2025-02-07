<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'connect': [projectRef: string]
}>()

const projectName = ref('')
const dbPassword = ref('')
const region = ref('us-east-1')
const isLoading = ref(false)
const error = ref('')

const regions = [
  { value: 'us-east-1', label: 'US East (N. Virginia)' },
  { value: 'us-west-1', label: 'US West (N. California)' },
  { value: 'eu-central-1', label: 'EU (Frankfurt)' },
  { value: 'ap-southeast-1', label: 'Asia Pacific (Singapore)' }
]

const close = () => {
  emit('update:modelValue', false)
  // Reset form
  projectName.value = ''
  dbPassword.value = ''
  region.value = 'us-east-1'
  error.value = ''
}

const createProject = async () => {
  if (!projectName.value || !dbPassword.value) {
    error.value = 'Please fill in all required fields'
    return
  }

  try {
    isLoading.value = true
    error.value = ''

    // Here we would normally make the API call to create the Supabase project
    // For now, we'll simulate the creation
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    emit('connect', 'project-ref-123')
    close()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to create project'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <v-dialog
    v-model="props.modelValue"
    max-width="500px"
    persistent
    class="supabase-modal"
  >
    <v-card class="pa-4" color="rgb(32, 32, 32)">
      <v-card-title class="text-h6 pb-4">
        Create a Supabase Project
      </v-card-title>

      <v-card-text>
        <v-form @submit.prevent="createProject">
          <v-text-field
            v-model="projectName"
            label="Project Name"
            required
            variant="outlined"
            density="comfortable"
            class="mb-4"
            :rules="[v => !!v || 'Project name is required']"
          />

          <v-text-field
            v-model="dbPassword"
            label="Database Password"
            type="password"
            required
            variant="outlined"
            density="comfortable"
            class="mb-4"
            :rules="[
              v => !!v || 'Database password is required',
              v => (v && v.length >= 8) || 'Password must be at least 8 characters'
            ]"
          />

          <v-select
            v-model="region"
            :items="regions"
            label="Region"
            required
            variant="outlined"
            density="comfortable"
            class="mb-4"
          />

          <v-alert
            v-if="error"
            type="error"
            variant="tonal"
            class="mb-4"
          >
            {{ error }}
          </v-alert>
        </v-form>
      </v-card-text>

      <v-card-actions class="pt-2">
        <v-spacer />
        <v-btn
          color="grey"
          variant="text"
          @click="close"
          :disabled="isLoading"
        >
          Cancel
        </v-btn>
        <v-btn
          color="success"
          @click="createProject"
          :loading="isLoading"
          :disabled="!projectName || !dbPassword"
        >
          Create Project
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.supabase-modal :deep(.v-field) {
  border-radius: 6px;
  background-color: rgb(24, 24, 24) !important;
}

.supabase-modal :deep(.v-field__outline) {
  border-color: rgb(64, 64, 64) !important;
}

.supabase-modal :deep(.v-field--focused .v-field__outline) {
  border-color: rgb(var(--v-theme-success)) !important;
}
</style>
