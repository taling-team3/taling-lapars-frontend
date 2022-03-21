<template>
<div class="ontime_review">
  <h2 class="main_title">실시간 리뷰</h2>
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
      <router-link to="/" class="flex">
        <img src="https://img.taling.me/Content/Uploads/Cover/780e7f928504c996d538a292c93084ddb57881b8.jpg" alt="1">
        <div class="text-box">
          <span class="write_time">2시간전</span>
          <div class="score_talent">
            <div class="score_star">
              <span class="star"></span>
            </div>
            <span class="score">5.0
              <em>(1)</em>
            </span>
          </div>
          <p class="review_text">
            수업 너무 꼼꼼하게 준비해주시고 리뷰도 알차게 해주셔서 매주 라이브방송 준비하는데 도움이 되었어요~
            시작단계에서 개인 브랜드 방향 설정하는데 고민이었는데 튜터님 조언이 도움이 되었고 방송중 리뷰도 해주셔서 감사합니다.
          </p>
        </div>
      </router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/" class="flex">
        <img src="https://img.taling.me/Content/Uploads/Cover/780e7f928504c996d538a292c93084ddb57881b8.jpg" alt="2">
        <div class="text-box">
          <span class="write_time">2시간전</span>
          <div class="score_talent">
            <div class="score_star">
              <span class="star"></span>
            </div>
            <span class="score">5.0
              <em>(1)</em>
            </span>
          </div>
          <p class="review_text">
            수업 너무 꼼꼼하게 준비해주시고 리뷰도 알차게 해주셔서 매주 라이브방송 준비하는데 도움이 되었어요~
            시작단계에서 개인 브랜드 방향 설정하는데 고민이었는데 튜터님 조언이 도움이 되었고 방송중 리뷰도 해주셔서 감사합니다.
          </p>
        </div>
      </router-link>
    </swiper-slide>
  </swiper>
</div>
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
  name: 'HelloWorld',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main_title{
  @apply mb-5 font-extrabold text-xl
}
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
  width: 100px;
  height: 100px;
  object-fit: cover;
  @apply border rounded-md mr-[15px]
}
.ontime_review {
  @apply border rounded-md border-slate-200 p-5 mt-3
}
.write_time {
  @apply block relative w-[54px] mb-[5px] bg-[#ff0045] rounded-md text-center text-white text-[10px]

}
.score_talent {
  @apply flex items-center mb-[10px]
}
.score_star {
  background-image: url('https://front-img.taling.me/Content/app3/img/icon/icon_star-nonactive@2x.png');
  @apply mr-[8px] w-[85px] h-[16px] bg-left bg-repeat-x bg-[length:17px_16px]
}
.star {
  background-image: url('https://front-img.taling.me/Content/app3/img/icon/icon_star-p2p_active@2x.png');
  height: 16px;
  @apply inline-block bg-repeat-x w-full bg-left bg-[length:17px_16px] align-top
}
.score {
  @apply text-[12px] font-bold
}
.score em {
  @apply text-[10px] font-normal
}
.review_text {
  @apply h-[46px] overflow-hidden text-[14px]
}
</style>
