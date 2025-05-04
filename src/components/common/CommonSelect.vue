<template>
  <div
    @mouseover="isOpenHints = true"
    @mouseleave="isOpenHints = false"
    :class="$style.container"
  >
    <div :class="$style.top">
      <div :class="[$style.title, { [$style.active]: title }]">
        <img v-if="icons" :src="icon" alt="" />
        {{ title ? title : placeholder }}
      </div>
      <div :class="$style.arrow">
        <img v-if="!title" src="/icons/common/arrow-down-black.svg" alt="" />
        <img
          @click="resetHint"
          v-else
          src="/icons/common/cross-black.svg"
          alt=""
        />
      </div>
    </div>
    <div v-if="isOpenHints && hints?.length" :class="$style.hints">
      <div v-for="hint in hints" @click="setHint(hint)" :key="hint.slug">
        <div :class="$style.hint">{{ hint.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icons: String,
    placeholder: String,
    hints: Array,
    value: String,
  },
  data() {
    return {
      isOpenHints: false,
      title: "",
    };
  },
  mounted() {
    if (this.value) {
      this.title = this.value;
    }
  },
  methods: {
    setHint(hint) {
      this.title = hint.title;
      this.$emit("setHint", hint.slug);
      this.isOpenHints = false;
    },
    resetHint() {
      this.title = "";
      this.$emit("setHint", null);
      this.isOpenHints = false;
    },
  },
};
</script>

<style lang="scss" module>
.container {
  position: relative;
  background-color: $t-white;
  border-radius: 0.25rem;
  margin: 0 0 1rem 0;
  min-width: 20rem;
  .top {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    .title {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: $black;
      padding: 0.75rem 1rem;
      white-space: nowrap;
      font-weight: 400;
    }
    .arrow {
      width: 3rem;
      height: 3rem;
      flex: 0 0 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .hints {
    background-color: $t-white;
    position: absolute;
    top: 3rem;
    left: 0;
    width: 100%;
    z-index: 2;
    border-radius: 0 0 0.25rem 0.25rem;
    border-bottom: none;
    border: 1px solid $background;

    color: $black;
    .hint {
      padding: 0.75rem;
      color: $black;
      font-size: 0.875rem;
      font-weight: 400;
      cursor: pointer;
      border: 1px solid $background;
    }
  }
}
</style>
