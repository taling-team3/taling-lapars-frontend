<template>
  <div class="best-talents grid grid-cols-3 justify-center justify-items-center">
    <div v-for="item in best" :key="item">
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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TalentCardItem from '@/components/Talent/TalentCardItem.vue';

export default defineComponent({
  name: 'BestTalelnts',
  components: {
    TalentCardItem,
  },
  data() {
    return {
      best: [
        {
          no: 1,
          thumbUrl:
            'https://img.taling.me/Content/Uploads/Images/49694c43c249c03d3ff2c19a8aba780b06a24a68.png',
          badge: '오리지널',
          talentTitle: '실무에 진짜 필요한\n엑셀 노하우',
          category: '엑셀',
          tutor: '쏘피',
          price: 119000,
          classDetail: '(총 8시간 3분)',
          userCount: 9373,
        },
        {
          no: 2,
          thumbUrl:
            'https://img.taling.me/Content/Uploads/Images/2ba2306733b73146631a9ec853a56c22463d0bfa.png',
          badge: '오리지널',
          talentTitle: '팔로워와 수익화를 부르는\n인스타그램 운영 전략',
          category: '마케팅',
          tutor: '엠마',
          price: 139000,
          classDetail: '(총 10시간 14분)',
          userCount: 3128,
        },
        {
          no: 3,
          thumbUrl:
            'https://img.taling.me/Content/Uploads/Images/fdf60a5f8ee363bda3349d537a40176a153a5060.jpg',
          badge: 'LIVE',
          talentTitle: '2022 사주&자미두수로 보는\n타고난 운',
          category: '사주/타로',
          tutor: '치타',
          price: 28500,
          classDetail: '(총 1시간/시간당 28,500원)',
          userCount: 993,
        },
        {
          no: 4,
          thumbUrl:
            'https://img.taling.me/Content/Uploads/Images/6bfd15fec5b3bf59aab071ef351e4ea272fb5d09.png',
          badge: '오리지널',
          talentTitle: '대충 익힌 코딩 바로잡는\n파이썬 데이터 분석의 정석',
          category: '데이터분석',
          tutor: '나성호',
          price: 90000,
          classDetail: '(총 4시간 3분)',
          userCount: 250,
        },
      ],
    };
  },
});
</script>

<style scoped>

</style>
