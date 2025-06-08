<template>
  <div class="w-100vw min-h-[calc(100vh_-_64px)] bg-cover bg-center bg-repeat-y"
    :style="{ backgroundImage: `url(${bgImage})` }">
    <header
      class="h-64px flex justify-between items-center bg-[#ab8a5f]/90 backdrop-blur-sm c-white px-16px  b-b-solid b-2px b-#79736a fixed top-0 left-0 right-0 z-10">
      <div class="cursor-pointer" @click="router.push('/')">
        民肴·中国
      </div>
      <div class="flex justify-between items-center gap-22px">
        <div v-for="item in menuList" :key="item.path" class="cursor-pointer" @click="router.push(item.path)"
          :class="{ 'text-#854d3c': route.path === item.path }">
          {{ item.name }}
        </div>
      </div>
    </header>
    <div class="mt-64px mx-64px bg-[rgba(0,0,0,0.08)]">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in" appear>
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Button } from "ant-design-vue";
import { useRouter, useRoute } from "vue-router";
import bgImage from "./assets/wtbg.png";

const route = useRoute();

const router = useRouter();

const menuList = [
  {
    name: '首页',
    path: '/'
  },
  {
    name: '互动专区',
    path: '/interactive'
  },
  {
    name: '服务功能',
    path: '/service'
  },
  {
    name: '注册',
    path: '/register'
  }
]
</script>

<style scoped>
/* fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>