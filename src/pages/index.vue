<script lang="ts">
import Vue from "vue"

/* Interfaces */
import type { Repository } from "../types/Response/GitHub"

interface Project {
  title: string
  description: string
  href?: string
  to?: string
  icon?: string
}

interface Experience {
  title: string
  url: string
  position: string
  date: string
  isHidden?: boolean
}

interface ExperienceObject {
  jobs: Experience[]
  education: Experience[]
}

export default Vue.extend({
  data() {
    return {
      showModal: false,
      showExtra: {
        jobs: false,
        education: false,
      },
      repos: [] as Repository[],
      experiences: {
        jobs: [
          {
            title: "Github",
            url: "http://github.com/raiven0",
            position: "@raiven0",
            date: "",
          },
        ],
        education: [
          {
            title: "X",
            url: "https://x.com/rdvntpkky",
            position: "@rdvntpkky",
            date: "",
          },
        ],
      } as ExperienceObject,
      cards: {
        me: [
          {
            title: "Repositories",
            description:
              "Want to see and/or contribute to my code and public repositories?",
            href: "/me/repos",
          },
          {
            title: "Contact",
            description:
              "Need help with anything? Want to get in touch? Send me a message!",
            href: "/me/contact",
          },
        ],
        pages: [
          {
            title: "Blog",
            description:
              "My Turkish stories about real-life, programming, development and more!",
            href: "/blog",
          },
          {
            title: "Projects",
            description:
              "My projects and contributions to the open-source community.",
            href: "/projects",
          },
        ],
      },
      skills: [
        {
          title: "Development",
          items: [
            "PHP",
            "HTML5",
            "Tailwind CSS",
          ],
        },
        {
          title: "Apps",
          items: [
            {
              title: "VS Code",
              iconPack: "IconBrand",
            },
            {
              title: "Figma",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              title: "GitHub",
              iconPack: "IconBrand",
            },
            {
              title: "Firebase",
            },
            {
              title: "Netlify",
              iconPack: "IconBrand",
            },
            {
              title: "Vercel",
            },
          ],
        },
      ],
    }
  },
  head: {
    title: "Home",
  },
  methods: {
    async scrollToSection(id: string) {
      if (this.$route.hash === id)
        await this.$router.replace({
          hash: "",
        })

      await this.$router.replace({
        hash: id,
      })
    },
  },
})
</script>

<template>
  <div class="space-y-24 mb-10">
    <header
      class="rounded-md flex flex-col-reverse my-16 py-10 md:(flex-row items-center justify-between) justify-center"
    >
      <div class="md:w-8/12">
        <div class="space-y-8">
          <div class="lg:space-y-4">
            <h1
              class="font-semibold text-center text-lg md:(text-xl text-left) text-black/50 dark:text-white/50"
            >
              Hi, I am
              <span class="text-black/90 dark:text-white/90"
                >Rıdvan Topakkaya</span
              >
            </h1>

            <h1
              class="font-semibold text-center text-4xl md:(text-6xl text-left) text-black/90 leading-normal dark:text-white/90"
            >
              Backend web developer
            </h1>
          </div>
        </div>
      </div>

      <div class="rounded-full mx-auto mb-4 md:mb-0">
        <SmartImage
          src="/assets/images/profile-rdvn.png"
          class="rounded-full h-50 w-50"
        />
      </div>
    </header>

    <section id="pages">
      <Title>Pages</Title>

      <div class="mt-4 grid gap-4 md:grid-cols-2">
        <Card
          v-for="(card, index) in cards.pages"
          :key="`card-p-${index}`"
          :title="card.title"
          :href="card.href"
        >
          {{ card.description }}
        </Card>
      </div>
    </section>

    <section id="me">
      <Title>Me</Title>

      <div class="mt-4 grid gap-4 md:grid-cols-2">
        <Card
          v-for="(card, index) in cards.me"
          :key="`card-m-${index}`"
          :title="card.title"
          :href="card.href"
        >
          {{ card.description }}
        </Card>
      </div>
    </section>

    <section id="experiences" class="grid gap-x-8 gap-y-24 md:grid-cols-2">
      <div>
        <div class="flex items-center gap-4 justify-between">
          <Title>Links</Title>
        </div>

        <div class="mt-4 grid gap-2">
          <CardExperience
            v-for="(experience, index) in experiences.jobs"
            v-show="experience.isHidden ? showExtra.jobs : true"
            :key="`experience-job-${index}`"
            :title="experience.title"
            :url="experience.url"
            :hidden-badge="experience.isHidden"
            :date="experience.date"
            :position="experience.position"
          />
        </div>
      </div>

      <div>
        <div class="flex items-center gap-4 justify-between">
          <Title></Title>
        </div>

        <div class="mt-4 grid gap-2">
          <CardExperience
            v-for="(experience, index) in experiences.education"
            v-show="experience.isHidden ? showExtra.education : true"
            :key="`experience-education-${index}`"
            :title="experience.title"
            :url="experience.url"
            :hidden-badge="experience.isHidden"
            :date="experience.date"
            :position="experience.position"
          />
        </div>
      </div>
    </section>

    <section id="technologies">
      <Title>Technologies I use</Title>

      <div class="flex flex-col space-y-6 mt-8">
        <section v-for="category in skills" :key="category.title">
          <h5
            class="text-sm uppercase text-black/50 pb-2 mb-4 border-b border-black/5 dark:(text-white/30 border-white/5)"
          >
            {{ category.title }}
          </h5>

          <div
            class="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2"
          >
            <CardSkill
              v-for="(skill, index) in category.items"
              :key="`skill-${index}`"
              v-bind="typeof skill === 'object' ? skill : { title: skill }"
            />
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.description-link {
  @apply border-neutral-500 border-b-2 border-opacity-50 hover:border-opacity-75;
}
</style>
