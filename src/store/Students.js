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
        image: null
    },
    mutations: {
        UPDATE_STUDENT(state, payload) {
            state.student = Object.assign({}, state.student, payload);
        },
        UPDATE_IMAGE(state, payload) {
            state.image = payload;
        },
        CLEAR_PROPS(state) {
            state.student = { name: '', school: '', yearSchool: '0', autorization: false };
        }
    },
    actions: {
        createStudent({ commit, state }, payload) {
            const uuidFiles = uuidv4();
            api.postCollection('Students', {
                ...payload,
                id: uuidFiles,
                imageURL: `${state.student.imageURL}_${uuidFiles}`
            });
            api.uploadImageStorage(state.image, uuidFiles);

            commit('CLEAR_PROPS');
        }
    }
};

export default Students;
