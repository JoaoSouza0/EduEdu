import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import ClassProfile from '../views/ClassProfile.vue';
import CreateClass from '../views/CreateClass.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home,
        beforeEnter: (to, from, next) => {
            
        },
        children: [
            {
                path: 'ClassProfile',
                component: ClassProfile
            },
            {
                path: 'CreateStudent',
                component: CreateClass
            },
            {
                path: 'PortugueseProve',
                component: CreateClass
            },
            {
                path: 'DigitalActivities',
                component: CreateClass
            },
            {
                path: 'Help',
                component: CreateClass
            },
            {
                path: 'Settings',
                component: CreateClass
            }
        ]
    },
    {
        path: '/NotFound',
        name: 'NotFound',
        component: NotFound
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
