<template>
    <section class="login-container">
        <LoginForm class="buttons-container" v-if="modal == false">
            <div class="btn-container">
                <div>
                    <button class="login-btn  btn-dark" type="submit" @click="login">Login</button>
                </div>
                <div class="slot-container">
                    <button class="login-btn  btn-light" type="submit" @click="openModal">Create User</button>
                </div>
            </div>
        </LoginForm>

        <div class="create-update-modal" v-if="modal == true">
            <button class="back-button" @click="openModal">⬅</button>
            <ConfirmPasswordComponent>
                <div class="btn-container-confirm">
                    <button class="login-btn  btn-light" type="submit" @click="register">
                        Confirmar Cadastro
                    </button>
                </div>
            </ConfirmPasswordComponent>
        </div>
    </section>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import ConfirmPasswordComponent from '@/components/ConfimPasswordComponent.vue';
import { loginApi } from '../firebase/Login-Service';

export default {
    name: 'LoginPage',
    data() {
        return {
            modal: false,
        };
    },
    components: { LoginForm, ConfirmPasswordComponent },
    computed: {
        email() {
            return this.$store.state.Login.auth.email;
        },
        password() {
            return this.$store.state.Login.auth.password;
        },
        confirmPassWord() {
            return this.$store.state.Login.auth.confirmPassWord;
        }
    },
    methods: {
        openModal() {
            this.modal = !this.modal;
        },

        register() {
            if (this.email && this.password === this.confirmPassWord) {
                this.openModal();
                this.$store.commit('Login/CLEAR_PROPS');
                loginApi.createUser(this.email, this.password);
            }
            else{
                this.warning = true
            }
        },
        async login() {
            if (this.email && this.password) {
                const result = await loginApi.signIn(this.email, this.password); //true = usercrenital
                if (result.user) {
                    this.$router.push({ name: 'ClassProfile' });
                } else {
                    console.log(result);
                }
            }
        }
    }
};
</script>

<style>
.login-container {
    height: 100vh;
    background: url('../../src/assets/login_bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
}
.create-update-modal {
    position: relative;
}
.back-button {
    position: absolute;
    background-color: transparent;
    top: 10px;
    left: 10px;
    border-radius: 5px;
    border: 1px solid #eeee;
    color: var(--light-blue);
}
.back-button:hover {
    background-color: var(--light-blue);
    color: #ffff;
}

.btn-container,
.btn-container-confirm {
    padding-top: 6px;
    display: flex;
    flex-direction: column;
}

.btn-container-confirm {
    align-items: center;
}

.login-btn {
    margin-bottom: 20px;
    display: block;
    width: 300px;
    font-size: 14px;
    padding: 17px 5px;
    cursor: pointer;
}
.slot-container {
    display: flex;
    justify-content: space-between;
}
.inputs-container.confirm-password {
    padding-top: 0;
}
.input {
    padding-left: 10px;
}
</style>
