<template>
    <AlgoModal class="login_modal" title="Zaloguj się">
        <form class="login_modal__form" @submit.prevent="login()">
            <label for="username-input">Nazwa użytkownika</label>
            <input
                type="text"
                v-model="username"
                id="username-input"
                class="full-size"
                placeholder="Nazwa użytkownika"
            />
            <label for="password-input">Hasło</label>
            <input type="password" v-model="password" id="password-input" class="full-size" placeholder="Hasło" />
        </form>

        <hr />

        <div class="login_modal__third_party_services">
            <GoogleButton @click="loginWithGoogle()" />
        </div>

        <template #buttons>
            <AlgoButton type="ok" @click="login()">Zaloguj się</AlgoButton>
        </template>
    </AlgoModal>
</template>

<script>
import AlgoModal from "@/components/global/AlgoModal.vue";
import AlgoButton from "@/components/global/AlgoButton.vue";
import GoogleButton from "@/components/modals/menu/LoginButtons/GoogleButton.vue";

export default {
    data() {
        return {
            username: "",
            password: "",
        };
    },

    methods: {
        login() {},

        loginWithGoogle() {},
    },

    components: { GoogleButton, AlgoButton, AlgoModal },
};
</script>

<style scoped>
.dialog {
    width: 25rem;
}

.dialog-content {
    overflow: visible !important;
}

hr {
    margin-bottom: 1rem;
    border-color: #f1f1f1;
}

input[type="text"],
input[type="password"] {
    height: 2rem;
    margin-bottom: 1rem;
}

div.login_modal__third_party_services {
    margin: 0 0.2rem;
    padding-bottom: 1rem;
}
</style>
