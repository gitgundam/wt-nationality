<template>
  <swiper 
    :grabCursor="true" 
    :centeredSlides="true" 
    :slidesPerView="3" 
    :spaceBetween="30"
    :loop="true"
    :loopAdditionalSlides="2"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :speed="800"
    :pagination="{
      clickable: true,
    }" 
    :modules="modules" 
    class="mySwiper"
  >
    <swiper-slide>
      <img src="/chi1.png" alt="图片1" />
    </swiper-slide>
    <swiper-slide>
      <img src="/chi2.png" alt="图片2" />
    </swiper-slide>
    <swiper-slide>
      <img src="/chi3.png" alt="图片3" />
    </swiper-slide>
    <swiper-slide>
      <img src="/chi4.png" alt="图片4" />
    </swiper-slide>
    <swiper-slide>
      <img src="/chi5.png" alt="图片5" />
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
};
</script>
