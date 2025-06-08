<template>
  <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'" :loop="true"
    :loopAdditionalSlides="2" :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }" :coverflowEffect="{
      rotate: 30,
      stretch: 0,
      depth: 150,
      modifier: 1.5,
      slideShadows: true,
    }" :pagination="{
      clickable: true,
    }" :modules="modules" class="mySwiper">
    <swiper-slide>
      <img src="/chi1.png" />
    </swiper-slide>
    <swiper-slide>
      <img src="/chi2.png" />
    </swiper-slide>
    <swiper-slide>
      <img src="/chi3.png" />
    </swiper-slide>
    <swiper-slide>
      <img src="/chi4.png" />
    </swiper-slide>
    <swiper-slide>
      <img src="/chi5.png" />
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination, Autoplay],
    };
  },
};
</script>
