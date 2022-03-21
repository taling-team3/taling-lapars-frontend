<template>
  <section class="flex justify-around mb-16">
    <div class="w-1/3 font-bold text-3xl">
      실제 수강생의 <br> 리뷰입니다.
    </div>
    <div class="w-2/3">
      <div class="ReviewItemContainer">
        <TalentDetailReviewItem>
          <template v-slot:title>커리큘럼</template>
          <template v-slot:score>5</template>
        </TalentDetailReviewItem>
        <TalentDetailReviewItem>
          <template v-slot:title>전달력</template>
          <template v-slot:score>4</template>
        </TalentDetailReviewItem>
        <TalentDetailReviewItem>
          <template v-slot:title>시간준수</template>
          <template v-slot:score>4</template>
        </TalentDetailReviewItem>
        <TalentDetailReviewItem>
          <template v-slot:title>준비성</template>
          <template v-slot:score>3</template>
        </TalentDetailReviewItem>
        <TalentDetailReviewItem>
          <template v-slot:title>친절도</template>
          <template v-slot:score>4</template>
        </TalentDetailReviewItem>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TalentDetailReviewItem from '@/components/Talent/TalentDetailReviewItem.vue';

export default defineComponent({
  name: 'TalentDetailReview',
  components: { TalentDetailReviewItem },
  data() {
    return {
      starImgUrl: 'https://front-img.taling.me/Content/Images/class/icon_star_new.png',
    };
  },
});
</script>

<style scoped>
.ReviewItemContainer {
  @apply grid grid-rows-2 grid-cols-3 justify-items-center h-[70px] border-2
  border-gray-200 rounded pt-2 pb-2
}
</style>
