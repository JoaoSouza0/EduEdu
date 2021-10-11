<template>
    <section>
        <StudentForm>
            <button class="btn-dark add-class" @click="submitForm">Adicionar aluno</button>
        </StudentForm>
    </section>
</template>

<script>
import StudentForm from '@/components/StudentForm.vue';
export default {
    name: 'CreateClass',
    components: {
        StudentForm
    },
    methods:{
        async submitForm(){
            await this.$store.dispatch("createStudent", this.$store.state.student);
        }
    }
};
</script>

<style scoped>

.add-class {
    width: 365px;
    padding: 12px 0;
    font-weight: bold;
    font-size: 22px;
    text-align: center;
}
</style>
