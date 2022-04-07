<template>
  <Title :text="skillsLabel"/>
  <SubTitle :text="professionalLabel"/>

  <ul class="skill-line" v-for="(skill, index) in skills" :key="index">
    <li>
      <Paragraph class="contact" :text="skill"/>
    </li>

  </ul>
</template>

<script>
import Title from "@/components/Title.vue";
import SubTitle from "@/components/SubTitle.vue";
import Paragraph from "@/components/Paragraph.vue";

export default {
  Name: "Skills",

  components: {Title, SubTitle, Paragraph},

  computed: {
    currentLanguage() {
      return this.$store.state.currentLanguage;
    },

    resumeLabels() {
      return this.currentLanguage.resumeLabels;
    },

    skillsLabel() {
      return this.resumeLabels.skills;
    },

    professionalLabel() {
      return this.resumeLabels.professional;
    },

    skills() {
      return this.currentLanguage.data.skills;
    }
  }
};
</script>

<style scoped>

.skill-line {
  display: flex;
}

.contact {
  padding-left: calc(1em + 8px);
  margin: 0.25em;
}
</style>
