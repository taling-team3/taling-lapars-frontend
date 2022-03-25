<template>
  <div class="recommend_talents">
    <div class="rising">
      <h2 class="main_title">지금! 뜨고 있는 클래스</h2>
      <swiper :slidesPerView="3" :spaceBetween="30">
        <swiper-slide v-for="item in recommend" :key="item" :item="item">
              <TalentCardItem
                :no="item.no"
                :thumbUrl="item.thumbUrl"
                :badge="item.badge"
                :talentTitle="item.talentTitle"
                :category="item.category"
                :tutor="item.tutor"
                :price="item.price"
                :classDetail="item.classDetail"
                :userCount="item.userCount"
                />
        </swiper-slide>
      </swiper>
    </div>
    <div class="together">
      <h2 class="main_title">함께 LIVE, 같이하면 더 쉬우니까</h2>
      <swiper :slidesPerView="3" :spaceBetween="30">
        <swiper-slide v-for="item in recommend" :key="item" :item="item">
              <TalentCardItem
                :no="item.no"
                :thumbUrl="item.thumbUrl"
                :badge="item.badge"
                :talentTitle="item.talentTitle"
                :category="item.category"
                :tutor="item.tutor"
                :price="item.price"
                :classDetail="item.classDetail"
                :userCount="item.userCount"
                />
        </swiper-slide>
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
import TalentCardItem from '@/components/Talent/TalentCardItem.vue';
import Repository from '@/api/Talent';

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default defineComponent({
  name: 'RecommendTalents',
  components: {
    Swiper,
    SwiperSlide,
    TalentCardItem,
  },
  created() {
    Repository.getRecommendList()
      .then((response) => {
        console.log(response.data);
        for (let i = 0; i < response.data.recommend.length; i += 1) {
          this.recommend.push(response.data.recommend[i]);
          console.log(this.recommend);
        }
      });
  },
  data() {
    return {
      recommend: [
        {
          no: 1,
          thumbUrl:
            'https://img.taling.me/Content/Uploads/Cover/6a1b476e8e2a220fe04a4aa3aeb24b7816c7ad3d.png',
          badge: 'LIVE',
          talentTitle: '우리는 밥의 민족! 야밤에 영어로\n먹부심 부리기',
          category: '영어회화',
          tutor: '서원',
          price: 40000,
          classDetail: '(총 10시간/시간당 4,000원)',
          userCount: 34,
        },
        {
          no: 2,
          thumbUrl:
            'https://img.taling.me/Content/Uploads/Cover/f47bffd0bbef1c1c14b1957c613c0fac79641396.jpg',
          badge: 'LIVE',
          talentTitle: '오픽토스 만점자랑 실생활 영어문장\n만들고 피드백받기 3',
          category: '영어회화',
          tutor: '최화영 Jenn',
          price: 40000,
          classDetail: '(총 10시간/시간당 4,000원)',
          userCount: 136,
        },
        {
          no: 3,
          thumbUrl:
            'https://img.taling.me/Content/Uploads/Cover/7a8cff1cd358975c2bdefb8219fbbe1fbccb1fe7.jpg',
          badge: 'LIVE',
          talentTitle: '미국 유학생 맞춤 피드백으로 레쥬메/\n영어면접 뽀개기',
          category: '영어회화',
          tutor: '조승욱',
          price: 40000,
          classDetail: '(총 10시간/시간당 4,000원)',
          userCount: 107,
        },
        {
          no: 4,
          thumbUrl:
            'https://img.taling.me/Content/Uploads/Cover/0a518d098df89e71f25e9039196cdf7f0b2ac92f.jpg',
          badge: 'LIVE',
          talentTitle: '6년차 번역가랑 소개팅 대화 주제로\n일본어 문장 만들기',
          category: '일본어회화',
          tutor: '한구루기',
          price: 40000,
          classDetail: '(총 10시간/시간당 4,000원)',
          userCount: 30,
        },
      ],
    };
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
  @apply p-3;
}
.main_title {
  @apply mb-5 font-extrabold text-xl;
}
</style>
