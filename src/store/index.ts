import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { InjectionKey } from 'vue'
import { State } from '../models'

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    version: 'v4.x',
    app: 'vue-easy-template',
    created: 'winoooops',
  },
  modules: {

  },
  getters: {

  }
})

export function useStore() {
  return baseUseStore(key)
}