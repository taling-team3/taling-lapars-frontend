<template>
  <section class="TalentDescription">
    <div class="TalentDescriptionTitle">
      <slot name="title"/>
    </div>
    <article class="TalentDescriptionArticle">
      <slot name="description"/>
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TalentDetailDescription',
});
</script>
<style scoped>
.TalentDescription {
  @apply flex justify-around mb-16
}

.TalentDescriptionTitle {
  @apply w-1/3 font-bold text-3xl
}

.TalentDescriptionArticle {
  @apply w-2/3
}
</style>
