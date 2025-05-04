<template>
  <div :class="$style.popup">
    <div :class="$style.overlay" @click="close"></div>
    <div :class="$style.content" @click.stop>
      <div :class="$style.top">
        <div>{{ title }}</div>
        <div v-if="closable" :class="$style.close" @click.stop="close">
          <img src="/icons/common/cross-black.svg" alt="" />
        </div>
      </div>

      <div :class="$style.body">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    closable: {
      type: Boolean,
      default: true,
    },
    title: String,
  },
  methods: {
    close() {
      if (this.closable) {
        this.$emit("onClose");
      }
    },
  },
};
</script>

<style lang="scss" module>
@keyframes expand {
  from {
    transform: scale(0.7);
    opacity: 0;
    background: $background;
  }
}
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 70;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(1.25rem);
    transition: opacity 0.3ms;
    z-index: 70;
    animation: expand 0.2s ease-in-out;
  }
  .content {
    position: fixed;
    left: 50%;
    top: 50%;
    max-height: calc(100vh - 4rem);
    overflow: auto;
    @include scrollbarY;
    transform: translate(-50%, -50%);
    background-color: $bg-white;
    border-radius: 0.5rem;
    z-index: 70;
    animation: expand 0.2s ease-in-out;
    min-width: 37.5rem;
    .top {
      padding: 1.5rem;
      text-align: center;
      font-size: 2rem;
      display: flex;
      justify-content: space-between;
      .close {
        cursor: pointer;
      }
    }
  }
}
</style>
