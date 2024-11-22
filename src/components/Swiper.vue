<template>
  <swiper
    class="swiper"
    :modules="modules"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
    :loop="true"
    :slides-per-view="1"
    navigation
    :pagination="{ clickable: true }">
    <swiper-slide v-for="slide in slides" :key="slide.image">
      <div class="img-wrap">
        <img :src="slide.image" />
      </div>
      <div class="des">
        <p>{{ slide.des }}</p>
        <a> EXPLORE NOW → </a>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/a11y';
import { getTitle } from '@/mock.js';
const modules = [Navigation, Autoplay, A11y];
const slides = [
  { image: '/img/Banner_01.png', des: getTitle() },
  { image: '/img/Banner_02.jpg', des: getTitle() },
  { image: '/img/Banner_03.png', des: getTitle() },
];
</script>

<style lang="scss" scoped>
.swiper {
  :deep(.swiper-slide) {
    @apply h-95vh position-relative overflow-hidden;
    .img-wrap {
      @apply w-full h-full relative;
      &::after {
        @apply content-empty position-absolute z-1 left-0 top-0 w-full h-full bg-#333941 opacity-50;
      }
    }
    img {
      @apply w-full h-full max-w-full object-cover block transition-transform duration-1000 ease-linear delay-500 scale-120;
    }
    &.swiper-slide-active {
      img {
        @apply scale-100;
      }
    }
    .des {
      @apply absolute top-50% left-50% -translate-x-1/2 -translate-y-1/2 z-3 w-400px text-white text-center;
      p {
        @apply break-words font-size-40px m-b-20px;
      }
      a {
        @apply font-size-14px text-white bg-#333941 p-10px px-20px rounded-full inline-block cursor-pointer hover:bg-#444c56;
      }
    }
  }
  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    @apply color-#ffffff border-width-1px border-color-#ffffff w-3.5rem h-3.5rem rounded-full p-10px transition duration-300 ease;
    &::after {
      @apply font-size-20px;
    }
    &:hover {
      @apply bg-#4a4640 border-color-transparent;
    }
  }
}
</style>
