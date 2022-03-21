<template>
  <router-view/>
  <CommonFooter/>
</template>

<style></style>
<script lang="ts">
import CommonFooter from '@/components/Common/CommonFooter.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { CommonFooter },
});
</script>
