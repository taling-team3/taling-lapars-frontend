<template>
  <aside :class="{'sticky top-24': windowTop > 180}"
         class="StickyArea">
    <p class="mb-4 text-3xl font-bold">클래스 일정</p>
    <ol class="h-56 mb-8 text-sm overflow-x-hidden overflow-scroll">
      <li>03월 21일 (월) 23:00 - 24:00</li>
      <li>03월 22일 (화) 23:00 - 00:00</li>
      <li>03월 23일 (수) 23:00 - 00:00</li>
      <li>03월 21일 (월) 23:00 - 24:00</li>
      <li>03월 22일 (화) 23:00 - 00:00</li>
      <li>03월 23일 (수) 23:00 - 00:00</li>
      <li>03월 21일 (월) 23:00 - 24:00</li>
      <li>03월 22일 (화) 23:00 - 00:00</li>
      <li>03월 23일 (수) 23:00 - 00:00</li>
      <li>03월 21일 (월) 23:00 - 24:00</li>
      <li>03월 22일 (화) 23:00 - 00:00</li>
      <li>03월 23일 (수) 23:00 - 00:00</li>
      <li>03월 21일 (월) 23:00 - 24:00</li>
      <li>03월 22일 (화) 23:00 - 00:00</li>
      <li>03월 23일 (수) 23:00 - 00:00</li>
      <li>03월 21일 (월) 23:00 - 24:00</li>
      <li>03월 22일 (화) 23:00 - 00:00</li>
      <li>03월 23일 (수) 23:00 - 00:00</li>
    </ol>
    <div class="flex flex-col items-end pb-2">
      <p class="font-bold">4,000원 / 시간</p>
      <p>40,000원 / 총 10회 10시간</p>
    </div>
    <div class="flex justify-between">
      <button class="WishButton"/>
      <button class="h-[48px] w-[240px] bg-rose-500 text-lg text-white rounded">클래스 신청하기</button>
    </div>
  </aside>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TalentDetailAside',
  data() {
    return {
      windowTop: 0,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    document.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      this.windowTop = document.documentElement.scrollTop;
    },
  },
});
</script>

<style scoped>
.StickyArea {
  @apply flex flex-col h-[447px] w-[330px] min-w-[330px] mt-12 ml-12 pt-4 pl-4 pr-4
  border-2 border-gray-200 rounded-2xl
}

.WishButton {
  background: url("https://front-img.taling.me/Content/app3/images/p2p_class/ico_p2p_wish.png") no-repeat center;
  @apply h-[48px] w-[48px] bg-[length:18px_16px] border-2 border-gray-200 rounded
}

@media (max-width: 990px) {
  .StickyArea {
    @apply hidden
  }
}
</style>
