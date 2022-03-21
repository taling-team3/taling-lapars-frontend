<template>
  <header class="border-b-[1px] border-gray-200">
    <div class="flex justify-evenly items-center m-auto pt-4 pb-4 max-w-7xl">
      <div>
        <ul class="w-[420px] flex items-center justify-around">
          <li>
            <img src="https://front-img.taling.me/Content/app3/images/logo/logo.png" alt="logo"
                 class="h-20 w-28"
            />
          </li>
          <li class="border-b-2 border-black font-bold">
            <a>홈HOME</a>
          </li>
          <li>
            <label for="search">
              <input id="search" type="text" class="h-4"/>
            </label>
          </li>
        </ul>
      </div>
      <div>
        <ul class="flex items-center justify-between">
          <li class="min-w-max ml-3 mr-3">튜터등록</li>
          <li class="min-w-max ml-3 mr-3">로그인</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CommonHeader',
});
</script>

<style scoped>

</style>
