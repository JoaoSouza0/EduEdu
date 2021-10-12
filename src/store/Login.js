import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const Auth = {
    namespaced: true,
    state: {
        auth: {
            email: null,
            password: null
        }
    },
    mutations: {
        UPDATE_AUTH(state, payload) {
            state.auth = Object.assign({}, state.auth, payload);
        },
        CLEAR_PROPS(state) {
            state.auth = { email: null, password: null };
        }
    },
    actions: {}
};

export default Auth;
