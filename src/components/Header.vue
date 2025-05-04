<template>
  <header :class="$style.header">
    <div :class="$style.left">LOgo</div>
    <div :class="$style.right">
      <div :class="$style.timer">{{ getTime }}</div>
      <div :class="$style.links">
        <div :class="$style.link">Mo-151</div>
        <div :class="$style.link">Mo-151</div>
        <div :class="$style.link">Mo-151</div>
      </div>
      <router-link to="/login">
        <img
          @click.stop="this.$store.commit('stopTimer')"
          src="/icons/common/logout.svg"
          alt=""
          :class="$style.logout"
        />
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    getTime() {
      const mins = String(
        Math.floor(this.$store.state.timer.seconds / 60)
      ).padStart(2, "0");
      const secs = String(this.$store.state.timer.seconds % 60).padStart(
        2,
        "0"
      );
      return `${mins}: ${secs} `;
    },
  },
};
</script>

<style lang="scss" module>
.header {
  height: 3rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  .left {
    font-weight: 800;
    font-size: 1.5rem;
  }
  .right {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    align-items: center;
    justify-items: center;
    gap: 1.5rem;
    @include custom(900) {
      gap: 1rem;
    }
    .timer {
      padding: 0.75rem 1.5rem;
      background-color: $blue;
      color: $t-white;
      border-radius: 1.5rem;
    }
    .links {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1.5rem;
      @include custom(900) {
        gap: 1rem;
      }
      .link {
        cursor: pointer;
        padding: 0.75rem 1.5rem;
        background-color: $bg-white;
        border-radius: 1.5rem;
      }
    }
    .logout {
      cursor: pointer;
    }
  }
}
</style>
