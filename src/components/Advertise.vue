<template>
  <div class="advertise h-45vh w-full flex justify-center items-center">
    <div class="img"></div>
    <div ref="titleRef" class="text">
      <h2>{{ getTitle(2) }}</h2>
      <a> EXPLORE NOW → </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { getTitle } from '@/mock.js';

let observer: IntersectionObserver;
const titleRef = ref(null);

onBeforeUnmount(() => {
  observer.unobserve(titleRef.value!);
});

onMounted(() => {
  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          if (entry.boundingClientRect.top > window.innerHeight - 100) {
            entry.target.classList.remove('active');
          }
        }
      });
    },
    {
      threshold: [0.5],
    }
  );
  observer.observe(titleRef.value!);
});
</script>

<style lang="scss" scoped>
.advertise {
  @apply postion: relative;
  &::after {
    @apply content-empty position-absolute z-1 left-0 top-0 w-full h-full bg-#333941 opacity-50;
  }
  .img {
    @apply absolute top-0 left-0 w-full h-full;
    background-image: url('/img/Banner_02.jpg');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }
  .text {
    transform: translate3d(0, 18px, 0);
    @apply opacity-0 text-white text-center font-size-30px max-w-25vw break-words position-absolute z-3;
    &.active {
      animation: showHeadText 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s forwards;
    }
    a {
      @apply font-size-14px text-white rounded-full inline-block cursor-pointer hover:color-#cccccc m-t-3vw;
    }
  }
}

@keyframes showHeadText {
  0% {
    opacity: 0;
    transform: translate3d(0, 18px, 0);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translateZ(0);
  }
}
</style>
