import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const login = ref()
  const password = ref()
  const token = ref()
  const isCorrect = ref()

  return { login, password, token, isCorrect }
})
