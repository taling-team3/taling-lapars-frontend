<template>
  <div id="wrap">
    <header id="header">
      <div class="container flex justify-between">
        <h1 class="logo">
          <img
            src="https://front-img.taling.me/Content/app3/img/logo/app-logo@2x.png"
            alt="탈잉TM"
          />
        </h1>
        <div class="hd_main border-box mx-[12px]">
          <div class="link_home mr-12">홈HOME</div>
          <div class="box_sch">
            <label for="inp_sch" class="w-[calc(100%-39px)]">
              <input
                type="text"
                class="inp_sch"
                id="inp_sch"
                placeholder="배우고 싶은 재능이나 튜터를 검색해보세요."
              />
            </label>
            <button class="btn_sch"></button>
          </div>
        </div>
        <div class="category border-box">
          <ul class="cate_list">
            <li class="popular">인기</li>
            <li class="language">외국어</li>
            <li class="activity">액티비티</li>
            <li class="art">취미공예</li>
            <li class="design">디자인영상</li>
            <li class="beauty">뷰티헬스</li>
            <li class="life">라이프</li>
            <li class="money">머니</li>
            <li class="work">커리어</li>
          </ul>
        </div>
      </div>
    </header>
    <main class="container block">
      <div class="main_content">
        <section class="column_left">
          <div class="mb-3">
            <MainCarousel/>
          </div>
        <TalentsArea/>
        </section>
        <section class="column_right">
          <div class="max-w-[360px]">
            <LoginBox/>
            <HotTrend/>
            <OntimeReview/>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainCarousel from '@/components/Home/MainCarousel.vue';
import LoginBox from '@/components/Home/LoginBox.vue';
import HotTrend from '@/components/Home/HotTrend.vue';
import OntimeReview from '@/components/Home/OntimeReview.vue';
import TalentsArea from '@/components/Home/TalentsArea.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    MainCarousel,
    LoginBox,
    HotTrend,
    OntimeReview,
    TalentsArea,
  },
});
</script>
<style scoped>
.wrap {
  @apply min-w-[1200px];
}
.header {
  @apply py-[10px] z-50;
}
.container {
  @apply w-[1200px] mx-auto;
}
.logo {
  @apply w-[70px] h-[70px];
}
.hd_main {
  @apply flex items-center h-[70px] grow shrink;
}
.link_home {
  @apply mx-[20px] font-bold text-sm
}
.border-box {
  @apply border rounded-md border-slate-200;
}
.box_sch {
  @apply flex relative items-center w-[calc(100%-120px)] h-[46px]
  border rounded-full border-slate-300 justify-between;
}
.inp_sch {
  @apply w-full h-full px-[20px] focus:outline-none focus:border-0 focus:ring-0
  border-0 text-sm border-y-0 px-[20px] rounded-full;
}
.btn_sch {
  @apply w-[36px] h-[36px] mr-1 bg-center bg-cover bg-[url('https://front-img.taling.me/Content/app3/img/icon/icon-search-color@2x.png')];
}
.category {
  @apply w-[30%];
}
.cate_list {
  @apply grid grid-cols-3;
}
.cate_list li {
  @apply my-5 mx-auto;
}
.container {
  @apply w-[1200px] mx-auto;
}
.main_content {
  @apply relative mb-[10px];
}
.column_left {
  @apply float-left mt-[-120px] w-[68.9%] mr-[12px]
}
.column_right {
  @apply float-right w-[30%] relative;
}
.main_title {
  @apply mb-5 font-extrabold text-xl;
}
</style>
