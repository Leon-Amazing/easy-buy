<template>
  <div class="home-wrapper">
    <swiper />
    <product-one />
    <product-two />
    <advertise />

    <div class="to-top" @click="scrollToTop" v-show="showScrollButton">↑</div>
  </div>
</template>

<script setup lang="ts">
import Swiper from '@/components/Swiper.vue';
import ProductOne from '@/components/ProductOne.vue';
import ProductTwo from '@/components/ProductTwo.vue';
import Advertise from '@/components/Advertise.vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';

const showScrollButton = ref(false);

function handleScroll() {
  if (window.scrollY > 200) {
    showScrollButton.value = true;
  } else {
    showScrollButton.value = false;
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped>
.to-top {
  @apply fixed bottom-20px right-20px z-5 bg-#4a4640 color-#ffffff font-size-18px px-12px py-3px cursor-pointer;
}
</style>
