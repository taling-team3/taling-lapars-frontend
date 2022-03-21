<template>
  <div class="login_box">
    <p class="login_msg">로그인하시고 탈잉의<br>다양한 튜터를 만나보세요</p>
    <router-link to="/" class="link_login">탈잉 로그인</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TalentDetail',
  components: {

  },
});
</script>

<style scoped>
.login_box {
  @apply border rounded-md border-slate-200 p-5
}
.login_msg {
  @apply mb-5 font-bold text-lg
}
.link_login {
  @apply block py-[12px] rounded-md text-center text-white text-base bg-[#ff0045]
}
</style>
