import Vue from 'vue';
import Vuex from 'vuex';
import Students from './Students';
import Login from './Login';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Students,
        Login,
        // other modules here ...
    }
});
