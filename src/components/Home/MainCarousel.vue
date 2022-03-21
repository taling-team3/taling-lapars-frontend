<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
  >
    <swiper-slide>
      <img src="https://img.taling.me/Content/Uploads/Images/d307783e603e7443c809be43a9963ab395e3fd98.png" alt="시집 출간 이벤트">
    </swiper-slide>
    <swiper-slide>
      <img src="https://img.taling.me/Content/Uploads/Images/ab78c5d73f54e86647f0fff19c94e41127d43a48.png" alt="일기 쓰기">
    </swiper-slide>
    <swiper-slide>
      <img src="https://img.taling.me/Content/Uploads/Images/f215fc8d2b426d290498f48f6444ab6784822926.png" alt="음원발매 프로젝트">
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default defineComponent({
  name: 'MainCarousel',
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    // eslint-disable-next-line
    onSwiper(swiper: any) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    },
  },
});
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  @apply border rounded-md
}
</style>
