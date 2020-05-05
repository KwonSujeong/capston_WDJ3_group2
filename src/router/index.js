import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Graph from "../views/Graph.vue";
import Recommend from "../views/Recommend/Recommend.vue";
import Review from "../views/Review.vue";
import MonthChart from "../components/graph/MonthChart.vue";
import DayChart from "../components/graph/DayChart.vue";
import New from "../views/New.vue";
import Signup from '@/views/auth/Signup';
import Detailed from '@/views/Recommend/Detailed';
import Noticeboard from '@/views/review_board/Noticeboard';
import ReviewBoard from '@/views/review_board/ReviewBoard';
import Recipe from '@/views/foot_recommend/Recipe';
import FootRecommend from '@/views/foot_recommend/FootRecommend';

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
        path: "/noticeboard",
        name: "noticeboard",
        component: Noticeboard
    },
    {
        path: "/reviewboard",
        name: "reviewboard",
        component: ReviewBoard
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
        component: Review
    },
    {
        path: "/new",
        name: "new",
        component: New
    },
    {
        path: '/recipe',
        name: 'Recipe',
        component: Recipe
      },
      {
        path: "/footrecommend",
        name: "FootRecommend",
        component: FootRecommend
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;