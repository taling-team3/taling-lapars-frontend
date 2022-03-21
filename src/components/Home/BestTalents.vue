<template>
  <div class="best-talents grid grid-cols-3 justify-center justify-items-center">
    <TalentDetail/>
    <TalentDetail/>
    <TalentDetail/>
    <TalentDetail/>
    <TalentDetail/>
    <TalentDetail/>
    <TalentDetail/>
    <TalentDetail/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TalentDetail from '@/components/Talent/TalentDetail.vue';

export default defineComponent({
  name: 'HotTrend',
  components: {
    TalentDetail,
  },
});
</script>

<style scoped>

</style>
