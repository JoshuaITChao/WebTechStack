import Vue from 'vue';
import Router from 'vue-router';
import One from "../components/One";
import Two from "../components/Two";

Vue.use(Router);

const routes = [
    { path: '/one', component: One },
    { path: '/two', component: Two }
];

const router = new Router({
    routes  // 缩写，相当于 routes: routes
})

export default router;
