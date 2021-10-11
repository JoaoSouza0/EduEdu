import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        student: {
            name: '',
            school: '',
            yearSchool: '',
            autorization: false
        }
    },
    mutations: {
        UPDATE_STUDENT(state, payload) {
            state.student = Object.assign({}, state.student, payload);
        }
    },
    actions: {
        createStudent(context, payload) {
            console.log(payload);
        }
    }
});
