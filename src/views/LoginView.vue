<template>
  <CommonHeader/>
  <section class="min-h-[calc(100vh-484px)] pt-[130px] pb-[200px] text-center mx-auto w-[1040px]">
    <div class="w-[420px] mx-auto py-[30px] px-[20px] border-[1px]">
      <img src="https://front-img.taling.me/Content/app3/images/login/imgWelcomeCoupon258Px@2x.png"
      width="41%" class="mx-auto" alt="welcome coupon">
      <img src="https://front-img.taling.me/Content/app3/images/login/imgSpeechBubble@2x.png"
      width="51%" class="mx-auto" alt="탈잉이 처음이라면?">
      <h2 class="mx-auto font-semibold text-[22px] mb-5">가입 즉시 12만원 쿠폰팩을 드려요!</h2>
      <div id="google-signin-button"></div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import CommonHeader from '@/components/Common/CommonHeader.vue';

export default defineComponent({
  name: 'LoginPopup',
  components: { CommonHeader },
  methods: {
    onSignIn(user) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const profile = user.getBasicProfile();
      this.$store.dispatch('setIdToken', user.wc.id_token);
      this.$store.dispatch('setName', profile.getName());
      this.$router.push('/');
    },
  },
  mounted() {
    window.gapi.signin2.render('google-signin-button', {
      onsuccess: this.onSignIn,
      scope: 'profile email',
      width: 378,
      height: 50,
      margin: '0 auto',
      longtitle: true,
      theme: 'dark',
    });
  },
});

</script>

<style scoped>
</style>
