import { store, RootState } from '@/store'
import { Store, ActionContext } from 'vuex'
export interface UserState {
  username: string;
  addRoutes: Array<route>,
  id: string
}

interface route {
  path: string;
  component?: any;
}

const User = {
  state: {
    username: 'admin',
    addRoutes: [{ path: '/welcome' }],
    id: '001'
  },
  mutations: {
    GET_NAME(state: UserState, usename: string) {
      state.username = usename
    },
    GET_ID(state: UserState, id: string) {
      state.id = id
    },
    ADD_ROUTE(state: UserState, routes: Array<route>) {
      state.addRoutes = routes
    }
  },
  actions: {
    Login(context: ActionContext<UserState, RootState>, data: { account: string, password: string }) {
      // async function here
      context.commit('GET_NAME', 'admin')
      context.commit('GET_ID', '001')
    },
    Logout(context: ActionContext<UserState, RootState>) {

    },
    GetUserInfo(context: ActionContext<UserState, RootState>) {

    },
    GenerateRoutes(context: ActionContext<UserState, RootState>) {
      context.commit('ADD_ROUTE', [{ path: '/welcome' }, { path: '/main' }])
    }
  }

}

export default User
