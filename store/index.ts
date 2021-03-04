import type { Context } from '@nuxt/types'
import type { GetterTree, ActionTree, MutationTree } from 'vuex'

export interface RootState {
  description: string
  cookieAccepted: boolean
}

export const state = (): {
  cookieAccepted: any;
  description: string } => ({
  description: "I'm defined as an initial state",
  cookieAccepted: false
})

export const getters: GetterTree<RootState, RootState> = {
  reversedName: (state): string => state.description.split('').reverse().join('')
}

export const MutationType = {
  CHANGE_DESCRIPTION: 'changeDescription',
  ACCEPT_COOKIE: 'acceptCookie'
}

export const mutations: MutationTree<RootState> = {
  [MutationType.CHANGE_DESCRIPTION]: (state, newDescription: string) => { state.description = newDescription },
  [MutationType.ACCEPT_COOKIE]: (state, response: boolean) => { state.cookieAccepted = response }
}

export const actions: ActionTree<RootState, RootState> = {
  nuxtServerInit ({ commit }, _context: Context) {
    commit(MutationType.CHANGE_DESCRIPTION, "I'm defined by server side")
  },
  cookieAccepted ({ commit }, _context: Context) {
    commit(MutationType.ACCEPT_COOKIE, _context)
  }
}
