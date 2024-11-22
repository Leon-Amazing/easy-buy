<template>
  <div class="product-one bg-#e2d5c5 px-20vw py-5vw">
    <div class="headline flex justify-between items-center mb-2vw">
      <div ref="titleRef" class="title font-size-8 color-#4a4640">{{ getTitle() }}</div>
      <div class="discover-more font-size-5 color-#4a4640 font-bold cursor-pointer">DISCOVER MORE →</div>
    </div>

    <div ref="listRef" class="list flex justify-between items-center">
      <div class="item w-12vw h-17vw cursor-pointer" v-for="item in list" :key="item.image">
        <img class="image w-full h-full object-cover mb-1vw" :src="item.image" />
        <div class="des font-size-16px">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getIdAndName } from '@/mock.js';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { getTitle } from '@/mock.js';

let observer: IntersectionObserver;
const titleRef = ref(null);
const listRef = ref(null);
const list: any = ref([]);

function randomNumber() {
  return Math.floor(Math.random() * 8) + 1;
}
function getList() {
  list.value = [
    {
      image: `/img/product1/p (${randomNumber()}).webp`,
    },
    {
      image: `/img/product1/p (${randomNumber()}).webp`,
    },
    {
      image: `/img/product1/p (${randomNumber()}).webp`,
    },
    {
      image: `/img/product1/p (${randomNumber()}).webp`,
    },
  ];
  list.value = list.value.map((item: any, index: number) => Object.assign({}, item, getIdAndName().data[index]));
}
getList();

onBeforeUnmount(() => {
  observer.unobserve(titleRef.value!);
  observer.unobserve(listRef.value!);
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
      threshold: [0],
    }
  );
  observer.observe(titleRef.value!);
  observer.observe(listRef.value!);
});
</script>

<style lang="scss" scoped>
.title {
  @apply opacity-0;
  transform: translate3d(0, 18px, 0);
  &.active {
    animation: showHeadText 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s forwards;
  }
}
.list {
  .item {
    @apply opacity-0;
    transition: opacity 1.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    .image {
      transition: border-radius 0.3s linear;
      &:hover {
        @apply border-rd-45% transform-scale-104;
      }
    }
    &:hover {
      .des {
        @apply color-#606060;
      }
    }
  }
  &.active {
    .item {
      @apply opacity-100;
      &:nth-child(1) {
        @apply transition-delay-200;
      }
      &:nth-child(2) {
        @apply transition-delay-350;
      }
      &:nth-child(3) {
        @apply transition-delay-500;
      }
      &:nth-child(4) {
        @apply transition-delay-650;
      }
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
