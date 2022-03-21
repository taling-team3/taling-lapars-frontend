<template>
  <div class="talents_area border-box">
    <article class="talents_tab">
      <button class="btn_tab" @click="tab=0" :class="tabClass(0)">추천수업</button>
      <button class="btn_tab" @click="tab=1" :class="tabClass(1)">탈잉Best</button>
    </article>
    <article class="group_area">
      <div v-if="tab === 0">
        <RecommendTalents />
      </div>
      <div v-if="tab === 1">
        <BestTalents />
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RecommendTalents from '@/components/Home/RecommendTalents.vue';
import BestTalents from '@/components/Home/BestTalents.vue';

export default defineComponent({
  name: 'HotTrend',
  components: {
    RecommendTalents,
    BestTalents,
  },
  data() {
    return {
      // 표시하는 내용 정하는 거
      tab: 0,
    };
  },
  methods: {
    tabClass(tab: number) {
      const isSelected = this.tab === tab;
      return {
        'tab-selection': isSelected,
      };
    },
  },
});
</script>

<style scoped>
.talents_area {
  @apply overflow-hidden
}
.talents_tab {
  @apply flex border-b-[1px]
}
.btn_tab {
  @apply w-1/6 p-4 font-bold text-sm border-b-2 border-transparent
}
.group_area {
  @apply my-4
}
.tab-selection {
  @apply border-[#ff0045]
}
</style>
