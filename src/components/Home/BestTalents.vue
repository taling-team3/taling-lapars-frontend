<template>
  <div class="best-talents grid grid-cols-3 justify-center justify-items-center">
    <TalentCardItem/>
    <TalentCardItem/>
    <TalentCardItem/>
    <TalentCardItem/>
    <TalentCardItem/>
    <TalentCardItem/>
    <TalentCardItem/>
    <TalentCardItem/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TalentCardItem from '@/components/Talent/TalentCardItem.vue';

export default defineComponent({
  name: 'HotTrend',
  components: {
    TalentCardItem,
  },
});
</script>

<style scoped>

</style>
