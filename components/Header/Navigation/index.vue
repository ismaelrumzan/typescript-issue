<template>
  <nav :class="styles.navigation" id="navigation" role="navigation">
    <ul :class="styles.menu">
      <li
        v-for="(menuItem, i) in menuItems"
        :key="i"
        :class="[
          { [styles.isSubmenu]: menuItem.isSubmenu },
          { [styles.disabled]: menuItem.disabled }
        ]"
        ref="submenuItem"
        @mouseenter="open(menuItem.isSubmenu, $event)"
        @mouseleave="close"
      >
        <NuxtLink
          v-if="!menuItem.isSubmenu"
          :to="localePath(menuItem.link)"
          @click.native="closeMenu"
          :class="{ [styles.disabled]: menuItem.disabled }"
        >
          {{ $t(menuItem.title) }}
        </NuxtLink>
        <NuxtLink
          v-else
          to=""
          @click.native="toggleActive(menuItem.isSubmenu, $event)"
          :class="{ [styles.disabled]: menuItem.disabled }"
        >
          {{ $t(menuItem.title) }}
          <Icon name="ChevDown" :class="styles.chevDown" />
        </NuxtLink>

        <div v-if="menuItem.isSubmenu" :class="styles.submenuContainer">
          <div :class="styles.submenuWrapper">
            <!-- Submenu -->
            <ul :class="[styles.submenu, styles[menuItem.submenuType]]">
              <li
                v-for="(menuItemChild, i) in menuItem.children"
                :key="i"
                :class="[
                  styles[`${menuItemChild.type}Container`],
                  { [styles.disabled]: menuItemChild.disabled }
                ]"
              >
                <!-- Button -->
                <Button
                  v-if="menuItemChild.type === 'button'"
                  type="tertiary"
                  :title="$t(menuItemChild.title)"
                  :href="menuItemChild.link"
                  :class="styles.button"
                  @click.native="closeMenu"
                />

                <!-- External Link -->
                <a
                  v-else-if="menuItemChild.externalLink"
                  :href="menuItemChild.externalLink"
                  target="_blank"
                  rel="noopener"
                  :class="styles.link"
                >
                  <span :class="styles.linkIcon">
                    <IconWrapper width="52" height="52">
                      <Icon :name="menuItemChild.icon" viewBox="0 0 512 512" />
                    </IconWrapper>
                  </span>
                  <span :class="styles.linkText">
                    <span :class="styles.linkTitle">{{
                      $t(menuItemChild.title)
                    }}</span>
                    <span :class="styles.linkDescription">{{
                      $t(menuItemChild.description)
                    }}</span>
                  </span>
                </a>

                <!-- Custom Behavior -->
                <a
                  v-else-if="menuItemChild.onClick"
                  href="#"
                  @click="
                    [
                      $event.preventDefault(),
                      closeMenu,
                      handleClick(menuItemChild.onClick)
                    ]
                  "
                  :class="styles.link"
                >
                  <span :class="styles.linkIcon">
                    <IconWrapper width="52" height="52">
                      <Icon :name="menuItemChild.icon" viewBox="0 0 512 512" />
                    </IconWrapper>
                  </span>
                  <span :class="styles.linkText">
                    <span :class="styles.linkTitle">{{
                      $t(menuItemChild.title)
                    }}</span>
                    <span :class="styles.linkDescription">{{
                      $t(menuItemChild.description)
                    }}</span>
                  </span>
                </a>

                <!-- Default Behavior -->
                <NuxtLink
                  v-else
                  :to="localePath(menuItemChild.link)"
                  @click.native="closeMenu"
                  :class="styles.link"
                >
                  <span :class="styles.linkIcon">
                    <IconWrapper width="52" height="52">
                      <Icon :name="menuItemChild.icon" viewBox="0 0 512 512" />
                    </IconWrapper>
                  </span>
                  <span :class="styles.linkText">
                    <span :class="styles.linkTitle">{{
                      $t(menuItemChild.title)
                    }}</span>
                    <span :class="styles.linkDescription">{{
                      $t(menuItemChild.description)
                    }}</span>
                  </span>
                </NuxtLink>
              </li>
            </ul>

            <!-- Sidemenu -->
            <ul
              v-if="menuItem.hasSidemenu"
              :class="[styles.sidemenu, styles[menuItem.sidemenuPosition]]"
            >
              <li>
                <span :class="styles.sidemenuTitle">
                  {{ $t(menuItem.sidemenuTitle) }}
                </span>
              </li>
              <li
                v-for="(sidemenuItemChild, i) in menuItem.sidemenu"
                :key="i"
                :class="{ [styles.disabled]: sidemenuItemChild.disabled }"
              >
                <NuxtLink
                  :to="localePath(sidemenuItemChild.link)"
                  @click.native="closeMenu"
                  :class="styles.sidemenuLink"
                >
                  <span :class="styles.sidemenuLinkTitle">
                    {{ $t(sidemenuItemChild.title) }}
                  </span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import styles from "./styles.module.scss?module";
import menuItems from "./menu.json";
import { MutationType } from "@/store";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import IconWrapper from "@/components/IconWrapper";

type SidemenuPosition = "left" | "right" | "bottom";

interface SubmenuItem {
  title: string;
  link: string;
  description?: string;
  type?: string;
  icon?: string;
}

interface MenuItem {
  title: string;
  link: string;
  isSubmenu: boolean;
  submenuType?: boolean;
  hasSidemenu?: boolean;
  sidemenuTitle?: string;
  sidemenuPosition?: SidemenuPosition;
  children?: SubmenuItem[];
}

export default Vue.extend({
  components: {
    Button,
    Icon,
    IconWrapper
  },
  data() {
    return {
      styles,
      menuItems: menuItems as MenuItem[]
    };
  },
  methods: {
    toggleActive(isSubmenu: boolean, e: any) {
      if (isSubmenu) {
        e.preventDefault();
        e.target.parentNode.classList.toggle(styles["open"]);

        const content = e.target.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      }
    },
    open(isSubmenu: boolean, e: any) {
      if (isSubmenu) {
        e.target.classList.add(styles["hovered"]);
      }
    },
    close(e: any) {
      e.target.classList.remove(styles["hovered"]);
    },
    closeMenu(e: any) {
      /* optimizable */
      e.target
        .closest("#navigation > ul > li")
        .classList.remove(styles["hovered"]);

      this.$store.commit(MutationType.SET_MENU_OPEN, false);
    },
    handleClick(functionRef: string) {
      if (functionRef === "bookMeeting") {
        this.$store.commit(MutationType.SET_MEETING_WIDGET_OPEN, true);
      }
    }
  }
});
</script>
