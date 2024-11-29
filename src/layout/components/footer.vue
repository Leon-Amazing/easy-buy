<template>
  <div class="item h-40vh bg-#4a4640 flex justify-around items-center">
    <div class="left">
      <div class="title font-size-35px font-weight-bold c-white m-b-10px">objects</div>
      <div class="des font-size-20px c-white m-b-16px max-w-20vw">The most natural, care-free and easy to use objects that you can get.</div>
      <div class="social-media flex">
        <img src="/img/facebook.png" class="w-30px m-r-10px cursor-pointer" @click="handleClick('https://www.google.com/')" />
        <img src="/img/instagram.png" class="w-30px m-r-10px cursor-pointer" @click="handleClick('https://www.google.com/')" />
        <img src="/img/twiter.png" class="w-30px cursor-pointer" @click="handleClick('https://www.google.com/')" />
      </div>
    </div>
    <div class="qr-code">
      <div class="title font-size-35px font-weight-bold c-white m-b-10px">QR code</div>
      <div class="social-media flex">
        <img src="/img/qr-code.png" class="w-100px m-r-20px cursor-pointer" />
        <img src="/img/qr-code.png" class="w-100px m-r-20px cursor-pointer" />
        <img src="/img/qr-code.png" class="w-100px cursor-pointer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
function handleClick(url: string) {
  window.open(url, '_blank');
}
</script>

<style scoped></style>
