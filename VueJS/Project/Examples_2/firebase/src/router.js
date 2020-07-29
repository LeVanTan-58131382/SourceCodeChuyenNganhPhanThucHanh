import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/CompHome.vue';
import Login from './views/CompLogin.vue';
import SignUp from './views/CompSignUp.vue';

Vue.use(Router);
export default new Router({
    router: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/login",
            name: "Login",
            component: Login
        },
        {
            path: "/sign-up",
            name: "SignUp",
            component: SignUp
        }
    ]
});