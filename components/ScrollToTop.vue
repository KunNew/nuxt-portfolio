<script setup>
const visible = ref(false);
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const toggleVisibility = () => {
  if (window.pageYOffset > 80) {
    visible.value = true;
  } else {
    visible.value = false;
  }
};
onMounted(() => {
  window.addEventListener("scroll", toggleVisibility);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", toggleVisibility);
});
</script>
<template>
  <div class="fixed bottom-6 right-6" v-show="visible">
    <div
      @click="scrollToTop()"
      class="p-2 rounded-md bg-black cursor-pointer group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-7 w-7 fill-white group-hover:-translate-y-0.5 transition-transform"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>
</template>
