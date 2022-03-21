<template>
  <div>
    <section>
      <ul class="w-[200px] flex justify-between mb-2 text-rose-500 font-bold">
        <li class="inline">다회차</li>
        <li class="inline">온라인 LIVE</li>
        <li class="inline">최대 10명</li>
      </ul>
      <p class="w-[750px] mb-4 text-3xl font-bold">우리는 밥의 민족! 야밤에 영어로 먹부심 부리기</p>
      <div class="flex mb-4">
        <img :src="tutorPhotoUrl" alt="tutorPhoto"
             class="h-[50px] w-[50px] mr-4 rounded-3xl"/>
        <div>
          <p>서원 튜터</p>
          <img :src="starImgUrl" alt="star" class="inline h-[13px] w-[14px]"/>
          <span>(0)</span>
        </div>
      </div>
    </section>
    <div class="ImageSlide">
      <img src="https://img.taling.me/Content/Uploads/Cover/6a1b476e8e2a220fe04a4aa3aeb24b7816c7ad3d.png"
           alt="slide"
           class="h-[442px] w-[653px]"/>
    </div>
    <TalentDetailDescription>
      <template v-slot:title>
        <p>클래스 요약</p>
      </template>
      <template v-slot:description>
        <p>🍦 '반민초파 vs 민초파' 여러분의 선택, 영어로 당장 생각할 수 있나요?</p>
        <p>If not, 저랑 같이 매일 맛있는 주제로 재밌게 영어일기 써 봐요.</p>
        <p>밤 10시🕙! 야식이 생각나는 시간 쩝쩝박사를 위해 준비했어요.</p>
        <p>하루 5줄, JMTGR 영어 공부! GABOZAGO</p>
        <p>* 2주 동안 일기를 쓰면 클래스 가격의 반값, 20000을 포인트로 돌려드립니다!</p>
      </template>
    </TalentDetailDescription>
    <TalentDetailDescription>
      <template v-slot:title>
        <p>이런 분들이</p>
        <p>들으면 좋아요</p>
      </template>
      <template v-slot:description>
        <p>1. 영어를 매일 공부하는 습관을 만들고 싶으신 분들</p>
        <p>2. 혼자 공부하면 작심삼일로 끝나는 분들</p>
        <p>3. 영어권 국가에서 공부하는 강사의 꼼꼼한 피드백을 받으며 영어와 쉽게 친해지고 싶으신 분들</p>
        <p>4. 계속 미루던 영어공부를 부담없이 즐겁게 시작해보고 싶으신 분들</p>
        <p>5. 나만 쓰는 콩글리쉬 표현말고 영어를 모국어로 쓰는 사람들이 "진짜 일상생활에서 사용하는 표현들"을 배우고 싶으신 분들</p>
      </template>
    </TalentDetailDescription>
    <TalentDetailDescription>
      <template v-slot:title>
        <p>튜터님을</p>
        <p>소개합니다.</p>
      </template>
      <template v-slot:description>
        <div class="mb-4">
          <img
              :src="tutorPhotoUrl"
              alt="tutorPhoto"
              class="inline h-[50px] w-[50px] mr-4 rounded-3xl"/>
          <span>서원</span>
        </div>
        <p>✔국제 대안학교 졸업</p>
        <p>✔캐나다, Capilano University 음악심리 치료 전공 재학 중</p>
        <p>안녕하세요, 여러분들의 영어일기쓰기 챌린지 를 함께 이끌어 가게 될 서쌤 입니다!</p>
        <p>저는 몇년 전 국제고등학교를 졸업한 후 지금 캐나다 대학교에 재학 중 입니다.</p>
        <p>현재 영어권 대학에서 공부하고 있는 학생으로서 처음 영어 작문을 시작했을 때의 고충을 누구보다 잘 알고,</p>
        <p>나의 한국식 영어 글쓰기에는 어떤 문제가 있었는지 잘 알고 기억하고 있습니다.</p>
        <p>영어를 배우려고 노력해보지만 쉽게 실력이 늘지 않는 많은 분들! </p>
        <p>제가 유학생의 입장에서 더욱 친근하게 다가가서 제가 지금까지 배우고 알게된 모든 것들을 동원하여 여러분의 영어 일기 쓰기를</p>
        <p>도와드리겠습니다!</p>
      </template>
    </TalentDetailDescription>
    <TalentDetailDescription>
      <template v-slot:title>
        <p>어떤 클래스</p>
        <p>인가요?</p>
      </template>
      <template v-slot:description>
        <img src="https://img.taling.me/Content/Uploads/Curri/f75ebab36c68476075039350086b006c76012fd7.png"
             alt="article"
             class="h-[439px] w-[613px] mb-8"/>
        "나는 킹 받는 일이 있을 때 떡볶이를 먹는다" 영어로 말하면?
      </template>
    </TalentDetailDescription>
    <TalentDetailDescription>
      <template v-slot:title>
        <p>클래스</p>
        <p>유의사항</p>
      </template>
      <template v-slot:description>
        📌 탈잉 LIVE & SPACE 사용방법 자세히 보기: https://url.kr/fldacg
        <br>
        <br>
        ✅ 환급 대상
        <br>
        <br>
        2주 동안 정해진 시간에 입장하여 최소 5줄- 최대 8줄을 작성하여 제출한 챌린저
        <br>
        <br>
        ✅ 매일밤 10시 부터 50분간 오픈되어 있으며 10:50분 후에는 입장이 불가하며 10:50분 이후 숙제 제출은 인정되지 않습니다.
        <br>
        <br>
        ✅ 스페이스 입장은 클래스 입장이 닫힌 후에도 언제든지 가능합니다.
        <br>
        <br>
        수강 목록 -> Live&오프라인 -> 스페이스 입장 Beta
        <br>
        <br>
        ✅ 다음 날 밤 10시 전까지 피드백을 해 드립니다. 클래스 채팅 스페이스 질문 모아보기를 통해 자신의 일기 피드백 답변을 확인할 수 있습니다.
        <br>
        <br>
        수강 목록 -> Live&오프라인 -> 스페이스 입장 Beta
      </template>
    </TalentDetailDescription>
    <TalentDetailDescription>
      <template v-slot:title>
        <p>클래스는</p>
        <p>이렇게</p>
        <p>진행됩니다.</p>
      </template>
      <template v-slot:description>
        1회차 커리큘럼
        <br><br>
        ✔ 반민초파/민초파, 딱복파/물복파<br>
        📣 챌린지 방법<br>
        1. 온라인 라이브로 정해진 시간에 입장하기<br>
        수강 목록 -> Live&오프라인 -> 탈잉 Live 입장<br><br>

        2. 그날의 주제와 PPT로 제공된 관련된 표현들을 보고 나만의 영어 일기 쓰기<br>
        카메라는 꺼도 돼요. 눈치 보지 않고 일기 쓰는 거에만 집중~!<br><br>

        3. 영어 일기를 다 쓰면 채팅 하단에 '?'(질문 버튼)을 누르고 내가 쓴 영어 일기를 공유하기<br>
      </template>
    </TalentDetailDescription>
    <TalentDetailReview/>
    <TalentDetailRecommend/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TalentDetailDescription from '@/components/Talent/TalentDetailDescription.vue';
import TalentDetailReview from '@/components/Talent/TalentDetailReview.vue';
import TalentDetailRecommend from '@/components/Talent/TalentDetailRecommend.vue';

export default defineComponent({
  name: 'TalentDetail',
  components: {
    TalentDetailRecommend,
    TalentDetailReview,
    TalentDetailDescription,
  },
  data() {
    return {
      tutorPhotoUrl: 'https://s3.ap-northeast-2.amazonaws.com/taling.me/Content/Uploads/Profile/s_d2955750a282574c917d16c23fad8e8850e4c01f.jpeg',
      starImgUrl: 'https://front-img.taling.me/Content/Images/class/icon_star_new.png',
    };
  },
});
</script>

<style scoped>
.ImageSlide {
  @apply mb-16
}
</style>
