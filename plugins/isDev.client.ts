declare module 'vue/types/vue' {
  interface Vue {
    $devMode: boolean
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $devMode: boolean
  }
  interface Context {
    $devMode: boolean
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $devMode: boolean
  }
}

const DevModePlugin = (context: any, inject: any) => {
  const hostname = window.location.hostname.split(".")[0];
  const isDevMode = hostname === "dev" || hostname === "localhost";
  inject('isDev', isDevMode)
}

export default DevModePlugin