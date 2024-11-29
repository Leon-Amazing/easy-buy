<template>
  <div class="home-wrapper">
    <div class="header h-8vh position-absolute top-0 left-0 right-0 z-10 c-white flex justify-between items-center px-20vw b-b-0.1px border-color-#e2d5c5" :class="{ sticky: isSticky }">
      <div class="headline cursor-pointer">EASY BUY</div>
      <div class="navs flex justify-between items-center cursor-pointer">
        <div class="navs-item m-r-20px" @click="scrollToAnchor('section1')">product1</div>
        <div class="navs-item m-r-20px" @click="scrollToAnchor('section2')">product2</div>
        <div class="navs-item" @click="scrollToAnchor('section3')">product3</div>
      </div>
    </div>
    <swiper />
    <product-one id="section1" />
    <advertise id="section2" />
    <product-two id="section3" />
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
const isSticky = ref(false);
let lastScrollY = 0;

const scrollToAnchor = (id: string) => {
  const element = document.getElementById(id) as HTMLElement;
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

function handleScroll() {
  const currentScrollY = window.scrollY;
  // 判断是否向上滑动
  if (currentScrollY < lastScrollY && currentScrollY > 0) {
    isSticky.value = true; // 向上滑动，设置为 sticky
  } else {
    isSticky.value = false; // 向下滑动，取消 sticky
  }
  if (currentScrollY > 200) {
    showScrollButton.value = true;
  } else {
    showScrollButton.value = false;
  }
  lastScrollY = currentScrollY;
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
  @apply fixed bottom-20px right-20px z-5 bg-#888888 color-#ffffff font-size-18px px-12px py-3px cursor-pointer rounded-5px;
}
.header {
  transition: top 0.3s ease;
  &.sticky {
    animation: showHead 0.3s ease;
    @apply position-sticky bg-#f9f5f0 c-#333941;

    .headline,
    .navs-item {
      @apply hover:c-#000000;
    }
  }
}
.headline,
.navs-item {
  @apply hover:c-#e2d5c5;
}
@keyframes showHead {
  0% {
    top: -10vh;
  }
  100% {
    top: 0;
  }
}
</style>
