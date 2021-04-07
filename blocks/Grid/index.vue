<template>
  <!-- Non-Searchable -->
  <div
    :class="[
      styles.grid,
      styles[columnClass],
      styles[paddingClass],
      styles[gapClass]
    ]"
    v-if="!searchable || !doneReplacing"
  >
    <slot />
  </div>

  <!-- Searchable -->
  <div
    :class="[
      styles.grid,
      styles[columnClass],
      styles[paddingClass],
      styles[gapClass]
    ]"
    v-else
  >
    <div :class="styles.search">
      <input
        v-model="search"
        :placeholder="
          searchText
            ? `${$t('phrases.search_for_2', [$tc(searchText), 2])} ...`
            : `${$t('general.search')} ...`
        "
      />
    </div>
    <Feature
      v-for="(item, i) in filteredList"
      :key="i"
      :title="item.title"
      :description="item.description"
      :icon="item.icon"
      :moreLink="item.moreLink"
      :disabled="item.disabled"
      :alignment="item.alignment"
    />
  </div>
</template>

<script lang='ts'>
import Vue, { PropType } from "vue";
import styles from "./styles.module.scss?module";
import Feature from "@/blocks/Feature";
import orderBy from "lodash/orderBy";

type PaddingOption =
  | "none"
  | "small"
  | "medium"
  | "large"
  | "topOnly"
  | "bottomOnly";
type GapOption = "small" | "medium" | "large" | "none";

interface IFeature {
  title: string;
  description: string;
  alignment?: string;
  icon: string;
  moreLink?: string;
  moreText?: string;
  disabled?: boolean;
}

export default Vue.extend({
  components: {
    Feature,
    VNode: {
      functional: true,
      render: (h: any, ctx: any) => ctx.props.node
    }
  },
  props: {
    columns: {
      type: [Number, String],
      default: 3
    },
    padding: {
      type: String as PropType<PaddingOption>,
      default: "medium"
    },
    gap: {
      type: String as PropType<GapOption>,
      default: "large"
    },
    searchable: {
      type: Boolean,
      default: false
    },
    searchText: {
      type: String
    }
  },
  created() {
    if (this.searchable) {
      (this as any).initialFeatures = (this as any).$slots.default.filter(
        (item: any) => item.tag
      );
    }
  },
  data() {
    return {
      styles,
      search: "",
      doneReplacing: false,
      initialFeatures: [],
      features: [] as IFeature[]
    };
  },
  computed: {
    columnClass(): string {
      const val = parseInt(`${this.columns}`);
      return `col-${val}`;
    },
    paddingClass(): string {
      return `pad-${this.padding}`;
    },
    gapClass(): string {
      return `gap-${this.gap}`;
    },

    filteredList() {
      if (this.searchable) {
        return (this as any).features.filter((feature: IFeature): boolean => {
          const translatedTitle = this.$i18n.t(feature.title) as string;
          const translatedDescription = this.$i18n.t(
            feature.description
          ) as string;

          /* Return matching results with a little obligingness */
          return (translatedTitle + translatedDescription)
            .split("-")
            .join("")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .includes(
              (this as any).search
                .split("-")
                .join("")
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
            );
        });
      }
    }
  },
  mounted() {
    if (this.searchable) {
      /* Move disabled features to the end */
      const sortedList = orderBy(
        (this as any).initialFeatures,
        (item: any) => {
          return item.componentOptions.propsData.disabled;
        },
        ["desc"]
      );

      sortedList.forEach((item: any) =>
        (this as any).features.push({
          title: item.componentOptions.propsData.title,
          description: item.componentOptions.propsData.description,
          alignment: item.componentOptions.propsData.alignment,
          icon: item.componentOptions.propsData.icon,
          moreLink: item.componentOptions.propsData.moreLink,
          moreText: item.componentOptions.propsData.moreText,
          disabled: item.componentOptions.propsData.disabled
        })
      );
      (this as any).doneReplacing = true;
    }
  }
});
</script>