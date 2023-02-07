<script setup>
useHead({
  title: `Portfolio | Project 💻`,
  meta: [{ name: "description", content: "My amazing portfolio with nuxt." }],
});

const { data: projects } = useFetch(`/api/project`);
</script>

<template>
  <main>
    <div class="mb-10">
      <h1 class="text-4xl font-bold m-6 text-center">Projects</h1>
      <div class="mb-4 custom-height">
        <div
          class="mx-auto space-y-2 lg:space-y-0 lg:gap-6 lg:grid lg:grid-cols-2"
        >
          <div v-for="(project, index) in projects" :key="index">
            <div
              class="rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform bg-white max-w-md overflow-hidden"
            >
              <a
                :href="project.live || project.github || '#!'"
                target="_blank"
                rel="noreferrer "
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
              
                <nuxt-img
                  :src="project.thumbnail"
                  loading="lazy"
                  class="h-60 w-full object-cover object-left-top"
                  :alt="project.title"
                />
              </a>
              <div class="p-3">
                <h5 class="text-gray-900 text-2xl font-bold mb-2">
                  {{ project.title }}
                </h5>
                <p class="text-gray-700 text-sm mb-4">
                  {{ project.description }}
                </p>
                <div class="flex justify-between">
                  <p class="flex space-x-1">
                    <span
                      class="px-3 py-1 border rounded-md text-slate-500 capitalize text-xs"
                      v-for="(it, idx) in project.tech"
                      :key="idx"
                    >
                      {{ it }}
                    </span>
                  </p>
                  <div class="flex">
                    <a
                      target="_blank"
                      :href="project.github"
                      rel="noreferrer "
                      class="inline-flex mr-2"
                      title="Github"
                      v-if="project.github"
                    >
                      <svg
                        height="24"
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="20"
                        data-view-component="true"
                        class="octicon octicon-mark-github v-align-middle"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      target="_blank"
                      :href="project.live"
                      rel="noreferrer "
                      title="Link"
                      v-else
                    >
                      <svg
                        class="w-6 h-6 stroke-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
