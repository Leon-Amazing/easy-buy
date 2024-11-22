<template>
  <div class="product-two bg-#f9f5f0 px-100 py-20">
    <div class="nav flex justify-between items-center px-100px border-b-1px border-color-#c49d84">
      <div class="nav-item flex flex-col items-center p-b-15px cursor-pointer" :class="{ active: index === activeIndex }" @click="handleNav(index)" v-for="(nav, index) in navs" :key="index">
        <img class="mb-40px w-80px h-80px object-cover border-rd-50%" :src="nav.image" alt="nav" />
        <span class="color-#606060">{{ nav.name }}</span>
      </div>
    </div>

    <div class="list flex flex-wrap justify-between items-center">
      <div class="item w-20% h-300px m-r-10px m-t-50px p-b-30px cursor-pointer" v-for="(item, index) in list" :key="index">
        <div class="item-img w-full h-full overflow-hidden p-2px flex justify-center items-center">
          <img class="w-90%" :src="item.image" />
        </div>
        <div class="item-name color-#606060">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getIdAndName } from '@/mock.js';
import { ref } from 'vue';
const navs: any = ref([
  {
    image: '/img/product2/nav1.png',
  },
  {
    image: '/img/product2/nav2.png',
  },
  {
    image: '/img/product2/nav3.png',
  },
  {
    image: '/img/product2/nav4.png',
  },
]);

function randomNumber() {
  return Math.floor(Math.random() * 36) + 1;
}

const list: any = ref([]);
const activeIndex = ref(0);

function getNavs() {
  navs.value = navs.value.map((item: any, index: number) => Object.assign({}, item, getIdAndName().data[index]));
}
getNavs();

function getList() {
  list.value = [
    {
      image: `/img/product2/p (${randomNumber()}).png`,
    },
    {
      image: `/img/product2/p (${randomNumber()}).png`,
    },
    {
      image: `/img/product2/p (${randomNumber()}).png`,
    },
    {
      image: `/img/product2/p (${randomNumber()}).png`,
    },
    {
      image: `/img/product2/p (${randomNumber()}).png`,
    },
    {
      image: `/img/product2/p (${randomNumber()}).png`,
    },
    {
      image: `/img/product2/p (${randomNumber()}).png`,
    },
    {
      image: `/img/product2/p (${randomNumber()}).png`,
    },
  ];
  list.value = list.value.map((item: any, index: number) => Object.assign({}, item, getIdAndName().data[index]));
}
getList();

function handleNav(index: number) {
  activeIndex.value = index;
  getList();
}
</script>

<style lang="scss" scoped>
.nav-item {
  &.active {
    @apply position-relative;
    &::after {
      @apply content-empty position-absolute left-50% translate-x--50% bottom--1.5px h-3px w-120px bg-#4a4640 border-rd-1.5px;
    }
  }
}
.list {
  .item {
    &:nth-child(4n) {
      @apply m-r-0;
    }
    .item-img {
      @apply border-1px border-color-#c49d84;
    }
    &:hover {
      .item-img {
        img {
          @apply transform-scale-104;
        }
      }
      .item-name {
        @apply text-color-#4a4640;
      }
    }
  }
}
</style>
