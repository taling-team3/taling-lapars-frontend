<template>
  <CommonHeader/>
  <main>
    <SearchFilter/>
    <SearchResultList/>
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import CommonHeader from '@/components/Common/CommonHeader.vue';
import SearchFilter from '@/components/Search/SearchFilter.vue';
import SearchResultList from '@/components/Search/SearchResultList.vue';

export default defineComponent({
  name: 'SearchView.vue',
  components: { SearchResultList, SearchFilter, CommonHeader },
});
</script>

<style scoped>

</style>
