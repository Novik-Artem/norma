<template>
  <div :class="$style.container">
    <div :class="$style.form">
      <div :class="$style.logo">LOgo</div>
      <input :class="$style.input" type="text" placeholder="Логин" />
      <input :class="$style.input" type="text" placeholder="Пароль" />
      <div :class="$style.button">Войти</div>
    </div>
  </div>
</template>

<style lang="scss" module>
.container {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
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
