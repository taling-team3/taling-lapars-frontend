<template>
  <div class="hot_keyword mt-3">
    <h2 class="main_title">핫 트렌드</h2>
    <div class="keyword_list">
      <div>
        <router-link to="/">#아트테크</router-link>
      </div>
      <div>
        <router-link to="/">#비트코인</router-link>
      </div>
      <div>
        <router-link to="/">#영어자격증</router-link>
      </div>
      <div>
        <router-link to="/">#신학기_디자인영상</router-link>
      </div>
      <div>
        <router-link to="/">#유튜브_제작</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HotTrend',
});
</script>

<style scoped>
.main_title{
  @apply mb-5 font-extrabold text-xl
}
.hot_keyword{
  @apply border rounded-md border-slate-200 p-5 flex flex-wrap
}
.keyword_list div{
  @apply inline-block px-[13px] py-[6px] mr-[8px] mb-[8px]
  rounded-md border-[#94cfff] bg-[#f6fbff] border-[1px] text-sm
}
</style>
