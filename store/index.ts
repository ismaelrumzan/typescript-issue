import type { Context } from '@nuxt/types'
import type { GetterTree, ActionTree, MutationTree } from 'vuex'
// import config from '@/nuxt.config'

export interface CustomWindow extends globalThis.Window {
  Calendly?: any
}

export const StorageKeys = {
  THEME: 'theme'
}

export const state = () => ({
  // developmentMode: false,
  // baseURL: isDev ? (config.publicRuntimeConfig as any).devBaseURL : (config.publicRuntimeConfig as any).baseURL,
  // appURL: isDev ? (config.publicRuntimeConfig as any).devAppURL : (config.publicRuntimeConfig as any).appURL,
  cookieAccepted: false,
  menuOpen: false,
  theme: 'light',
  meetingWidgetOpen: false
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  // reversedName: (state): string => state.description.split('').reverse().join('')
}

export const MutationType = {
  CHANGE_DESCRIPTION: 'changeDescription',
  ACCEPT_COOKIE: 'acceptCookie',
  TOGGLE_MENU: 'toggleMenu',
  SET_MENU_OPEN: 'setMenuOpen',
  SET_THEME: 'setTheme',
  SET_MEETING_WIDGET_OPEN: 'setMeetingWidgetOpen'
}

export const mutations: MutationTree<RootState> = {
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

  [MutationType.SET_MENU_OPEN]: (state, payload: boolean) => {
    if (payload) {
      document.body.classList.add('blocked')
    } else {
      document.body.classList.remove('blocked')
    }
    state.menuOpen = payload
  },

  [MutationType.SET_THEME]: (state, payload: string) => {
    document.documentElement.dataset.theme = payload
    localStorage.setItem(StorageKeys.THEME, payload)
    state.theme = payload
  },

  [MutationType.SET_MEETING_WIDGET_OPEN]: (state, payload: boolean) => {
    const widgetScript = document.getElementById('calendlyScript')
    const widgetStyles = document.getElementById('calendlyStyles')

    function initWidget(): void {
      (window as CustomWindow).Calendly?.showPopupWidget("https://calendly.com/digitalhotel");
    }

    // function listenToClose(): void {
    //   const closingElements = [
    //     document.querySelector('.calendly-close-overlay'),
    //     document.querySelector('.calendly-popup-close')
    //   ]
    //   for (const elem of closingElements) {
    //     elem?.addEventListener('click', function () {
    //       commit(MutationType.SET_MEETING_WIDGET_OPEN, false)
    //     })
    //   }
    // }

    if (payload) {
      if (widgetScript && widgetStyles) {
        initWidget()
        // listenToClose()
        return
      }
      if (!widgetStyles) {
        /* Add Calendly Styles */
        const styleSrc = "https://assets.calendly.com/assets/external/widget.css"
        const styleElem = document.createElement("link");
        styleElem.setAttribute("rel", "stylesheet");
        styleElem.setAttribute("id", "calendlyStyles");
        styleElem.setAttribute("type", "text/css");
        styleElem.setAttribute("href", styleSrc);
        document.getElementsByTagName("head")[0].appendChild(styleElem);
      }
      if (!widgetScript) {
        /* Add Calendly Script */
        const scriptSrc = "https://assets.calendly.com/assets/external/widget.js";
        const scriptElem = document.createElement("script");
        scriptElem.type = "text/javascript";
        scriptElem.setAttribute("id", "calendlyScript");
        scriptElem.setAttribute("src", scriptSrc);
        document.body.appendChild(scriptElem);

        /* Wait for Assets to load */
        scriptElem.addEventListener('load', initWidget, { once: true })
      }
    } else {
      const calendlyElem = document.querySelector('.calendly-overlay')
      calendlyElem?.remove()
    }
    state.meetingWidgetOpen = payload
  }
}

export const actions: ActionTree<RootState, RootState> = {
  cookieAccepted({ commit }, _context: Context) {
    commit(MutationType.ACCEPT_COOKIE, _context)
  },
  toggleMenu({ commit }) {
    commit(MutationType.TOGGLE_MENU)
  },
  openMenu({ commit }) {
    commit(MutationType.SET_MENU_OPEN)
  },
  setTheme({ commit }) {
    commit(MutationType.SET_THEME)
  },
  openMeetingWidget({ commit }) {
    commit(MutationType.SET_MEETING_WIDGET_OPEN)
  }
}