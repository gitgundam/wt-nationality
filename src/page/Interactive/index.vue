<template>
  <div class="p-20px overflow-visible" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
    <h1 class="my-0">食谱生成</h1>
    <div class="h-400px w-[80%] relative overflow-visible ">
      <!-- 中心图片 -->
      <motion.div :animate="centerMotionState" :transition="{
        type: 'spring',
        stiffness: 400,
        damping: 25,
        mass: 0.6
      }" :initial="{ scale: 1, x: 0, y: 0 }" class="absolute"
        style="left: 35%; top: 50%; transform: translate(-50%, -50%)">
        <img src="/chide1.png" alt="中心食谱" class="w-100px h-100px rounded-full object-cover motion-image center-image" />
      </motion.div>

      <!-- 五个围绕图片 -->
      <motion.div v-for="(image, index) in surroundingImages" :key="index" :animate="motionStates[index]" :transition="{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        mass: 0.8
      }" :initial="{ scale: 1, x: 0, y: 0 }" :style="getImagePosition(index)" class="absolute">
        <img :src="image.src" :alt="image.alt"
          class="w-120px h-120px rounded-full object-cover motion-image surrounding-image" />
      </motion.div>


      <motion.div :animate="centerMotionState" :transition="{
        type: 'spring',
        stiffness: 400,
        damping: 25,
        mass: 0.6
      }" :initial="{ scale: 1, x: 0, y: 0 }" class="absolute"
        style="right: -24%; bottom: -50%; transform: translate(-50%, -50%)">
        <img src="/guo.png" alt="中心食谱" class="w-400px h-400px motion-image " />
      </motion.div>
    </div>
    <h1>互动体验</h1>
    <div class="h-300px grid grid-cols-4 gap-16px">
      <div
        class="hover:scale-105 transition-transform duration-300 rounded-20px h-full bg-#efdfc6 p-20px b-solid b-2px b-#854d3c flex flex-col items-center justify-center gap-22px">
        <div class="text-64px">
          <PlayCircleFilled />
        </div>
        <div class="text-24px">AR体验</div>
      </div>
      <div
        class="hover:scale-105 transition-transform duration-300 rounded-20px h-full bg-#efdfc6 p-20px b-solid b-2px b-#854d3c flex flex-col items-center justify-center gap-22px">
        <div class="text-64px">
          <VideoCameraFilled />
        </div>
        <div class="text-24px">视频学习</div>
      </div>
      <div
        class="hover:scale-105 transition-transform duration-300 rounded-20px h-full bg-#efdfc6 p-20px b-solid b-2px b-#854d3c flex flex-col items-center justify-center gap-22px">
        <div class="text-64px">
          <MessageFilled />
        </div>
        <div class="text-24px">创新交流</div>
      </div>
      <div
        class="hover:scale-105 transition-transform duration-300 rounded-20px h-full bg-#efdfc6 p-20px b-solid b-2px b-#854d3c flex flex-col items-center justify-center gap-22px">
        <div class="text-64px">
          <ShoppingFilled />
        </div>
        <div class="text-24px">特色商城</div>
      </div>

    </div>
    <div>
      <p class="text-16px c-#4b2317 p-32px indent-32px">
        穿越AR虚拟厨房，体验彝族跳菜宴在餐桌舞动；跟随非遗传承人视频手作五色糯米饭，弹幕互动答疑。加入「风味共创」：创新折耳根奶茶配方，票选最高者直通商城！在「山野风物」扫商品看傣族烤鱼实景，听苦荞茶背后的彝寨故事。上传节庆美食视频，赢限定徽章兑好礼——让文化传承可玩、可赚、
      </p>
    </div>
    <div class="relative w-full h-[600px] bg-transparent rounded-[20px] overflow-hidden p-8px">
      <!-- 瓷砖布局 -->
      <div class="relative w-full h-full grid grid-cols-[1fr_1.5fr] gap-8px">
        <div class="grid grid-cols-[1.3fr_1fr] grid-rows-[300px_300px] gap-8px">
          <div class="bg-[#efdfc6] rounded-[12px] col-span-full overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
            <img src="/jie4.png" alt="节庆时光" class="w-full h-full object-cover">
          </div>
          <div class="bg-[#efdfc6] rounded-[12px] overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
            <img src="/jie1.png" alt="节庆时光" class="w-full h-full object-cover">
          </div>
          <div class="bg-[#efdfc6] rounded-[12px] overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
            <img src="/jie7.png" alt="节庆时光" class="w-full h-full object-cover">
          </div>
        </div>
        <div class="grid grid-cols-3 grid-rows-[200px_200px_200px] gap-8px">
          <div class="bg-[#efdfc6] rounded-[12px] overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
            <img src="/jie2.png" alt="节庆时光" class="w-full h-full object-cover">
          </div>
          <div class="bg-[#efdfc6] rounded-[12px] col-span-2 overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
            <img src="/jie5.png" alt="节庆时光" class="w-full h-full object-cover">
          </div>
          <div class="bg-[#efdfc6] rounded-[12px] col-span-full overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
            <img src="/jie6.png" alt="节庆时光" class="w-full h-full object-cover">
          </div>
          <div class="bg-[#efdfc6] rounded-[12px] col-span-2 overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
            <img src="/jie8.png" alt="节庆时光" class="w-full h-full object-cover">
          </div>
          <div class="bg-[#efdfc6] rounded-[12px] overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
            <img src="/jie3.png" alt="节庆时光" class="w-full h-full object-cover">
          </div>
        </div>
      </div>

      <!-- 中心圆形元素 -->
      <div
        class="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[152px] h-[152px] rounded-full z-10 relative">
        <!-- 伪元素模拟透明边框 -->
        <div class="absolute inset-0 rounded-full bg-transparent border-6 border-[#a54d38] z-0"></div>
        <div
          class="w-[140px] h-[140px] bg-[#a54d38] rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <span class="text-[20px] font-bold text-white tracking-wider">节庆时光</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { motion } from 'motion-v';
