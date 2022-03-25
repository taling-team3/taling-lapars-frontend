<template>
  <div class="w-full flex flex-col items-center justify-center">
    <div
      class="grid grid-cols-3 grid-rows-3 w-[800px] h-[1250px] justify-items-center items-center">
      <div v-for="item in list[currentPage]" :key="item">
        <TalentCardItem
        :no="item.no"
        :thumbUrl="item.thumbUrl"
        :badge="item.badge"
        :talentTitle="item.talentTitle"
        :category="item.category"
        :tutor="item.tutor"
        :price="item.price"
        :classDetail="item.classDetail"
        :userCount="item.userCount"
        />
      </div>
    </div>
    <div class="flex justify-center items-center">
      <ul class="h-[200px] flex justify-center items-center">
        <li>
          <button class="PaginationButton" @click="setPreviousPage">Prev</button>
        </li>
        <li v-for="index in maxPageCount" :key="index" class="flex justify-center">
          <button
            :class="{'PaginationButton': !isCurrentPage(index),
            'PaginationButtonSelected': isCurrentPage(index)}"
            @click="setCurrentPage(index - 1)">
            {{ index }}
          </button>
        </li>
        <li>
          <button class="PaginationButton" @click="setNextPage">Next</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TalentCardItem from '@/components/Talent/TalentCardItem.vue';

export default defineComponent({
  name: 'SearchResultList',
  components: { TalentCardItem },
  data() {
    return {
      maxPageCount: 10,
      currentPage: 0,
      items: [
        [{}, {}, {}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}],
      ],
      list: [
        [{
          no: 1,
          thumbUrl:
            'https://img.taling.me/Content/Uploads/Images/2ba2306733b73146631a9ec853a56c22463d0bfa.png',
          badge: '오리지널',
          talentTitle: '실무에 진짜 필요한\n엑셀 노하우',
          category: '엑셀',
          tutor: '쏘피',
          price: 119000,
          classDetail: '(총 8시간 3분)',
          userCount: 9373,
        },
        {
          no: 2,
          thumbUrl:
            'https://img.taling.me/Content/Uploads/Images/2ba2306733b73146631a9ec853a56c22463d0bfa.png',
          badge: '오리지널',
          talentTitle: '실무에 진짜 필요한\n엑셀 노하우',
          category: '엑셀',
          tutor: '쏘피',
          price: 119000,
          classDetail: '(총 8시간 3분)',
          userCount: 9373,
        },
        {
          no: 3,
          thumbUrl:
            'https://img.taling.me/Content/Uploads/Images/2ba2306733b73146631a9ec853a56c22463d0bfa.png',
          badge: 'vod',
          talentTitle: '실무에 진짜 필요한\n엑셀 노하우',
          category: '엑셀',
          tutor: '쏘피',
          price: 120000,
          classDetail: '(총 8시간 3분)',
          userCount: 9373,
        },
        {
          no: 4,
          thumbUrl:
            'https://img.taling.me/Content/Uploads/Images/2ba2306733b73146631a9ec853a56c22463d0bfa.png',
          badge: 'vod',
          talentTitle: '실무에 진짜 필요한\n엑셀 노하우',
          category: '엑셀',
          tutor: '쏘피',
          price: 120000,
          classDetail: '(총 8시간 3분)',
          userCount: 9373,
        }],
      ],
    };
  },
  methods: {
    setCurrentPage(page: number) {
      this.currentPage = page;
    },
    setPreviousPage() {
      if (this.currentPage > 0) {
        this.currentPage -= 1;
      }
    },
    setNextPage() {
      if (this.currentPage < this.items.length - 1) {
        this.currentPage += 1;
      }
    },
    isCurrentPage(index: number) {
      return index - 1 === this.currentPage;
    },
  },
  mounted() {
    if (this.items.length < 10) {
      this.maxPageCount = this.items.length;
    } else {
      this.maxPageCount = 10;
    }
  },
});
</script>

<style scoped>
.PaginationButton {
  @apply w-[50px] h-[50px] border-[1px] border-gray-200 text-xl text-blue-500
  hover:bg-gray-100 hover:border-2 hover:border-blue-300
}

.PaginationButtonSelected {
  @apply w-[50px] h-[50px] border-4 border-blue-300 bg-gray-100 text-xl text-blue-500
}
</style>
