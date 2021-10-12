<template>
    <LoginComponent>
        <button class="btn-light" type="submit" @click="out">Esqueci Senha</button>
        <button class="btn-light" type="submit" @click="register">Create User</button>
    </LoginComponent>
</template>

<script>
import LoginComponent from '@/components/LoginComponent.vue';

export default {
    components: { LoginComponent },
    name: 'LoginPage',
    component: {
        LoginComponent
    },
    computed: {
        email() {
            return this.$store.state.Login.auth.email;
        },
        password() {
            return this.$store.state.Login.auth.password;
        }
    },
    methods: {
    
    },
    created() {}
};
</script>

<style></style>
