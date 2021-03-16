import type { Context } from '@nuxt/types'
import type { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  description: "I'm defined as an initial state",
  cookieAccepted: false,
  menuOpen: false
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  reversedName: (state): string => state.description.split('').reverse().join('')
}

export const MutationType = {
  CHANGE_DESCRIPTION: 'changeDescription',
  ACCEPT_COOKIE: 'acceptCookie',
  TOGGLE_MENU: 'toggleMenu',
  SET_OPEN_MENU: 'setOpenMenu',
}

export const mutations: MutationTree<RootState> = {
  [MutationType.CHANGE_DESCRIPTION]: (state, newDescription: string) => {
    state.description = newDescription
  },
  [MutationType.ACCEPT_COOKIE]: (state, response: boolean) => {
    state.cookieAccepted = response
  },
  [MutationType.TOGGLE_MENU]: (state) => {
    if (state.menuOpen) {
      document.body.classList.remove('blocked')
    } else {
      document.body.classList.add('blocked')
    }
    state.menuOpen = !state.menuOpen
  },
  [MutationType.SET_OPEN_MENU]: (state, payload: boolean) => {
    if (payload) {
      document.body.classList.add('blocked')
    } else {
      document.body.classList.remove('blocked')
    }
    state.menuOpen = payload
  }
}

export const actions: ActionTree<RootState, RootState> = {
  nuxtServerInit({ commit }, _context: Context) {
    commit(MutationType.CHANGE_DESCRIPTION, "I'm defined by server side")
  },
  cookieAccepted({ commit }, _context: Context) {
    commit(MutationType.ACCEPT_COOKIE, _context)
  },
  toggleMenu({ commit }) {
    commit(MutationType.TOGGLE_MENU)
  },
  openMenu({ commit }) {
    commit(MutationType.SET_OPEN_MENU)
  }
}