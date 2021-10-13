<template>
    <div class="pagination">
        <div class="pagination-itens">
            <button class="btn-light btn" v-if="paginationUpCondition" @click="paginationDown">
                ⬆
            </button>
            <p>{{ currentPage }}</p>
            <button class="btn-dark btn" v-if="paginationDownCondition" @click="paginationUp">
                ⬇
            </button>
            <p>{{ lastPage }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PagePagination',
    props: ['Paginate', 'paginationStart', 'itensInPage', 'numberOfItens','itensTotal'],
    computed: {
        paginationCondition() {
            return this.numberOfItens > this.itensInPage;
        },
        paginationDownCondition() {
            return this.paginationStart + this.itensInPage <= this.numberOfItens;
        },
        paginationUpCondition() {
            return this.paginationStart > 0;
        },
        lastPage() {
            return Math.round(this.itensTotal / this.itensInPage);
        },
        currentPage() {
            return this.paginationStart / this.itensInPage;
        }
    },
    methods: {
        paginationDown() {
            this.$emit('paginate', this.paginationStart - this.itensInPage);
        },
        paginationUp() {
            this.$emit('paginate', this.paginationStart + this.itensInPage);
        }
    }
};
</script>
<style scoped>
.pagination-itens {
    display: flex;
    flex-direction: column;
}

.btn {
    margin-bottom: 10px;
}

.pagination p {
    text-align: center;
}
</style>
