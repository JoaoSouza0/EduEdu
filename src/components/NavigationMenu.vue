<template>
    <div class="navigation-container">
        <div class="img-container">
            <img src="../../src/assets/logo.png" alt="Logo EduEdu" />
        </div>
        <nav class="navigation">
            <ul>
                <li class="nav-item">
                    <router-link :to="{ name: 'ClassProfile', query: { filter: 'year', name: ' ' } }">
                        <img src="../../src/assets/icons/icon_face.png" alt="" />
                        Perfil dos Alunos
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/Home/PortugueseProve">
                        <img src="../../src/assets/icons/icon_doc.png" alt="" />
                        Prova de Português
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/Home/DigitalActivities">
                        <img src="../../src/assets/icons/icon_test.png" alt="" />
                        Atividades Digitais
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/Home/Help">
                        <img src="../../src/assets/icons/icon_help.png" alt="" />
                        Ajuda
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/Home/Settings">
                        <img src="../../src/assets/icons/icon_settings.png" alt="" />
                        Configurações
                    </router-link>
                </li>
                <li class="nav-item">
                    <button class="btn-dark" @click="out">
                        Deslogar
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import { loginApi } from '../firebase/Login-Service';
export default {
    name: 'NavigationMenu',
    methods: {
        async out() {
            const result = await loginApi.signOut();
            if (result === true) {
                this.$router.push({ path: '/' });
            } else {
                console.log(result);
            }
        }
    }
};
</script>

<style scoped>
.navigation-container {
    min-width: 350px;
    background-color: #ffff;
    margin-right: 50px;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    min-height: 100vh;
}

.img-container img {
    padding: 68px 0;
    margin: 0 auto;
}

.navigation a,
.navigation button {
    width: 93%;
    display: flex;
    align-items: center;
    padding: 15px 0 15px 25px;
    margin-bottom: 15px;
    font-weight: bold;
    font-size: 16px;
    color: #cacaca;
}
.navigation .nav-item img {
    padding: 0 15px;
}

.navigation button {
    width: 100%;
    border-radius: 0;
    color: white;
}
.navigation button:hover {
    color: var(--light-blue);
}
nav a.router-link-active {
    background-color: var(--light-blue);
    color: #fff;
}
</style>
