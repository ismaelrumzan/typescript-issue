<template>
  <nav :class="styles.navigation">
    <div v-for="(singleMenu, i) in footerMenu" :key="i" :class="styles.menu">
      <h3 :class="styles.title">{{ $t(singleMenu.title) }}</h3>
      <ul>
        <li
          v-for="(item, i) in singleMenu.children"
          :key="i"
          :class="{ [styles.disabled]: item.disabled }"
        >
          <NuxtLink :to="localePath(item.link)">
            {{ $t(item.title) }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import styles from "./styles.module.scss?module";
import footerMenu from "./menu.json";

interface MenuItem {
  title: string;
  link: string;
}

interface SingleMenu {
  title: string;
  children?: MenuItem[];
}

export default Vue.extend({
  data() {
    return {
      styles,
      footerMenu: footerMenu as SingleMenu[]
    };
  }
});
</script>