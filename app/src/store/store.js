import Vue from 'vue'

export const store = Vue.observable({
  username: ''
})
export const mutations = {
  setName (data) {
    store.username = data;
  }
}