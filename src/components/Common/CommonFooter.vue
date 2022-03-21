<template>
  <footer class="flex flex-col justify-center items-center w-full mb-28 border-t-2 border-gray-200">
    <section class="mt-8 w-[1020px] flex justify-around">
      <div class="flex flex-col">
        <p class="mb-4 text-lg font-bold">COMPANY</p>
        <p>회사 소개</p>
        <p>블로그</p>
        <p>언론보도</p>
      </div>
      <div class="flex flex-col">
        <p class="mb-4 text-lg font-bold">POLICIES</p>
        <p>이용약관</p>
        <p class="underline font-bold">개인정보처리방침</p>
      </div>
      <div class="flex flex-col">
        <p class="mb-4 text-lg font-bold">SUPPORT</p>
        <p>FAQ</p>
        <p>탈잉센터</p>
      </div>
      <div class="flex flex-col">
        <p class="mb-4 text-lg font-bold">B2B</p>
        <p>기업교육</p>
        <p>브랜드제휴</p>
      </div>
      <div class="flex flex-col">
        <p class="mb-4 text-lg font-bold">TALING CENTER</p>
        <p class="text-red-500">탈잉에게 문의하기</p>
        <div class="mt-2">
          <p class="text-sm">운영시간</p>
          <p class="text-sm">평일 10:00 ~ 17:00 점심 13:00 ~14:00</p>
        </div>
      </div>
    </section>
    <section class="w-[940px] mt-8 text-sm text-gray-500">
      <p>상호 : (주)탈잉 | 주소 : 서울특별시 강남구 테헤란로 625 6층 | 사업자등록번호 : 767-88-00630 | 대표자명 : 김윤환
        <br>
        통신판매업 신고번호 : 제 2017-서울강남-02964
        <br>
        Copyright ⓒ2020 taling inc, ltd. All rights reserved</p>
    </section>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CommonFooter',
});
</script>

<style scoped>
</style>
