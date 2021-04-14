<template>
  <div id="content">
    <Section padding="none">
      <TextWithDescription
        alignment="center"
        badge="pages.dpa.title"
        title="pages.dpa.description"
        padding="topOnly"
      />
    </Section>
    <Section style="padding-bottom: 4rem">
      <DPAForm />
    </Section>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import Section from "@/blocks/Section";
import TextWithDescription from "@/blocks/TextWithDescription";
import DPAForm from "@/forms/DPA";

export default Vue.extend({
  components: {
    Section,
    TextWithDescription,
    DPAForm
  }
});
</script>