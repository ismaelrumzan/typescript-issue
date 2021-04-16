# Marketing Website

## Table of Contents

- [Guides](#Guides)
  - [Create a Landing Page](#create-a-landing-page)
- [Blocks](#blocks)

## Guides

### Create a Landing Page

Create an `index.vue` inside the `pages` directory matching the URL structure. The file should have the following layout:

```html
<template>
  <div id="content">
    <!-- Your blocks go here -->
  </div>
</template>

<script lang="ts">
import Vue from "vue"
/* import MyBlock from "@/blocks/MyBlock" */

export default Vue.extend({
  components: {
    /* MyBlock */
  }
});
</script>
```

Please wrap each of your blocks (except Hero) in a [Section](#section) block

## Blocks

### Hero

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
* `Object`
  * `title` String – button text
  * `type`
    String
    * `primary`
    * `secondary`
    * `tertiary`
  * `href` String – internal path **without** locale and origin. E.g `/frontoffice/emails`
  * `externalHref` String – external URL
  * `onClick` Function

#### `illustration`
String – filename of the illustration without suffix, e.g. `example` loads `/assets/illustrations/example.json`

#### `darkIllustration`
String – see [illustration](#illustration), this will be shown instead of default if dark mode

#### `illustrationWidth`
String – defines width of illustration
* `normal`
* `narrow`
* `wide`

#### `alignment`
String – aligns content, defaults to left
* `left` text left, illustration right
* `right` text right, illustration left
* `center` centered

#### `verticalAlign`
String – aligns content vertically, defaults to middle
* `middle` centered
* `top` aligns content to top
* `bottom` aligns content to bottom

#### `padding`
String – applies vertical padding (bottom only)
* `none` No padding on large screens
* `small` Small padding

#### `gap`
String – applies gap between illustration/image and text content
* `none`
* `medium`
* `large`

#### `typewriter`
String – Comma seperated list of words, e.g. `Autopilot, Single Login, Digital Hotel`

#### `renderer`
String – render mode of illustration, defaults to svg
* `svg` render as svg
* `canvas` render inside canvas
* `html` render as dom elements

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


### Section

```html
<Section properties>
  <!-- Blocks -->
</Section>
```

#### `color`
String – applies background
* `grey` Light grey accent
* `light` Light accent of main color
* `main` Main color
* `dark` Dark accent of main color

#### `padding`
String – applies vertical padding
* `none` No padding on large screens
* `small` Small padding
* `topOnly` Only applies padding to the top
* `bottomOnly` Only applies padding to the bottom

#### `skew`
String – skews the background
* `positive` Clockwise skew
* `negative` Counter clockwise skew
* `positiveTop` Only applies positive skew to the top
* `negativeTop` Only applies negative skew to the top
* `positiveBottom` Only applies positive skew to the bottom
* `negativeBottom` Only applies negative skew to the bottom

#### `fullWidth`
Boolean – removes default horizontal padding and max-width

#### `overflow`
String
* `visible`
* `hidden`

#### `variant` (wip)
String
* `default` Solid background
* `gradient` Gradient background