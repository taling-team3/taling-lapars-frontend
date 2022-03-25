<template>
  <div @click="goDetail(no)" @keydown="goDetail(no)">
      <div>
        <img class="thumb" :src="thumbUrl" alt="talent">
      </div>
      <div class="card_cnt">
        <div class="badge_list">
          <span class="badge">{{badge}}</span>
        </div>
        <h3 class="talent_title" v-html="lineBreakTalentTitle"></h3>
        <p class="cate_tutor">
          <span>{{category}} </span>
          <span>{{tutor}}</span>
        </p>
        <p class="price_info">
          <span class="price">{{unitPriceForDisplay(price)}}원</span>
        </p>
        <p class="class_detail">{{classDetail}}</p>
        <div class="talent_info">
          <span class="user">{{userCount}}</span>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TalentCardItem',
  components: {

  },
  props: {
    no: Number,
    thumbUrl: String,
    badge: String,
    talentTitle: {
      type: String,
      default: '',
    },
    category: String,
    tutor: String,
    price: Number,
    classDetail: String,
    userCount: Number,
  },
  methods: {
    unitPriceForDisplay(price:number) {
      return `${price.toLocaleString()}`;
    },
    goDetail(no:number) {
      this.$router.push(`/Talent/${no}`);
    },
  },
  computed: {
    lineBreakTalentTitle() {
      return this.talentTitle.replace('\n', '<br />');
    },
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
