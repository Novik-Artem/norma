<template>
  <CommonModal @onClose="onClose" :title="'Оставьте комментраий'">
    <template #body>
      <div :class="$style.container">
        <div :class="$style.content"></div>
      </div>
    </template>
  </CommonModal>
</template>

<script>
import CommonModal from "@/components/modals/CommonModal.vue";
export default {
  components: {
    CommonModal,
  },
  methods: {
    onClose() {
      this.$store.commit("setIconsModals", {
        modal: "comment",
        value: false,
      });
    },
  },
};
</script>

<style lang="scss" module>
.container {
}
</style>
