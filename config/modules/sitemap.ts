export default async function () {
  const { $content } = require("@nuxt/content")
  const posts = await $content("blog").fetch()

  const routes = []
  for (const post of posts) {
    routes.push(`blog/${post.slug}`)
  }

  return {
    hostname: "https://ridvantopakkaya.com",
    gzip: true,
    routes,
  }
}
