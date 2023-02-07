<script setup>
useHead({
  title: `Portfolio | Home 💻`,
  meta: [{ name: "description", content: "My amazing portfolio with nuxt." }],
});

const { data: me } = useFetch(`/api/me`);
// console.log(me.value);
</script>

<template>
  <main class="mb-auto">
    <div
      class="mb-6 custom-section-height flex flex-col justify-center items-center -mt-6 text-center"
    >
      <div class="mb-4">
        <nuxt-img
          src="bigheadkarngyan.png"
          width="240"
          height="240"
          class="rounded-full overflow-hidden"
          loading="lazy"
          alt=""
        />
      </div>
      <h1 class="lg:text-5xl text-3xl font-bold mb-4">
        I am Pheak Minute
        <span class="animate-wiggle inline-flex origin-bottom">👋</span>
      </h1>
      <p class="mb-4">Web Developer & Battambang</p>
      <p class="mb-4">Based on Battambang</p>
      <a
        target="_blank"
        rel="noreferrer "
        class="bg-black dark:bg-white dark:text-black lg:inline-flex lg:w-auto text-white px-3 py-2 rounded items-center justify-center hover:bg-slate-700 dark:hover:text-white dark:hover:bg-slate-700"
      >
        Resume
      </a>
      <svg
        class="w-6 h-6 mt-12 animate-[bounce_2s_ease-in-out_infinite]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
        ></path>
      </svg>
    </div>

    <div class="lg:mb-48 mb-24">
      <h1 class="text-4xl font-bold m-6 text-center">Skills</h1>
      <div
        class="mx-auto space-y-2 lg:space-y-0 lg:gap-6 lg:grid lg:grid-cols-2"
      >
        <div class="mb-4">
          <h3 class="mb-4 font-bold">Tools / Languages I mostly work with</h3>
          <ul class="flex gap-3 skill-items flex-wrap">
            <li>Javascript</li>
            <li>PHP</li>
            <li>Laravel</li>
            <li>MySQL</li>
            <li>Bootstrap</li>
            <li>Github</li>
          </ul>
        </div>

        <div>
          <h3 class="mb-4 font-bold">Tools I try out as hobby</h3>
          <ul class="flex gap-3 skill-items flex-wrap">
            <li>Nuxt JS</li>
            <li>Tailwind CSS</li>
            <li>Markdown</li>
            <li>Heroku</li>
            <li>Vercel</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="lg:mb-48 mb-24">
      <h1 class="text-4xl font-bold m-6 text-center">Experience</h1>
      <div>
        <ol class="relative border-l border-gray-200 dark:border-gray-700">
          <li class="mb-10 ml-4" v-for="(it,index) in me.experiences" :key="index">
            <div
              class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
            ></div>
            <time
              class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >{{ it.from }} - {{ it.to }}</time>
            <h3 class="text-2xl font-bold">{{ it.name }}</h3>
            <p class="mb-2 text-sm text-gray-500">{{ it.role }}</p>
            <ul v-if="it.contributions.length > 0"
              class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
            >
              <li class="mb-1" v-for="(item,idx) in it.contributions" :key="idx">-
              {{ item }}
              </li>
            </ul>
            <p v-else
              class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
            >
          {{ it.contributions }}
          </p>
          </li>
        </ol>
      </div>
    </div>
  </main>
</template>
