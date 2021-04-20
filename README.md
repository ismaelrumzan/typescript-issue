# Marketing Website

## Table of Contents

- [Guides](#Guides)
  - [Create a Landing Page](#create-a-landing-page)
  - [Translations](#translations)
- [Blocks](#blocks)
  - [Hero](#hero)
  - [Section](#section)
  - [TextWithImage](#textwithimage)
  - [Grid](#grid)
  - [Feature](#feature)

## Guides

### Create a Landing Page

Create an `index.vue` inside the `pages` directory matching the URL structure. The file should have the following layout:

```html
<template>
  <div id="content">
    <!-- <MyBlock /> -->
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  /* import MyBlock from "@/blocks/MyBlock" */

  export default Vue.extend({
    components: {
      /* MyBlock */
    }
  });
</script>
```

Please wrap your content in logical sections (except [Hero](#hero) block) with [Section](#section) blocks:

```html
<template>
  <div id="content">
    <Hero />
    <section>
      <!-- Block A -->
      <!-- Block B -->
    </section>
    <section>
      <!-- Block C -->
      <!-- Block D -->
    </section>
  </div>
</template>
```

### Translations

This website uses [nuxt-i18n](https://i18n.nuxtjs.org/). Translations are **lazy-loaded**. Therefore you need to create a file for each language in the `/lang` directory.

#### Landing Pages

To create a multi-language page create a `.ts` file inside the `/lang/{language}/pages` directory matching the **slug** of the page.

**Example:**

`/lang/en/pages/test.ts`

```ts
export default {
  title: 'I am a title'
};
```

`/lang/de/pages/test.ts`

```ts
export default {
  title: 'Ich bin ein Titel'
};
```

Include your page translation in the corresponding language file:

`/lang/en-US.ts`

```ts
import test from './en/pages/test';

export default async (context, locale) => {
  return await Promise.resolve({
    pages: {
      test
    }
  });
};
```

Reference your translation inside pages, blocks are automatically calling the translation functions:

`/pages/test.vue`

```html
<template>
  <div id="content">
    <Hero title="pages.test.title">
  </div>
</template>
```

## Blocks

### Hero

This block should only be used at the top of a page.

```html
<Hero properties />
```

#### `badge`

String – Badge text above title

#### `title`

String – heading / title

#### `description`

String – text below title

#### `cta`

Array – adds CTA Buttons below description

- `Object`
  - `title` String – button text
  - `type`
    String
    - `primary`
    - `secondary`
    - `tertiary`
  - `href` String – internal path **without** locale and origin. E.g `/frontoffice/emails`
  - `externalHref` String – external URL
  - `onClick` Function

#### `illustration`

String – filename of the illustration without suffix, e.g. `example` loads `/assets/illustrations/example.json`

#### `darkIllustration`

String – see [illustration](#illustration), this will be shown instead of default if dark mode

#### `illustrationWidth`

String – defines width of illustration

- `normal`
- `narrow`
- `wide`

#### `alignment`

String – aligns content, defaults to left

- `left` text left, illustration right
- `right` text right, illustration left
- `center` centered

#### `verticalAlign`

String – aligns content vertically, defaults to middle

- `middle` centered
- `top` aligns content to top
- `bottom` aligns content to bottom

#### `padding`

String – applies vertical padding (bottom only)

- `none` No padding on large screens
- `small` Small padding

#### `gap`

String – applies gap between illustration/image and text content

- `none`
- `medium`
- `large`

#### `typewriter`

String – Comma seperated list of words, e.g. `Autopilot, Single Login, Digital Hotel`

#### `renderer`

String – render mode of illustration, defaults to svg

- `svg` render as svg
- `canvas` render inside canvas
- `html` render as dom elements

#### `fullWidth`

Boolean – removes padding of illustration on small screens

#### `withShadow`

Boolean – add this property if illustration uses drop shadow

#### `particles`

Boolean – adds particle animation during dark mode

#### `contentStyles`

Object – appends inline style to the text content

#### `titleStyles`

Object – appends inline style to the title

#### `illustrationStyles`

Object – appends inline style to the illustration

<br>

---

<br>

### Section

This block divides the content of a page into logical sections and is essential for the layout.

```html
<section properties>
  <!-- Blocks -->
</section>
```

#### `color`

String – applies background

- `grey` Light grey accent
- `light` Light accent of main color
- `main` Main color
- `dark` Dark accent of main color

#### `padding`

String – applies vertical padding

- `none` No padding on large screens
- `small` Small padding
- `topOnly` Only applies padding to the top
- `bottomOnly` Only applies padding to the bottom

#### `skew`

String – skews the background

- `positive` Clockwise skew
- `negative` Counter clockwise skew
- `positiveTop` Only applies positive skew to the top
- `negativeTop` Only applies negative skew to the top
- `positiveBottom` Only applies positive skew to the bottom
- `negativeBottom` Only applies negative skew to the bottom

#### `fullWidth`

Boolean – removes default horizontal padding and max-width

#### `overflow`

String

- `visible`
- `hidden`

#### `variant` (wip)

String

- `default` Solid background
- `gradient` Gradient background

<br>

---

<br>

### TextWithImage

This block is similar to the [Hero](#hero) block, but can be used everywhere.

```html
<TextWithImage properties>
  <!-- Content -->
</TextWithImage>
```

#### `badge`

String – Badge text above title

#### `title`

String – heading / title

#### `description`

String – text below title

#### `cta`

Array – adds CTA Buttons below description

- `Object`
  - `title` String – button text
  - `type`
    String
    - `primary`
    - `secondary`
    - `tertiary`
  - `href` String – internal path **without** locale and origin. E.g `/frontoffice/emails`
  - `externalHref` String – external URL
  - `onClick` Function

#### `image`

String – path to the image with suffix, e.g. `test.png` loads `/static/images/test.png`

#### `illustration`

String – filename of the illustration without suffix, e.g. `example` loads `/assets/illustrations/example.json`

#### `darkIllustration`

String – see [illustration](#illustration), this will be shown instead of default if dark mode

#### `illustrationWidth`

String – defines width of illustration

- `normal`
- `narrow`
- `wide`

#### `alignment`

String – aligns content, defaults to left

- `left` text left, illustration right
- `right` text right, illustration left
- `center` centered

#### `textAlignment`

String – aligns content text, defaults to center

- `left`
- `right`
- `center`

#### `padding`

String – applies vertical padding

- `none` No padding on large screens
- `small` Small padding
- `medium` Medium padding
- `large` Large padding

#### `renderer`

String – render mode of illustration, defaults to svg

- `svg` render as svg
- `canvas` render inside canvas
- `html` render as dom elements

#### `fullWidth`

Boolean – removes padding of illustration on small screens

#### `bubbles`

Boolean – adds bubbles as design elements to the background

#### `illustrationStyles`

Object – appends inline style to the illustration

<br>

---

<br>

### Grid

A block which puts its children in a structured Grid.

```html
<Grid properties>
  <!-- Content -->
</Grid>
```

#### `columns`

String | Number – amount of columns, adjusts automatically, defaults to 3, max is currently 4

#### `padding`

String – applies vertical padding

- `none` No padding on large screens
- `small` Small padding
- `medium` Medium padding
- `large` Large padding
- `topOnly` Only applies padding to the top
- `bottomOnly` Only applies padding to the bottom

#### `gap`

String – applies gap between illustration/image and text content

- `none`
- `small`
- `medium`
- `large`

#### `searchable`

Boolean – **Currently only for list of Feature blocks**, adds search input and sorts + filters children

#### `searchText`

String – placeholder text for search input

<br>

---

<br>

### Feature

A Feature block

```html
<Feature properties />
```

#### `title`

String – heading / title

#### `description`

String – text below title

#### `icon`

String – name of the icon component from `/assets/icons`, **case sensitive**

#### `alignment`

String – aligns content, defaults to left

- `left`
- `right`
- `center`

#### `moreText`

String – text of the more link, default to `phrases.more`

#### `moreLink`

String – internal path **without** locale and origin. E.g `/frontoffice/emails`

#### `disabled`

Boolean – disable a Feature
