<template>
  <footer class="bg-[#ab8a5f]/90 backdrop-blur-sm c-#987450 py-32px px-16px">
    <div class="">
      <div class="flex justify-center items-center gap-48px">
        <!-- 微信 -->
        <div class="flex flex-col items-center gap-8px cursor-pointer hover:c-[#f4e6d1] transition-colors">
          <div class="w-32px h-32px flex items-center justify-center">
            <!-- 微信图标位置 -->
            <WechatOutlined class="text-24px c-[#000000]" />
          </div>
          <span class="text-14px">微信客服</span>
        </div>

        <!-- 微博 -->
        <div class="flex flex-col items-center gap-8px cursor-pointer hover:c-[#f4e6d1] transition-colors">
          <div class="w-32px h-32px flex items-center justify-center">
            <WeiboOutlined class="text-24px c-[#000000]" />
          </div>
          <span class="text-14px">官方微博</span>
        </div>

        <!-- 在线客服 -->
        <div class="flex flex-col items-center gap-8px cursor-pointer hover:c-[#f4e6d1] transition-colors">
          <div class="w-32px h-32px flex items-center justify-center">
            <!-- 在线客服图标位置 -->
            <UserOutlined class="text-24px c-[#000000]" />
          </div>
          <span class="text-14px">在线客服</span>
        </div>
      </div>

      <!-- 版权信息 -->
      <div class="text-center mt-24px pt-16px b-t-solid b-1px b-[#8b7355] text-12px c-[#d4c4a8]">
        © 2024 民肴·中国 版权所有
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { WeiboOutlined, UserOutlined, WechatOutlined } from '@ant-design/icons-vue';

</script>
