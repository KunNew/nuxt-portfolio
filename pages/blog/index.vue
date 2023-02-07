<script setup>
useHead({
  title: `Portfolio | Blog 💻`,
  meta: [{ name: "description", content: "My amazing portfolio with nuxt." }],
});
const { data: blogNav } = await useAsyncData("navigation", () => {
		return fetchContentNavigation(queryContent("blog"));
	});

</script>

<template>
  <main>
    <div class="mb-4">
      <h1 class="text-4xl font-bold m-6 text-center">Blogs</h1>
      <div class="space-y-5">
        <section class=" px-[5%] lg:pt-20">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <template
              v-for="(b, i) in blogNav[0].children"
              :key="`blogNavItem-${b._path}-${i}`"
            >
              <div class="px-7 py-5 rounded-lg border-2">
                <h2 class="text-lg font-semibold rainbow-text">
                  {{ b.title }}
                </h2>
                <!-- Loop over files inside the content dir -->
                <ul
                  v-if="b.children"
                  class="list-disc list-inside mt-4 pl-2 space-y-3"
                >
                  <template
                    v-for="(child, k) in b.children"
                    :key="`childNav-${child._path}-${k}-${i}`"
                  >
                    <li
                      class="list-item text-sm text-gray-600 hover:text-blue-800 underline underline-offset-4 decoration-wavy decoration-primary/40 hover:decoration-primary transition-all"
                    >
                      <NuxtLink :to="`/blog${child._path}`">
                        {{ child.title }}
                      </NuxtLink>
                    </li>
                  </template>
                </ul>
                <ul v-else class="list-disc list-inside mt-4 pl-2 space-y-3">
                  <li
                    class="list-item text-sm text-gray-600 hover:text-blue-800 underline underline-offset-4 decoration-wavy decoration-primary/40 hover:decoration-primary transition-all"
                  >
                    <NuxtLink :to="`/blog${b._path}`"> Get Started </NuxtLink>
                  </li>
                </ul>
              </div>
            </template>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>
