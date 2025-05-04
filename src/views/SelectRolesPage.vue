<template>
  <div :class="$style.container">
    <div :class="$style.form">
      <div :class="$style.logo">LOgo</div>
      <CommonSelect
        placeholder="Выбор организации"
        :hints="[{ title: 'Организация 1' }, { title: 'Организация 2' }]"
      />
      <CommonSelect
        placeholder="Выбор работника"
        :hints="[{ title: 'Работник 1' }, { title: 'Работник 2' }]"
      />
      <div :class="$style.button">Начать обследование</div>
    </div>
  </div>
</template>

<script>
import CommonSelect from "@/components/common/CommonSelect.vue";
export default {
  components: {
    CommonSelect,
  },
};
</script>

<style lang="scss" module>
.container {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: $background;
  .form {
    max-width: 320px;

    .logo {
      font-weight: 700;
      font-size: 1.5rem;
      text-align: center;
      margin: 0 0 1.5rem 0;
    }
    .input {
      font-weight: 400;
      font-size: 1rem;
      width: 100%;
      padding: 1rem;
      outline: 0;
      border: none;
      border-radius: 0.5rem;
      margin: 0 0 1rem 0;
      &:last-child {
        margin: 0 0 1.5rem 0;
      }
      &::placeholder {
        color: $t-secondary;
        font-size: 0.875rem;
      }
    }
    .button {
      font-weight: 700;
      background-color: $black;
      padding: 0.75rem;
      text-align: center;
      color: $t-white;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  }
}
</style>
