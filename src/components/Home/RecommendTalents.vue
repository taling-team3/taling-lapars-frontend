<template>
  <div class="recommend_talents">
    <div class="rising">
      <h2 class="main_title">지금! 뜨고 있는 클래스</h2>
      <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
      >
        <swiper-slide><TalentDetail /></swiper-slide
        ><swiper-slide><TalentDetail /></swiper-slide
        ><swiper-slide><TalentDetail /></swiper-slide
        ><swiper-slide><TalentDetail /></swiper-slide
        ><swiper-slide><TalentDetail /></swiper-slide
        ><swiper-slide><TalentDetail /></swiper-slide
        ><swiper-slide><TalentDetail /></swiper-slide
        ><swiper-slide><TalentDetail /></swiper-slide
        ><swiper-slide><TalentDetail /></swiper-slide>
      </swiper>
    </div>
    <div class="together">
      <h2 class="main_title">함께 LIVE, 같이하면 더 쉬우니까</h2>
      <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
      >
        <swiper-slide><TalentDetail /></swiper-slide
        ><swiper-slide><TalentDetail /></swiper-slide
        ><swiper-slide><TalentDetail /></swiper-slide
        ><swiper-slide><TalentDetail /></swiper-slide
        ><swiper-slide><TalentDetail /></swiper-slide
        ><swiper-slide><TalentDetail /></swiper-slide
        ><swiper-slide><TalentDetail /></swiper-slide
        ><swiper-slide><TalentDetail /></swiper-slide
        ><swiper-slide><TalentDetail /></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';
import TalentDetail from '@/components/Talent/TalentDetail.vue';

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default defineComponent({
  name: 'HelloWorld',
  components: {
    Swiper,
    SwiperSlide,
    TalentDetail,
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
.recommend_talents {
  @apply p-3
}
.main_title{
  @apply mb-5 font-extrabold text-xl
}
</style>
