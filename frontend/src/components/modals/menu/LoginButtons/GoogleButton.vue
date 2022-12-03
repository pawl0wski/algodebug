<template>
  <div class="google-login-button">
    <img class="google-login-button__logo" src="./google-logo.svg" alt="Google logo">
    <span class="google-login-button__text">Zaloguj z Google</span>
  </div>
</template>

<script>

</script>

<style>
div.google-login-button{
  display: flex;
  align-items: center;
  padding: 0 0.5rem;

  width: 100%;
  height: 45px;
  box-shadow: 0 0 6px 3px rgba(213, 213, 213, 0.73);

  cursor: pointer;
  user-select: none;
}

div.google-login-button:hover  {
  background-color: #f4f4f4;
}

img.google-login-button__logo{
  margin-right: 1.5rem;
}

span.google-login-button__text{
  font-size: medium;
}
</style>
