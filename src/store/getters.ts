import { RootState } from '@/store'
const getters = {
  /* Do not delete next line */
  // import getters
  username: (state: RootState) => state.user.username,
  id: (state: RootState) => state.user.id,
  addRoutes: (state: RootState) => state.user.addRoutes
}

export default getters