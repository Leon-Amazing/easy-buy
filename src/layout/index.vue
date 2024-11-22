<template>
  <div class="app-wrapper">
    <Header></Header>

    <section class="app-main">
      <router-view v-slot="{ Component, route }">
        <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <component :is="Component" :key="route.fullPath"></component>
          </keep-alive>
        </transition>
      </router-view>
    </section>

    <Footer></Footer>
  </div>
</template>
<script setup lang="ts" name="AppMain">
import Header from '@/layout/components/header.vue';
import Footer from '@/layout/components/footer.vue';
</script>

<style lang="scss" scoped>
// .app-wrapper {
//   min-width: var(--hy-min-width);
//   height: 100%;
//   .app-main {
//     width: 100%;
//     min-height: calc(100% - var(--hy-nav-height));
//   }
// }
</style>
