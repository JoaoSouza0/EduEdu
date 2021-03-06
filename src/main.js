import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.filter('schoolYear', (value) => {
    const parsedValue = Number(value);

    if (parsedValue) {
        return `${parsedValue}º ano`;
    }
    return value;
});
new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');
