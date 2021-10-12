import Vue from 'vue';
import Vuex from 'vuex';
import { v4 as uuidv4 } from 'uuid';
import { api } from '../firebase/Students-Services';
Vue.use(Vuex);

const Students = {
    namespaced: true,
    state: {
        student: {
            name: '',
            school: '',
            yearSchool: '0',
            imageURL: null,
            autorization: false
        },
        image: null,
        valid: true
    },
    mutations: {
        UPDATE_STUDENT(state, payload) {
            state.student = Object.assign({}, state.student, payload);
        },
        UPDATE_IMAGE(state, payload) {
            state.image = payload;
        },
        UPDATE_VALID(state, payload) {
            state.valid = payload;
        },
        CLEAR_PROPS(state) {
            state.student = { name: '', school: '', yearSchool: '0', autorization: false };
        }
    },
    getters: {
        validation(state) {
            const valid =
                state.student.name && state.student.school && state.student.autorization && state.student.imageURL;
            return valid;
        }
    },
    actions: {
        createStudent({ commit, state, getters }, payload) {
            let condition = getters.validation;

            if (condition) {
                const uuidFiles = uuidv4();

                api.postCollection('Students', {
                    ...payload,
                    id: uuidFiles,
                    imageURL: `${state.student.imageURL}_${uuidFiles}`
                });

                api.uploadImageStorage(state.image, uuidFiles);

                commit('CLEAR_PROPS');
                commit('UPDATE_VALID', true);
            } else {
                commit('UPDATE_VALID', false);
            }
        }
    }
};

export default Students;
