<template>
    <LoginComponent>
        <button class="btn-light" type="submit" >Esqueci Senha</button>
        <button class="btn-light" type="submit" @click="register">Create User</button>
    </LoginComponent>
</template>

<script>
import LoginComponent from '@/components/LoginComponent.vue';
import { loginApi } from '../firebase/Login-Service';

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
        register() {
            if (this.email && this.password) {
                loginApi.createUser(this.email, this.password);
            }
        }
    },
    created() {}
};
</script>

<style></style>
