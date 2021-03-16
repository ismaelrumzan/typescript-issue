<template>
  <nav :class="styles.navigation" id="navigation" role="navigation">
    <ul :class="styles.menu">
      <li
        v-for="(menuItem, i) in menuItems"
        :key="i"
        :class="{ [styles.isSubmenu]: menuItem.isSubmenu }"
      >
        <NuxtLink
          v-if="!menuItem.isSubmenu"
          :to="menuItem.link"
          @click.native="resetMenu"
        >
          {{ menuItem.title }}
        </NuxtLink>
        <NuxtLink v-else to="" @click.native="toggleActive">
          {{ menuItem.title }}
          <Icon
            name="Dropdown"
            :class="styles.chevDown"
            viewBox="0 0 451.847 451.847"
          >
            <ChevDown />
          </Icon>
        </NuxtLink>
        <div :class="styles.submenuContainer">
          <ul v-if="menuItem.isSubmenu" :class="styles.submenu">
            <li v-for="(menuItemChild, i) in menuItem.children" :key="i">
              <NuxtLink :to="menuItemChild.link" @click.native="resetMenu">
                {{ menuItemChild.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import styles from "./styles.module.scss?module";
import { MutationType } from "@/store";
import Icon from "@/components/Icon";
import ChevDown from "@/assets/icons/ChevDown.vue";
import menuItems from "./menu.json";

interface SubmenuItem {
  title: string;
  link: string;
}

interface MenuItem {
  title: string;
  link: string;
  isSubmenu: boolean;
  children?: SubmenuItem[];
}

export default Vue.extend({
  components: {
    Icon,
    ChevDown,
  },
  data() {
    return {
      styles,
      menuItems: menuItems as MenuItem[],
    };
  },
  methods: {
    toggleActive(e: any) {
      e.preventDefault();
      e.target.parentNode.classList.toggle(styles["open"]);

      const content = e.target.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    },
    resetMenu() {
      this.$store.commit(MutationType.SET_OPEN_MENU, false);
    },
  },
});
</script>
