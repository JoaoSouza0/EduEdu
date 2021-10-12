<template>
    <section style="width:100%">
        <FilterStudents />
        <div v-for="(filter, index) in filter" :key="index">
            <StudentsContainer :filter="filter" :by="activeFilter" />
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
            studentsArray: [],
            filterYear: ['0', '1', '2', '3'],
            filterbyName: [
                {
                    start: 'A',
                    end: 'G'
                },
                {
                    start: 'G',
                    end: 'M'
                },
                {
                    start: 'M',
                    end: 'S'
                },
                {
                    start: 'S',
                    end: 'a'
                }
            ]
        };
    },
    computed: {
        url() {
            return this.$route;
        },
        activeFilter() {
            return this.$route.query.filter;
        },
        filter() {
            if (this.activeFilter === 'name') {
                return this.filterbyName;
            }
            return this.filterYear;
        }
    }
};
</script>

<style scoped></style>
