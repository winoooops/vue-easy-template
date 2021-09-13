import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { InjectionKey } from 'vue'
import getters from './getters'
/* Do not delete the following line*/
// import state interfaces 
import User, { UserState } from './modules/user'

export const key: InjectionKey<Store<RootState>> = Symbol()

export interface RootState {
  user: UserState,
}

export const store = createStore<RootState>({
  modules: {
    user: User,
  },
  getters,
})



export function useStore() {
  return baseUseStore(key)
}
