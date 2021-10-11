<template>
    <div class="navigation-container">
        <div class="img-container">
            <img src="../../src/assets/logo.png" alt="Logo EduEdu" />
        </div>
        <nav class="navigation">
            <ul>
                <li class="nav-item">
                    <router-link to="/Home/ClassProfile">
                        <img src="../../src/assets/icons/icon_face.png" alt="sas" />
                        Perfil dos Alunos
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/Home/PortugueseProve">
                        <img src="../../src/assets/icons/icon_doc.png" alt="sas" />
                        Prova de Português
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/Home/DigitalActivities">
                        <img src="../../src/assets/icons/icon_test.png" alt="sas" />
                        Atividades Digitais
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/Home/Help">
                        <img src="../../src/assets/icons/icon_help.png" alt="sas" />
                        Ajuda
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/Home/Settings">
                        <img src="../../src/assets/icons/icon_settings.png" alt="sas" />
                        Configurações
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavigationMenu'
};
</script>

<style scoped>
.navigation-container {
    min-width: 350px;
    background-color: #ffff;
    margin-right: 5px;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    min-height: 100vh;
}

.img-container img {
    padding: 68px 0;
    margin: 0 auto;
}

.navigation a {
    width: 93%;
    display: flex;
    align-items: center;
    padding: 15px 0 15px 25px;
    margin-bottom: 15px;
}
.navigation li img {
    padding: 0 15px;
}

.navigation a {
    font-weight: bold;
    font-size: 16px;
    color: #cacaca;
}
nav a.router-link-active {
    background-color: var(--light-blue);
    color: #fff;
}
</style>
