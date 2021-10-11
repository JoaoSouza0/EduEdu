<template>
    <section>
        <div class="input-filters">
            <input type="text" name="" id="" placeholder="Pesquisar" />
            <div class="filters-container">
                <label for="">Filtrar por:</label>
                <div>
                    <button type="submit" class="btn-light filter">Nome</button>
                    <button type="submit" class="btn-dark filter">Ano</button>
                </div>
            </div>
            <router-link to="/Home/CreateClass" class="btn-dark btn-add-aluno">＋ Adicionar novo aluno</router-link>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ClassProfile'
};
</script>

<style scoped>
.input-filters {
    padding: 31px 0;
    background-color: #fff;
    width: 1258px;
    margin: 47px auto;
    border: 1px solid #e1e1e1;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.1) ;
    box-sizing: border-box;
    border-radius: 25px;
    display: flex;
    justify-content: space-around;
}

.input-filters input {
    width: 310px;
    padding: 13px 10px;
    border: 1px solid #c3c3c3;
    border-radius: 10px;
}
.btn-add-aluno {
    width: 330px;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    line-height: 2;
}

.filters-container {
    position: relative;
    align-self: flex-end;
}

.filters-container label {
    position: absolute;
    font-weight: 600;
    font-size: 14px;
    background-color: transparent;
    top: -20px;
    left: 8px;
}

.filter {
    border: 1px solid #e1e1e1;
    width: 160px;
    padding: 8px 0;
    box-shadow: none;
}
.btn-light.filter {
    position: relative;
    left: 15px;
}

.btn-dark.filter {
    position: relative;
    right: 15px;
}
</style>
