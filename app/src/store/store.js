import Vue from 'vue'

export const store = Vue.observable({
  username: '',
  showDialog: false
})

export const mutations = {
  setName(data) {
    store.username = data;
  },
  setShowDialog(data) {
    store.showDialog = data;
  }
}
