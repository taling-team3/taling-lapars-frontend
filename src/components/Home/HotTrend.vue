<template>
  <div class="hot_keyword mt-3">
    <h2 class="main_title">핫 트렌드</h2>
    <div class="keyword_list">
      <div
        @click="searchByKeyword('아트테크')"
        @keydown="searchByKeyword('아트테크')"
      >
        #아트테크
      </div>

      <div
        @click="searchByKeyword('비트코인')"
        @keydown="searchByKeyword('비트코인')"
      >
        #비트코인
      </div>

      <div
        @click="searchByKeyword('영어자격증')"
        @keydown="searchByKeyword('영어자격증')"
      >
        #영어자격증
      </div>

      <div
        @click="searchByKeyword('신학기_디자인영상')"
        @keydown="searchByKeyword('신학기_디자인영상')"
      >
        #신학기_디자인영상
      </div>

      <div
        @click="searchByKeyword('유튜브_제작')"
        @keydown="searchByKeyword('유튜브_제작')"
      >
        #유튜브_제작
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HotTrend',
  methods: {
    searchByKeyword(data: string) {
      this.$router.push({ name: 'search', query: { keyword: data } });
    },
  },
});
</script>

<style scoped>
.main_title {
  @apply mb-5 font-extrabold text-xl;
}
.hot_keyword {
  @apply border rounded-md border-slate-200 p-5 flex flex-wrap;
}
.keyword_list div {
  @apply inline-block px-[13px] py-[6px] mr-[8px] mb-[8px]
  rounded-md border-[#94cfff] bg-[#f6fbff] border-[1px] text-sm;
}
</style>
