/* eslint-disable */
import { Store } from 'vuex'
import { ComponentCustomProperties } from 'vue'
import { State } from '@/store'

declare module '@vue/runtime-core' {

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}