<template>
    <section v-if="students.length">
        <b v-if="labelName === '0'">Pré</b>
        <b v-else>{{ labelName | schoolYear }}</b>
        <div class="student-container">
            <div class="student-content" v-for="student in pagination" :key="student.id">
                <StudentContent :student="student" />
            </div>
            <PaginationStudents
                class="pagination"
                @paginate="spliceArray"
                :paginationStart="paginationStart"
                :itens-in-page="studentsPerPage"
                :number-of-itens="numberOfItens"
            />
        </div>
    </section>
</template>

<script>
import PaginationStudents from '@/components/PaginationStudents.vue';
import StudentContent from '@/components/StudentContent.vue';
import { api } from '../firebase/Students-Services';

export default {
    name: 'Students',
    props: ['filter', 'by'],
    data() {
        return {
            studentsPerPage: 5,
            paginationStart: 0,
            pagination: [],
            students: [],
            labelName: ''
        };
    },
    components: {
        PaginationStudents,
        StudentContent
    },
    computed: {
        numberOfItens() {
            this.spliceArray(this.paginationStart);
            return this.students.length;
        }
    },
    watch: {
        filter() {
            if (this.by === 'year') {
                this.filterByYear(this.filter);
            } else {
                this.filterByName(this.filter);
            }
        }
    },
    methods: {
        spliceArray(start) {
            this.paginationStart = start;
            this.pagination = this.students.slice(start, start + this.studentsPerPage);
        },
        async filterByYear(value) {
            const data = await api.getFilteredCollectionData('Students', 'yearSchool', '==', value);
            this.labelName = value;
            this.students = data;
        },
        async filterByName({ start, end }) {
            this.students = [];
            const data = await api.getOrderedCollectionData('Students', 'name', start, end);
            if (data.length) {
                this.labelName = `${data[0].name[0]} a ${data[data.length - 1].name[0]}`;
            }
            this.students = data;
        }
    },
    async created() {
        await this.filterByYear(this.filter);
    }
};
</script>

<style scoped>
section {
    width: 1250px;
    margin: 0 auto;
}
.student-container {
    border-top: 1px solid black;
    padding-top: 20px;
    margin-bottom: 20px;
    width: 1250px;

    display: grid;
    grid-template-columns: repeat(6, 1fr) 100px;
    gap: 40px;
}
.student-content {
    background-color: #fff;
    width: 170px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-top: 21px;

    border: 1px solid #e1e1e1;
    box-shadow: 0px 4px 0px #c4c3c3ea;
    border-radius: 10px;
}

.pagination {
    grid-column: 7;
}
</style>
