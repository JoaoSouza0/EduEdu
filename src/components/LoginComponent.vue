<template>
    <section class="login-container">
        <div class="login-container-component">
            <img src="../assets/logo.png" alt="EduEdu Logo" />
            <div class="inputs-container">
                <form action="">
                    <div>
                        <label for="email">Email</label>
                        <input type="text" name="email" id="email" />
                        <img src="../assets/icons/icon_email.png" alt="" />
                    </div>
                    <div>
                        <label for="password">Senha</label>
                        <input type="password" name="password" id="password" />
                        <img src="../assets/icons/icon_password.svg" alt="" />
                    </div>
                </form>
            </div>
            <div class="btn-container">
                <button class="btn-dark" type="submit">Login</button>
                <button class="btn-light" type="submit">Esqueci Senha</button>
            </div>
        </div>
        <div class="directive-container"></div>
    </section>
</template>

<script>
export default {
    name: 'LoginComponent'
};
</script>

<style scoped>
.login-container {
    height: 100vh;
    background: url('../../src/assets/login_bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
}
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
.inputs-container {
    padding-top: 30px;
    padding-bottom: 16px;
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
.btn-container {
    padding-top: 6px;
}

.btn-container button {
    margin-bottom: 20px;
    display: block;
    width: 300px;
    font-size: 14px;
    padding: 17px 5px;
    cursor: pointer;
}
</style>
