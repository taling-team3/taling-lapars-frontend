<template>
  <div class="ReviewItem">
    <slot name="title"/>
    <div class="flex items-center justify-center">
      <img :src="starImgUrl" alt="star" class="h-[13px] w-[14px]"/>
      <slot name="score"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TalentDetailReviewItem',
  data() {
    return {
      starImgUrl: 'https://front-img.taling.me/Content/Images/class/icon_star_new.png',
    };
  },
});
</script>

<style scoped>
.ReviewItem {
  @apply flex w-[100px] items-center justify-between
}
</style>
