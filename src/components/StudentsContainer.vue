<template>
    <section>
        <b>{{ year | schoolYear }}</b>
        <div class="student-container">
            <div class="student-content" v-for="(student, index) in pagination" :key="index">
                <div class="student-img">
                    <img src="../assets/kids/carmen.png" alt="" />
                </div>
                <div class="information">
                    <p class="name">{{ student.name }}</p>
                    <p>{{ student.schoolYear | schoolYear }}</p>
                </div>
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

export default {
    name: 'Students',
    props: ['studentsYear', 'year'],
    data() {
        return {
            studentsPerPage: 5,
            contries: [],
            paginationStart: 0,
            pagination: []
        };
    },
    components: {
        PaginationStudents
    },
    computed: {
        studentYear() {
            const studentYear = this.studentsYear.filter((item) => item.schoolYear === this.year);
            return studentYear;
        },
        numberOfItens() {
            this.spliceArray(this.paginationStart);
            return this.studentYear.length;
        }
    },
    methods: {
        spliceArray(start) {
            this.paginationStart = start;
            this.pagination = this.studentYear.slice(start, start + this.studentsPerPage);
        }
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
.student-img img {
    border-radius: 10px;
    width: 150px;
}

.information {
    width: 150px;
    padding: 10px 0;
}

.information .name {
    font-family: 'Montserrat', sans-serif;
    color: #616161;
    font-weight: 800;
    font-size: 16px;
}

.information p {
    font-family: 'Montserrat';

    font-size: 16px;
    color: #616161;
}

.pagination {
    grid-column: 7;
}
</style>
