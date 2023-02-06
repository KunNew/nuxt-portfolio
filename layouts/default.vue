<script setup></script>
<template>
<div>
    <Navbar />
  <div class="flex flex-col h-screen justify-between">
    <div class="container mx-auto w-full mt-32 md:mt-24">
      <slot></slot>
    </div>
    <ScrollToTop/>
    <Footer/>
  </div>
</div>
</template>
