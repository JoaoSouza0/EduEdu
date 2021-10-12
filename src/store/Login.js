import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const Auth = {
    namespaced: true,
    state: {
        auth: {
            email: null,
            password: null,
            confirmPassWord: null
        },
        valid: true
    },
    mutations: {
        UPDATE_AUTH(state, payload) {
            state.auth = Object.assign({}, state.auth, payload);
        },
        UPDATE_VALID(state, payload) {
            state.valid = payload;
        },
        CLEAR_PROPS(state) {
            state.auth = { email: null, password: null, confirmPassWord: null };
        }
    },
    actions: {}
};

export default Auth;
