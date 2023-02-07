<script setup>
useHead({
  title: `Portfolio | About 💻`,
  meta: [{ name: "description", content: "My amazing portfolio with nuxt." }],
});

const { data } = await useFetch("/api/use");


</script>

<template>
  <main>
    <h1 class="text-4xl font-bold m-6 text-center">Uses</h1>
    <div class="lg:mb-48 mb-24">
      <div
        class="mx-auto space-y-2 lg:space-y-0 lg:gap-6 lg:grid lg:grid-cols-1" v-for="(it,index) in  data.uses" :key="index"
      >
        <div class="mb-4">
          <h3 class="mb-4 font-bold text-2xl">{{ it.name }}</h3>
          <ul class="list-disc">
            <li class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400" v-for="(item,idx) in it.tools" :key="idx">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
 
  </main>
</template>