import { MessageFilled, ShoppingFilled, VideoCameraFilled, PlayCircleFilled } from '@ant-design/icons-vue';

interface MotionState {
  x: number;
  y: number;
  scale: number;
  rotate?: number;
}

interface ImageItem {
  src: string;
  alt: string;
}

// 围绕图片数据（5个图片）
const surroundingImages = ref<ImageItem[]>([
  { src: '/chide7.png', alt: '食谱生成1' },
  { src: '/chide2.png', alt: '食谱生成2' },
  { src: '/chide3.png', alt: '食谱生成3' },
  { src: '/chide4.png', alt: '食谱生成4' },
  { src: '/chide5.png', alt: '食谱生成5' }
]);

// 中心图片的 Motion 动画状态
const centerMotionState = ref<MotionState>({
  x: 0,
  y: 0,
  scale: 1,
  rotate: 0
});

// 每个围绕图片的 Motion 动画状态
const motionStates = ref<MotionState[]>(
  Array.from({ length: 5 }, () => ({
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0
  }))
);

// 每个图片的随机方向系数
const randomDirections = ref<{ x: number; y: number }[]>(
  Array.from({ length: 5 }, () => ({
    x: (Math.random() - 0.5) * 2, // -1 到 1 之间的随机数
    y: (Math.random() - 0.5) * 2
  }))
);

// 浮动动画状态
const isFloating = ref(true);

/**
 * 计算图片在正五边形中的位置，保持圆形分布并满足边界条件
 * @param index - 图片索引
 */
const getImagePosition = (index: number) => {
  const angle = (index * 2 * Math.PI) / 5; // 五等分圆周
  const radius = 38; // 保持合适的半径形成圆形
  const centerX = 35; // 中心X位置
  const centerY = 50; // 容器中心 Y (百分比)

  // 计算标准五边形顶点位置
  let x = centerX + radius * Math.cos(angle - Math.PI / 2);
  let y = centerY + radius * Math.sin(angle - Math.PI / 2);

  // 轻微调整以满足边界条件，但保持五边形形状
  const angleInDegrees = ((angle - Math.PI / 2) * 180 / Math.PI + 360) % 360;

  // 只在必要时进行最小调整

  // 顶部图片：稍微上移贴近上边
  if (index === 0) { // 第一个图片在顶部
    y = Math.max(y - 8, 8); // 轻微上移
  }

  // 左侧图片：确保不贴左边
  if (x < 12) {
    x = 12; // 最小左边距
  }

  // 右侧图片：确保不太靠右
  if (x > 68) {
    x = 68; // 最大右边距
  }

  // 底部图片：允许稍微超出
  if (index === 3 || index === 2) { // 底部的两个图片
    y = Math.min(y + 5, 105); // 轻微下移
  }

  return {
    left: `${x}%`,
    top: `${y}%`,
    transform: 'translate(-50%, -50%)'
  };
};

/**
 * 处理鼠标移动事件，实现随机方向的弹性动画
 * @param event - 鼠标移动事件
 */
