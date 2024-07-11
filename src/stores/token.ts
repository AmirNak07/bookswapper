import { defineStore } from 'pinia'

const STORE_NAME = 'BS_TOKEN'

export type Settings = {
  token: string
}

const getDefaultSettings = () => ({
  token: ''
})

function getSettings(): Settings {
  const settings = localStorage.getItem(STORE_NAME)
  
  return settings ? JSON.parse(settings) : getDefaultSettings()
}

export const useStore =  defineStore(STORE_NAME, {
  state: () => ({
    settings: getSettings(),
  }),
  actions: {
    updateSettings(token: string) {
      this.settings.token = token

      localStorage.setItem(STORE_NAME, JSON.stringify(this.settings))
    }
  }
})