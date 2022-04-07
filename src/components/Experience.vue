<template>
  <Title :text="experienceLabel" />
  <section v-for="(experience, index) in experiences" :key="index">
    <section>
      <SubTitle :text="experience.workPosition" />
    </section>
    <SubTitle :text="experience.workPeriod" />

    <Headline :text="experience.companyName" />
    <Paragraph :text="experience.description" />
  </section>
</template>

<script>
import Title from "@/components/Title.vue";
import SubTitle from "@/components/SubTitle.vue";
import Headline from "@/components/Headline.vue";
import Paragraph from "@/components/Paragraph.vue";

export default {
  Name: "Experience",

  components: { Title, SubTitle, Headline, Paragraph },

  computed: {
    currentLanguage() {
      return this.$store.state.currentLanguage;
    },

    experienceLabel() {
      return this.currentLanguage.resumeLabels.experience;
    },

    experiences() {
      return this.currentLanguage.data.experience;
    },
  },
};
</script>
