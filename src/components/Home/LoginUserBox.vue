<template>
  <div class="user_box">
    <div class="area_info_top">
      <div class="my_profile relative">
        <img
          class="img_profile"
          alt="내사진"
          src="https://img.taling.me/Content/Uploads/Profile/792d9752824c1e2b72975a5705e077c69564562f.jpg"
        />
      </div>
      <div class="logon_msg">
        <b>
          <em class="level"></em>
          {{ getProfile() }}님
        </b>
        <span>반가워요</span>
        <button class="btn_logout" type="button" id="btn-menu-logout">
          로그아웃
        </button>
      </div>
    </div>
    <div class="area_info_bottom">
      <div class="btn_coupon" id="coupon">
        <!-- 이거 하나로 합치고 신청한 클래수 수 표시 -->
        <button type="button" class="coupon text-[13px]">신청한 수업 {{2}}</button>
      </div>
    </div>
    <ul class="lnb">
      <li class=""><a href="/My/MyTuteeList/">수업신청서</a></li>
      <li><a href="/My/MyTuteeClassList/">수강목록</a></li>
      <li class="link_wish"><a href="/My/MyTuteeWishList/">찜</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginUserBox',
  components: {},
  methods: {
    getProfile():string {
      return this.$store.getters.getName;
    },
  },
});
</script>

<style scoped>
.user_box {
  @apply border rounded-md border-slate-200 border-[1px]
}
.area_info_top {
  @apply flex items-center px-[20px] pt-[20px] pb-[16px];
}
.img_profile {
  @apply w-[45px] h-[45px] rounded-full;
}
.logon_msg {
  @apply pl-[15px]
}
.level {
  @apply text-[12px] mr-[3px]
}
.btn_logout {
  @apply ml-[10px] font-bold text-[10px] text-[#999] underline-offset-1
}
.area_info_bottom {
  @apply flex items-center justify-between px-[20px] pb-[14px]
}
.btn_coupon {
  @apply pr-[17px] pl-[15px] rounded-md bg-black bg-opacity-10 text-[0px]
}
.lnb {
  @apply flex items-center text-center border border-slate-200 border-[1px]
}
.lnb li {
  @apply w-1/3 pt-[15px] pb-[16px]
}
.link_wish {
  background: url('https://front-img.taling.me/Content/app3/img/icon/icon-wish-clicked@2x.png');
  background-position-x: 37px;
  background-position-y: center;
  @apply pl-[22px] bg-no-repeat bg-[length:24px_24px]
}
</style>
