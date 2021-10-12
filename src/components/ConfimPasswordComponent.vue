<template>
    <div>
        <Login-form>
            <div class="inputs-container confirm-password">
                <form action="">
                    <div>
                        <label for="password">Confirma Senha</label>
                        <input
                            v-model="confirmPassword"
                            class="input"
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                        />
                        <img src="../assets/icons/icon_password.svg" alt="" />
                    </div>
                </form>
            </div>
            <slot></slot>
        </Login-form>
    </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
export default {
    name: 'ConfimPasswordComponent',
    components: {
        LoginForm
    },
    computed: {
        confirmPassword: {
            get() {
                return this.$store.state.Login.auth.confirmPassWord;
            },
            set(value) {
                this.$store.commit('Login/UPDATE_AUTH', { confirmPassWord: value });
            }
        }
    }
};
</script>

<style>
.inputs-container {
    padding-top: 30px;
}
.inputs-container div {
    padding: 15px;
    position: relative;
}

.inputs-container label {
    position: absolute;
    left: 30px;
    top: 6px;
    font-size: 12px;
}
.inputs-container input {
    padding: 19px 8px;
    width: 285px;
}

.inputs-container img {
    position: absolute;
    right: 30px;
    top: 32px;
}
</style>
