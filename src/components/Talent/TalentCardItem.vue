<template>
  <router-link to="/" >
    <div>
      <img class="thumb" src="https://img.taling.me/Content/Uploads/Images/2ba2306733b73146631a9ec853a56c22463d0bfa.png" alt="talent">
    </div>
    <div class="card_cnt">
      <div class="badge_list">
        <span class="badge">오리지널</span>
      </div>
      <h3 class="talent_title">실무에 진짜 필요한<br>엑셀 노하우</h3>
      <p class="cate_tutor">
        <span>엑셀 </span>
        <span>쏘피</span>
      </p>
      <p class="price_info">
        <span class="price">119,000원</span>
      </p>
      <p class="class_detail">(총 8시간 3분)</p>
      <div class="talent_info">
        <span class="user">9373</span>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TalentCardItem',
  components: {

  },
});
</script>

<style scoped>
.thumb {
  @apply relative w-[245px] h-[157px] mb-[10px] rounded-md
}
.card_cnt {
  @apply pb-3 text-sm
}
.badge {
  @apply h-[18px] rounded-sm text-[11px] text-white bg-[#9433ff] px-[5px]
}
.cate_tutor {
  @apply text-[11px] text-slate-500 font-bold
}
.price_info {
  @apply text-[14px] font-bold
}
.class_detail {
  @apply text-[11px]
}
.user {
  background: url(https://front-img.taling.me/Content/app3/img/icon/icClasscardWish@2x.png);
  @apply bg-left bg-[length:12px_12px] text-[11px] font-bold pl-[16px] bg-no-repeat
}
</style>
