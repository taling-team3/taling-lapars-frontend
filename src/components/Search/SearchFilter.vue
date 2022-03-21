<template>
  <div class="FilterContainer">
    <div class="FilterItem">
      <div class="h-[50px] w-[150px] flex items-center text-lg font-bold">카테고리</div>
      <div class="w-[530px] flex justify-between items-center">
        <div class="FilterButton TalentCategory">뷰티/헬스</div>
        <div class="FilterButton TalentCategory">액티비티</div>
        <div class="FilterButton TalentCategory">취미/공예</div>
        <div class="FilterButton TalentCategory">머니</div>
        <div class="FilterButton TalentCategory">라이프</div>
      </div>
    </div>
    <div class="FilterItem">
      <div class="h-[50px] w-[150px] flex items-center text-lg font-bold">요일</div>
      <div class="w-[400px] flex justify-between items-center">
        <div class="FilterButton TalentDay">월</div>
        <div class="FilterButton TalentDay">화</div>
        <div class="FilterButton TalentDay">수</div>
        <div class="FilterButton TalentDay">목</div>
        <div class="FilterButton TalentDay">금</div>
        <div class="FilterButton TalentDay">토</div>
        <div class="FilterButton TalentDay">일</div>
      </div>
    </div>
    <div class="FilterItem">
      <div class="h-[50px] w-[150px] flex items-center text-lg font-bold">수업형태</div>
      <div class="w-[530px] flex justify-between items-center">
        <div class="FilterButton TalentMethod">
          온라인 LIVE
        </div>
        <div class="FilterButton TalentMethod">
          오프라인
        </div>
        <div class="FilterButton TalentMethod">
          전자책
        </div>
        <div class="FilterButton TalentMethod">
          1:1 클래스
        </div>
        <div class="FilterButton TalentMethod">
          그룹 클래스
        </div>
      </div>
      <button class="h-[50px] w-[150px] ml-4 border-2 border-gray-200 rounded bg-rose-200">
        조회하기
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchFilter',
});
</script>

<style scoped>
.FilterContainer {
  @apply h-[200px] flex flex-col justify-center items-center border-b-2 border-gray-200
}

.FilterItem {
  @apply h-[60px] w-[1000px] flex items-center
}

.FilterButton {
  @apply flex items-center justify-center border-2 border-gray-200 rounded cursor-pointer
  hover:bg-gray-200
}

.TalentCategory {
  @apply h-[50px] w-[100px]
}

.TalentDay {
  @apply h-[50px] w-[50px]
}

.TalentMethod {
  @apply h-[50px] w-[100px]
}
</style>
