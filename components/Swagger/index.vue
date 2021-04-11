<template>
  <div ref="swagger"></div>
</template>

<script lang='ts'>
import Vue from "vue";
import styles from "./styles.module.scss?module";
import SwaggerUI from "swagger-ui";
import "swagger-ui/dist/swagger-ui.css";
import schema from "@/data/schema-api";

export default Vue.extend({
  data() {
    return {
      styles
    };
  },
  mounted() {
    SwaggerUI({
      domNode: this.$refs.swagger,
      spec: schema
    });
  }
});
</script>

<style lang="scss">
.swagger-ui {
  /* Fonts & Colors */
  color: var(--dark) !important;

  & * {
    font-family: var(--font-text) !important;
  }
  & code,
  & code *,
  .model,
  .model * {
    font-family: var(--font-code) !important;
  }
  & code,
  .model,
  .model * {
    font-weight: 400 !important;
    font-size: 0.9rem !important;
  }

  h1,
  h2,
  h3 {
    font-family: var(--font-display) !important;
  }

  .opblock-tag,
  .opblock-tag small,
  .info .title,
  .info li,
  .info p {
    color: var(--dark) !important;
  }

  .opblock .opblock-summary-operation-id,
  .opblock .opblock-summary-path,
  .opblock .opblock-summary-path__deprecated,
  .opblock .opblock-summary-description {
    color: var(--dark-3) !important;
  }

  /* DOM elements */
  .wrapper {
    max-height: inherit !important;
    padding: 0 !important;
  }

  .information-container {
    text-align: center;

    .title {
      display: flex;
      flex-direction: column;
      font-size: 3rem !important;

      @media (max-width: 767px) {
        font-size: 2.5rem !important;
      }

      span {
        order: -1;
        display: flex;
        justify-content: center;
        margin-bottom: 0.5rem;
      }

      small {
        letter-spacing: 0;
        padding: 0.3rem 0.75rem !important;
      }
    }

    .description {
      p {
        font-size: 1.1rem;
      }
    }
  }

  .scheme-container,
  .opblock-tag-section,
  section.models {
    border-radius: var(--border-radius-medium) !important;
    background: var(--light) !important;
    border: 1px solid var(--light-5) !important;
    box-shadow: none !important;
    transition: none !important;

    h4 {
      &:hover {
        background: transparent !important;
      }
    }
  }

  .scheme-container {
    padding: 1.5rem !important;
  }

  /* Blocks */
  .opblock-tag-section {
    .opblock-tag {
      padding: 0.75rem 1.5rem;
      margin: 0;
      line-height: 1;
      border: none;
      transition: none;
    }

    &.is-open {
      .opblock-tag {
        border-bottom: 1px solid var(--light-5);
      }
    }
  }

  .operation-tag-content {
    padding: 1.5rem;
  }

  /* Models */
  section.models {
    h4 {
      color: var(--dark-3) !important;
      font-size: 1.15rem !important;
      padding: 1rem 1.5rem !important;
      margin: 0 !important;
      line-height: 1 !important;
      border: none !important;
      transition: none !important;
    }

    &.is-open {
      padding: 0 !important;
      h4 {
        border-bottom: 1px solid var(--light-5) !important;
      }
    }

    & > * {
      padding: 1.5rem !important;
    }

    .model-container {
      margin: 0 !important;
      background: var(--light-2) !important;
      border: 1px solid var(--light-5) !important;
      transition: none !important;

      &:hover {
        background: var(--light-2) !important;
      }

      &:not(:last-child) {
        margin-bottom: 1.5rem !important;
      }
    }

    .model-title {
      color: var(--dark-3) !important;
    }
  }
}

[data-theme="dark"] {
  .swagger-ui {
    .model-toggle:after,
    .expand-methods svg,
    .expand-operation svg,
    section.models h4 svg {
      filter: invert(1);
    }

    .opblock-tag-section,
    .scheme-container,
    section.models {
      background-color: #080808 !important;
      box-shadow: none !important;
      border: 1px solid var(--light-5) !important;

      h4 {
        &:hover {
          background: transparent !important;
        }
      }
    }

    section.models {
      .model-container {
        background: var(--light) !important;

        &:hover {
          background: var(--light) !important;
        }
      }
    }
  }
}
</style>