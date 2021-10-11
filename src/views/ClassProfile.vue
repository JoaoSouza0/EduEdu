<template>
    <section style="width:100%">
        <FilterStudents />
        <div>
            <StudentsContainer :studentsYear="studentsArray" year="1" />
        </div>
        <div>
            <StudentsContainer :studentsYear="studentsArray" year="2" />
        </div>
        <div>
            <StudentsContainer :studentsYear="studentsArray" year="3" />
        </div>
    </section>
</template>

<script>
import FilterStudents from '@/components/FilterStudents.vue';
export default {
    name: 'ClassProfile',
    components: {
        FilterStudents,
        StudentsContainer: () => import('../components/StudentsContainer.vue')
    },
    data() {
        return {
            studentsArray: []
        };
    },
    computed: {
        url() {
            return this.$route;
        }
    },
    methods: {
        async getTest() {
            const response = await fetch('http://localhost:3000/Students');
            const response2 = await response.json();
            this.studentsArray = response2;
        },
        filterSchoolYears() {
            return this.studentsArray.filter((item) => item.schoolYear === '1');
        }
    },
    created() {
        this.getTest();
    }
};
</script>

<style scoped></style>
