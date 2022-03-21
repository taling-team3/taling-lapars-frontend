<template>
  <CommonHeader/>
  <div class="relative w-full">
    <main class="flex justify-center w-full mt-8 mb-48">
      <TalentDetailContent/>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CommonHeader from '@/components/Common/CommonHeader.vue';
import TalentDetailContent from '@/components/Talent/TalentDetailContent.vue';

export default defineComponent({
  name: 'TalentDetailView',
  components: {
    TalentDetailContent,
    CommonHeader,
  },
});
</script>

<style scoped>

</style>