const handleMouseMove = (event: MouseEvent) => {
  const rect = event.currentTarget as HTMLElement;
  const containerRect = rect.getBoundingClientRect();

  // 计算鼠标相对于整个页面容器的位置
  const mouseX = event.clientX - containerRect.left;
  const mouseY = event.clientY - containerRect.top;

  // 计算图片区域的中心点（相对于整个页面容器）
  const imageAreaTop = 60; // 大约 h1 标题的高度
  const imageAreaHeight = 400; // 图片区域高度
  const centerX = containerRect.width * 0.35; // 35% 位置
  const centerY = imageAreaTop + imageAreaHeight / 2; // 图片区域的中心Y位置

  // 停止浮动动画
  isFloating.value = false;

  // 计算鼠标距离图片中心的距离，用于整体影响强度
  const mouseToCenterDistance = Math.sqrt(
    Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2)
  );
  // 增大影响范围，让整个页面都能产生动画效果
  const globalInfluence = Math.max(0.1, 1 - mouseToCenterDistance / 500);

  // 中心图片动画
  const centerOffsetX = (mouseX - centerX) * globalInfluence * 0.1;
  const centerOffsetY = (mouseY - centerY) * globalInfluence * 0.1;
  centerMotionState.value = {
    x: centerOffsetX,
    y: centerOffsetY,
    scale: 1 + globalInfluence * 0.1,
    rotate: Math.sin(mouseToCenterDistance * 0.01) * globalInfluence * 5
  };

  // 为每个围绕图片计算随机方向动画
  motionStates.value.forEach((state, index) => {
    const direction = randomDirections.value[index];

    // 使用随机方向系数计算偏移
    const randomOffsetX = direction.x * globalInfluence * 30;
    const randomOffsetY = direction.y * globalInfluence * 30;

    // 添加一些基于鼠标位置的变化
    const mouseInfluence = Math.sin(mouseToCenterDistance * 0.02 + index) * globalInfluence;
    const offsetX = randomOffsetX + mouseInfluence * 10;
    const offsetY = randomOffsetY + mouseInfluence * 10;

    // 计算缩放和旋转（每个图片不同）
    const scale = 1 + globalInfluence * (0.15 + Math.abs(direction.x) * 0.1);
    const rotate = direction.x * direction.y * globalInfluence * 20;

    // 更新状态
    motionStates.value[index] = {
      x: offsetX,
      y: offsetY,
      scale: scale,
      rotate: rotate
    };
  });
};

/**
 * 鼠标离开时重置位置，恢复浮动
 */
const handleMouseLeave = () => {
  // 重置中心图片到初始状态
  centerMotionState.value = {
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0
  };

  // 重置所有围绕图片到初始状态
  motionStates.value.forEach((state, index) => {
    motionStates.value[index] = {
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0
    };
  });

  // 恢复浮动动画
  setTimeout(() => {
    isFloating.value = true;
    startFloatingAnimation();
  }, 500);
};

/**
 * 启动浮动动画
 */
const startFloatingAnimation = () => {
  if (!isFloating.value) return;

  const animate = () => {
    if (!isFloating.value) return;

    const time = Date.now() * 0.001;

    // 中心图片的轻微浮动
    centerMotionState.value = {
      x: Math.sin(time * 0.3) * 1,
      y: Math.cos(time * 0.2) * 1.5,
      scale: 1 + Math.sin(time * 0.5) * 0.02,
      rotate: Math.sin(time * 0.25) * 2
    };

    // 为每个围绕图片设置不同的随机浮动动画
    motionStates.value.forEach((state, index) => {
      const direction = randomDirections.value[index];
      const offset = index * 1.2; // 每个图片的动画偏移

      motionStates.value[index] = {
        x: Math.sin(time * 0.4 + offset) * direction.x * 3,
        y: Math.cos(time * 0.3 + offset) * direction.y * 4,
        scale: 1 + Math.sin(time * 0.6 + offset) * 0.04,
        rotate: Math.sin(time * 0.35 + offset) * direction.x * 4
      };
    });

    requestAnimationFrame(animate);
  };

  animate();
};

onMounted(() => {
  // 启动初始浮动动画
  startFloatingAnimation();
});

</script>

<style scoped>
.motion-image {
  cursor: pointer;
  filter: drop-shadow(0 4px 15px rgba(133, 77, 60, 0.2));
  transition: filter 0.3s ease;
}

.motion-image:hover {
  filter: drop-shadow(0 8px 25px rgba(133, 77, 60, 0.3)) brightness(1.05);
}

/* 中心图片样式 */
.center-image {
  filter: drop-shadow(0 6px 20px rgba(133, 77, 60, 0.3));
  border: 3px solid rgba(133, 77, 60, 0.3);
}

.center-image:hover {
  filter: drop-shadow(0 10px 30px rgba(133, 77, 60, 0.4)) brightness(1.1);
  border-color: rgba(133, 77, 60, 0.5);
}

/* 围绕图片样式 */
.surrounding-image {
  border: 2px solid rgba(133, 77, 60, 0.2);
}

.surrounding-image:hover {
  border-color: rgba(133, 77, 60, 0.4);
}

/* 确保 Motion 组件正确显示 */
.motion-container {
  display: inline-block;
}

/* 透明边框圆形 - 像瓷砖间距一样透明 */
.circle-transparent-border {
  background: transparent;
  border: 6px solid transparent;
}
</style>