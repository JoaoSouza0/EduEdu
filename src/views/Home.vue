<template>
    <section class="page-container">
        <div class="navigation-container">
            <div class="img-container">
                <img src="../../src/assets/logo.png" alt="Logo EduEdu" />
            </div>
            <nav class="navigation">
                <ul>
                    <li class="nav-item" v-for="({ name }, index) in navItens" :key="index">
                        <router-link to="/Home/ClassProfile">
                            <img src="../../src/assets/icons/icon_doc.png" alt="sas" />
                            {{ name }}
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="router-view-container">
            <router-view></router-view>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            navItens: [
                { name: 'Perfil dos Alunos', iconSrc: '../../src/assets/icons/icon_face.png' },
                { name: 'Prova de Português', iconSrc: '../../src/assets/icons/icon_doc.png' },
                { name: 'Atividades Digitais', iconSrc: '../../src/assets/icons/icon_test.png' },
                { name: 'Ajuda', iconSrc: '../../src/assets/icons/icon_help.png' },
                { name: 'Configurações', iconSrc: '../../src/assets/icons/icon_.settings.png' }
            ]
        };
    }
};
</script>

<style scoped>
.page-container {
    display: flex;
}

.navigation-container {
    width: 550px;
    background-color: #ffff;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    height: 100vh;
    display: flex;
    flex-direction: column;
}

.img-container img {
    padding: 68px 0;
    margin: 0 auto;
}

.navigation a {
    width: 91%;
    display: flex;
    align-items: center;
    padding: 29px 0 29px 51px;
    margin-bottom: 30px;
}
.navigation li img {
    padding: 0 30px;
}

.navigation a {
    font-weight: bold;
    font-size: 20px;
    color: #cacaca;
}
nav a.router-link-exact-active {
    background-color: var(--light-blue);
    color: #fff;
}
.router-view-container {
    width: 100%;
}
</style>
