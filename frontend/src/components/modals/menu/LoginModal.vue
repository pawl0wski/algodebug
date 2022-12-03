<template>
  <AlgoModal title="Zaloguj się">
    <form @submit.prevent="login">
      <label for="username-form">Nazwa użytkownika</label>
      <input type="text" v-model="username" id="username-input" class="full-size" placeholder="Nazwa użytkownika"/>
      <label for="password-form">Hasło</label>
      <input type="password" v-model="password" id="password-input" class="full-size" placeholder="Hasło"/>
    </form>
    <template #buttons>
      <AlgoButton type="ok" @click="login">Zaloguj się</AlgoButton>
    </template>
  </AlgoModal>
</template>

<script>
import AlgoModal from "@/components/global/AlgoModal.vue";
import AlgoButton from "@/components/global/AlgoButton";

export default {
  data() {
    return {
      username: "",
      password: ""
    }
  },

  methods: {
    login() {
    }
  },

  components: {AlgoButton, AlgoModal},
};
</script>

<style scoped>
.dialog {
  width: 25rem;
}

input {
  margin-bottom: 1rem;
}

input[type="text"], input[type="password"] {
  height: 2rem;
}
</style>
