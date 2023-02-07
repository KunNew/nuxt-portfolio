<script setup>
const active = ref(true);
const handleClick = () => {
    active.value =! active.value
}
</script>

<style scoped></style>


<template>
  <div class="custom-navbar">
    <nav
      class="container mx-auto flex items-center justify-items-center justify-between flex-wrap bg-transparent py-6 text-black dark:text-white dark:bg-transparent order-1 gap-4"
    >
      <NuxtLink to="/" class="inline-flex items-center mr-4">
        <span
          class="text-2xl text-black dark:text-white font-bold uppercase tracking-wide"
        >
          <span class="font-extrabold font-jost text-4xl text-blue-600">P</span> heak
        </span>
      </NuxtLink>

      <div :class="{'hidden' : active}" class="w-full lg:inline-flex lg:flex-grow lg:w-auto order-2">
        <div
          class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto gap-4 font-semibold"
        >
        <!-- <NuxtLink to="/blog"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center text-black justify-center hover:bg-gray-100 dark:hover:text-black"
          >
            Blog
          </NuxtLink> -->
        <NuxtLink to="/project"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center text-black justify-center hover:bg-gray-100 dark:hover:text-black"
          >
            Project
          </NuxtLink>
          <NuxtLink to="/about"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center text-black justify-center hover:bg-gray-100 dark:hover:text-black"
          >
            About
          </NuxtLink>
          <NuxtLink to="/use"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center text-black justify-center hover:bg-gray-100 dark:hover:text-black"
          >
            Uses
          </NuxtLink>
        </div>
      </div>

      <div class='lg:order-3'>
                    <button
                        class='inline-flex p-3 hover:bg-gray-100 rounded lg:hidden text-black ml-auto  outline-none dark:text-white dark:hover:text-black'
                      @click="handleClick()"
                    >
                        <svg
                            class='w-6 h-6 dark:fill-white'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                :strokeWidth="2"
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        </svg>
                    </button>
                 
                </div>
    </nav>
  </div>
</template>

