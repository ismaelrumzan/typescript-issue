interface MetaConfig {
  title: string,
  description: string,
  card?: string
}

export module SEO {
  export function generate(meta: MetaConfig) {
    return {
      title: meta.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: meta.description
        },
        {
          hid: "og:type",
          name: "og:type",
          content: "website"
        },
        {
          hid: "og:title",
          name: "og:title",
          content: meta.title
        },
        {
          hid: "og:description",
          name: "og:description",
          content: meta.description
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: meta.card || "summary"
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: meta.title
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: meta.description
        }
      ]
    };
  }
}