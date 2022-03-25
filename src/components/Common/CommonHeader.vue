<template>
  <header class="border-b-[1px] border-gray-200">
    <div class="flex justify-evenly items-center m-auto pt-4 pb-4 w-[500px]">
      <div>
        <ul class="w-[420px] flex items-center justify-around">
          <li>
            <button class="h-20 w-28" @click="goHome">
              <img src="https://front-img.taling.me/Content/app3/images/logo/logo.png" alt="logo"
              />
            </button>
          </li>
          <li>
            <button class="border-b-2 border-black font-bold" @click="goHome">홈HOME</button>
          </li>
          <li>
            <label for="search">
              <input id="search" type="text" class="h-4"/>
            </label>
          </li>
        </ul>
      </div>
      <div v-if="checkAuthentication()">
        <ul class="w-[450px] flex items-center justify-end">
          <li class="HeaderRightItem">튜터등록</li>
          <li class="HeaderRightItem">
            <button @click="goLogin">로그인</button>
          </li>
        </ul>
      </div>
      <div v-else>
        <ul class="w-[450px] flex items-center justify-end">
          <li class="HeaderRightItem">튜터등록</li>
          <li class="HeaderRightItem">실시간 톡</li>
          <li class="HeaderRightItem">수업신청서</li>
          <li class="HeaderRightItem">수강목록</li>
          <li class="HeaderRightItem">찜</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CommonHeader',
  methods: {
    checkAuthentication() {
      return !this.$store.getters.isAuthenticated;
    },
    goHome() {
      this.$router.push('/');
    },
    goLogin() {
      this.$router.push('/login');
    },
  },
});
</script>

<style scoped>
.HeaderRightItem {
  @apply min-w-max ml-3 mr-3
}

</style>
