<template>
  <div class="flex items-center h-[600px]">
    <swiper
      class="ImageSwiper"
      :centeredSlides="true"
      :pagination="{
      clickable: true,
    }"
      :navigation="true"
    >
      <swiper-slide>
        <img
          src="https://img.taling.me/Content/Uploads/Cover/6a1b476e8e2a220fe04a4aa3aeb24b7816c7ad3d.png"
          alt="JMGTR 영어 표현">
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://img.taling.me/Content/Uploads/Images/3efc2c6daf6a532c9ae13f0738f6a76701654b92.png"
          alt="온라인라이브입장방법01">
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://img.taling.me/Content/Uploads/Images/3efc2c6daf6a532c9ae13f0738f6a76701654b92.png"
          alt="온라인라이브입장방법02">
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://img.taling.me/Content/Uploads/Images/3efc2c6daf6a532c9ae13f0738f6a76701654b92.png"
          alt="과제제출방법01">
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://img.taling.me/Content/Uploads/Images/9813cab900c7ce0d441b8c0e0566844991221046.png"
          alt="과제제출방법02">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/components/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';

SwiperCore.use([Pagination, Navigation]);

export default {
  name: 'TalentDetailSwiper',
  components: {
    Swiper, SwiperSlide,
  },
};
</script>

<style scoped>
.ImageSwiper {
  @apply h-[540px] w-[750px]
}
</style>
