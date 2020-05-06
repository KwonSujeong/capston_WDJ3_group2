import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Signup from '@/views/auth/Signup.vue';
import Graph from "../views/graphView/Graph.vue";
import MonthChart from "../components/graph/MonthChart.vue";
import DayChart from "../components/graph/DayChart.vue";
import New from "../views/graphView/New.vue";
import Recommend from "../views/recommendView/Recommend.vue";
import Detailed from '@/components/Detailed';
import Review from "../views/reviewView/ReviewMain.vue";
import Store from "../components/review/Store.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "home",
        component: Home
    },
    // {
    //     path: "/signup",
    //     name: "signup",
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ "../views/auth/Signup.vue")
    // },
    {
        path: "/login",
        name: "Login",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/auth/Login.vue")
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: "/graph",
        name: "graph",
        component: Graph,
        children: [{
                path: 'monthchart',
                name: 'monthchart',
                component: MonthChart
            },
            {
                path: 'daychart',
                name: 'daychart',
                component: DayChart
            }
        ],

    },
    {
        path: "/recommend",
        name: "recommend",
        component: Recommend
    },
    {
        path: '/detailed',
        name: 'Detailed',
        component: Detailed
    },
    {
        path: "/review",
        name: "review",
        component: Review,
    },
    {
        path: "/store/:id",
        name: "store",
        component: Store
    },
    {
        path: "/new",
        name: "new",
        component: New
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;