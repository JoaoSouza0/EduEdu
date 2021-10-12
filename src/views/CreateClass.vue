<template>
    <section>
        <StudentForm>
            <div class="checkbox-information">
                <input v-model="autorization" type="checkbox" name="check" id="check" />
                <label class="label" :class="{ warningActive: warning }" for="check"
                    >Eu autorizo o EduEdu a coletar e processar os daos do meu filho(a) conforme a politica de
                    privacidade</label
                >
            </div>
            <div class="button-container">
                <button class="btn-dark add-class" @click="submitForm">Adicionar aluno</button>
            </div>
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
    data() {
        return {
            warning: false
        };
    },
    computed: {
        autorization: {
            get() {
                return this.$store.state.Students.student.autorization;
            },
            set(value) {
                this.$store.commit('Students/UPDATE_STUDENT', { autorization: value });
            }
        }
    },
    methods: {
        async submitForm() {
            if (this.autorization) {
                const changeRoute = await this.$store.dispatch(
                    'Students/createStudent',
                    this.$store.state.Students.student
                );
                if (changeRoute) {
                    this.warning = false;
                    this.$router.push({ name: 'ClassProfile' });
                }
            } else {
                this.warning = true;
            }
        }
    }
};
</script>

<style scoped>
.button-container {
    padding-top: 20px;
}
.add-class {
    width: 365px;
    padding: 12px 0;
    font-weight: bold;
    font-size: 22px;
    text-align: center;
}
.checkbox-information .warningActive {
    color: rgb(243, 0, 0);
}
.label {
    font-size: 16px;
    font-weight: 300;
    color: #c4c4c4;
}
input[type='checkbox'] {
    border: 2px solid #47cdff;
    padding: 12px;
    border-radius: 25px;
}

.checkbox-information {
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>
