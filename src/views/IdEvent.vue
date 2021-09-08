<template>
  <div>
    <h1 class="title">
      {{ evenementId.title }}
    </h1>
    <div class="sections ">
      <section class="content">
          <div v-if="evenementId.description" id="editor">
            <article>
              {{ evenementId.description }}
            </article>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  
  created() {
    this.$store.dispatch("evenementId/fetchEventId");
  },

  computed: {
    ...mapState("evenementId", ["evenementId"]),
  },
};
</script>