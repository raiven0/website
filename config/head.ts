import { NuxtOptionsHead } from "@nuxt/types/config/head"

/* Define constants */
const image = "/assets/images/rt-logox100.png"
const description =
  "PHP developer from Turkiye who is interested in languages, games and programming and trying to improve his PHP skills!"

const Head: NuxtOptionsHead = {
  title: "ridvantopakkaya.com",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: description,
    },
    /* Twitter */
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary",
    },
    {
      hid: "twitter:site",
      name: "twitter:site",
      content: "@rdvntpkky",
    },
    {
      hid: "twitter:creator",
      name: "twitter:creator",
      content: "@rdvntpkky",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "ridvantopakkaya.com",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: description,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: image,
    },
    /* Open-Graph */
    {
      hid: "og:type",
      name: "og:type",
      content: "website",
    },
    {
      hid: "og:site_name",
      name: "og:site_name",
      content: "ridvantopakkaya.com",
    },
    {
      hid: "og:description",
      name: "og:description",
      content: description,
    },
    {
      hid: "og:image",
      name: "og:image",
      content: image,
    },
    /* Others */
    {
      hid: "theme-color",
      name: "theme-color",
      content: "#171717",
    },
  ].map((i) => {
    // @ts-ignore-next-line
    if (i.name && !i.property) i.property = i.name
    return i
  }),
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/assets/images/rt-logox100.png",
    },
    {
      rel: "search",
      type: "application/opensearchdescription+xml",
      title: "rdvn Blog",
      href: "/opensearch.xml",
    },
  ],
}

export default Head
