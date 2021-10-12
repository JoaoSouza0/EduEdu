<template>
    <div class="input-filters">
        <input type="text" name="searchStudent" v-model="seachStudent" id="searchStudent" placeholder="Pesquisar" />
        <div class="filters-container">
            <label for="">Filtrar por:</label>
            <div>
                <button
                    type="submit"
                    class="left filter"
                    id="left"
                    :class="{ 'btn-dark': active, 'btn-light': desactive }"
                    @click="filterBy('name')"
                >
                    Nome
                </button>
                <button
                    type="submit"
                    id="right"
                    class="right filter"
                    :class="{ 'btn-light': active, 'btn-dark': desactive }"
                    @click="filterBy('year')"
                >
                    Ano
                </button>
            </div>
        </div>
        <router-link to="/Home/CreateStudent" class="btn-dark btn-add-aluno">＋ Adicionar novo aluno</router-link>
    </div>
</template>

<script>
export default {
    name: 'FilterStudents',
    data: () => ({
        seachStudent: '',
        desactive: true,
        active: false
    }),
    watch: {
        seachStudent(nameStudent) {
            this.search(nameStudent);
        }
    },
    computed: {
        router() {
            return { ...this.$route.query };
        }
    },
    methods: {
        async filterBy(value) {
            if (value === 'name') {
                this.desactive = false;
                this.active = true;
            }
            if (value === 'year') {
                this.desactive = true;
                this.active = false;
            }
            if (!(this.$route.query.filter === value))
                await this.$router.push({ query: { ...this.router, filter: value } });
        },
        async search(nameStudent) {
            await this.$router.push({ query: { ...this.router, name: nameStudent } });
        }
    },
    created() {
        this.$router.push({ query: { ...this.router, name:'' } });
    }
};
</script>

<style scoped>
.input-filters {
    padding: 31px 0;
    background-color: #fff;
    width: 1260px;
    margin: 47px auto;
    border: 1px solid #e1e1e1;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.1);
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
.left.filter {
    position: relative;
    left: 15px;
}

.right.filter {
    position: relative;
    right: 15px;
}
</style>
