<template>
  <div id="content">
    <Hero alignment="center" v-bind="$t('pages.videos.hero')" padding="small" />

    <!-- Filter + Categories -->
    <div :class="styles.filter">
      <ul v-if="!categoriesLoading" :class="styles.categories">
        <li
          v-for="category in categories"
          :key="category"
          :class="[
            styles.category,
            { [styles.active]: category === activeCategory }
          ]"
        >
          <button :class="styles.categoryBtn" @click="fetchVideos(category)">
            <span :class="styles.categoryIcon">
              <Icon :name="$t(`pages.${category}.icon`)" />
            </span>
            <span :class="styles.categoryTitle">
              {{ $t(`pages.${category}.title`) }}
            </span>
          </button>
        </li>
      </ul>

      <!-- Skeleton -->
      <ul v-else :class="styles.categories">
        <li v-for="(n, i) in 4" :key="i" :class="styles.category">
          <button :class="styles.categoryBtn" style="opacity: 1">
            <div style="display: flex; justify-content: center">
              <Skeleton size="2.25rem" round style="margin-bottom: 0.75rem;" />
            </div>
            <span :class="styles.categoryTitle">
              <Skeleton height="0.65rem" width="5rem" />
            </span>
          </button>
        </li>
      </ul>
    </div>

    <!-- Videos -->
    <Section padding="bottomOnly">
      <ul v-if="!loading" :class="styles.videos">
        <li v-for="video in videos" :key="video.category + video.slug">
          <div :class="styles.video">
            <div :class="styles.thumbnailWrapper">
              <div :class="styles.thumbnail">
                <figure :class="styles.image">
                  <nuxt-img
                    :src="`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`"
                    :alt="video.name"
                    loading="lazy"
                  />
                </figure>
                <button :class="styles.play" @click="playVideo(video.id)">
                  <span :class="styles.playIcon">
                    <Icon name="Play" />
                  </span>
                </button>
              </div>
            </div>
            <div :class="styles.content">
              <h2 :class="styles.title">{{ video.title }}</h2>
              <span :class="styles.desc">{{ video.description }}</span>
            </div>
          </div>
        </li>
      </ul>

      <!-- Skeleton -->
      <ul v-else :class="[styles.videos]">
        <li v-for="(n, i) in 6" :key="i">
          <div :class="styles.video">
            <div :class="styles.thumbnailWrapper">
              <div :class="styles.thumbnail">
                <figure :class="styles.image">
                  <Skeleton />
                </figure>
              </div>
            </div>
            <div :class="styles.content">
              <Skeleton
                width="50%"
                height="2.175rem"
                style="margin-bottom: 1.35rem"
              />
              <Skeleton count="4" height="1rem" lineMargin="0.5rem" />
            </div>
          </div>
        </li>
      </ul>
    </Section>

    <Section color="grey" padding="small">
      <HelpBanner />
    </Section>

    <!-- Modal + Player -->
    <div v-if="modalOpen" :class="styles.modal">
      <div :class="styles.playerWrapper">
        <div :class="[styles.player, { [styles.loaded]: !videoLoading }]">
          <iframe
            @load="setVideoLoading(false)"
            :src="
              `https://www.youtube-nocookie.com/embed/${videoID}?autoplay=1&playlist=${videoID}&loop=1`
            "
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div :class="styles.overlay" @click="setModalOpen(false)"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import styles from './styles.module.scss?module';
import Skeleton from '@/components/Skeleton';
import Hero from '@/blocks/Hero';
import Section from '@/blocks/Section';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Loader from '@/components/Loader';
import HelpBanner from '@/blocks/HelpBanner';

export default Vue.extend({
  components: {
    Hero,
    Section,
    Button,
    Icon,
    Loader,
    Skeleton,
    HelpBanner
  },
  data() {
    return {
      styles,
      loading: true,
      categoriesLoading: true,
      videoLoading: false,
      videos: [],
      categories: [] as string[] | unknown[],
      activeCategory: 'operations',
      modalOpen: false,
      videoID: ''
    };
  },
  methods: {
    async fetchCategories() {
      this.categoriesLoading = true;
      const videos = await (this as any)
        .$content(`${this.$i18n.locale}/videos`, { deep: true })
        .only(['dir'])
        .sortBy('createdAt', 'desc')
        .fetch();

      const categories = videos.map((video: any) => video.dir.split('/').pop());
      const uniqueCategories = [...new Set(categories)];
      this.categories = uniqueCategories;
      this.categoriesLoading = false;
    },
    async fetchVideos(category?: string) {
      this.loading = true;
      this.activeCategory = category || this.activeCategory;

      const videos = await (this as any)
        .$content(`${this.$i18n.locale}/videos`, { deep: true })
        .where({ dir: { $contains: category || this.activeCategory } })
        .sortBy('createdAt', 'desc')
        .fetch();

      if (this.$i18n.locale === this.$i18n.defaultLocale) {
        this.videos = videos.map((video: any) => {
          const url = new URL(video.url);
          const id = url.searchParams.get('v');

          return {
            ...video,
            path: video.path.replace(`/${this.$i18n.locale}`, ''),
            id,
            category: video.dir.split('/').pop()
          };
        });
      } else {
        this.videos = videos.map((video: any) => {
          const url = new URL(video.url);
          const id = url.searchParams.get('v');

          return {
            ...video,
            id,
            category: video.dir.split('/').pop()
          };
        });
      }
      this.loading = false;
    },
    setModalOpen(state: boolean) {
      this.modalOpen = state;
    },
    setVideoLoading(state: boolean) {
      this.videoLoading = state;
    },
    playVideo(id: string) {
      this.videoLoading = true;
      this.modalOpen = true;
      this.videoID = id;
    }
  },
  mounted() {
    this.fetchCategories();
    this.fetchVideos();
  }
});
</script>
