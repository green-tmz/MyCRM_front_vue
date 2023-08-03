<template>
  <KTMessengerDrawer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KTMessengerDrawer from "@/layouts/main-layout/extras/MessengerDrawer.vue";

export default defineComponent({
  name: "global-drawers",
  components: {
    KTMessengerDrawer,
  },
});
</script>
