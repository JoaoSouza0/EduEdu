<template>
    <section>
        <div class="login-container-component">
            <img src="../assets/logo.png" alt="EduEdu Logo" />
            <div class="inputs-container">
                <form action="">
                    <div>
                        <label for="email">Email</label>
                        <input
                            v-model="email"
                            type="text"
                            :class="{ 'warning-active': valid }"
                            name="email"
                            id="email"
                        />
                        <img src="../assets/icons/icon_email.png" alt="" />
                    </div>
                    <div>
                        <label for="password">Senha</label>
                        <input
                            v-model="password"
                            type="password"
                            :class="{ 'warning-active': valid }"
                            name="password"
                            id="password"
                        />
                        <img src="../assets/icons/icon_password.svg" alt="" />
                    </div>
                </form>
            </div>
            <div>
                <slot></slot>
            </div>
        </div>
        <div class="directive-container"></div>
    </section>
</template>

<script>
export default {
    name: 'LoginComponent',
    computed: {
        email: {
            get() {
                return this.$store.state.Login.auth.email;
            },
            set(value) {
                this.$store.commit('Login/UPDATE_AUTH', { email: value });
            }
        },
        password: {
            get() {
                return this.$store.state.Login.auth.password;
            },
            set(value) {
                this.$store.commit('Login/UPDATE_AUTH', { password: value });
            }
        },
        valid() {
            return !this.$store.state.Login.valid;
        }
    }
};
</script>

<style scoped>
.login-container-component {
    width: 370px;
    height: 520px;

    background: #ffffff;
    border: 1px solid #e1e1e1;
    box-shadow: 0px 4px 0px #e3e3e3;
    border-radius: 25px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.inputs-container div {
    padding: 15px;
    position: relative;
}
.login-container-component > img {
    width: 190px;
    padding-top: 12px;
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
.warning-active {
    border: 1px solid red;
}
</style>
