import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login";
import Main from "../components/Main";
import NotFound from "../components/NotFound";
import TestExecution from "../components/TestExecution";
import TestHistory from "../components/TestHistory";


Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        //Login
        {path: "/", name: "Login", component: Login},

        //Main
        {
            path: "/main", name: "Main", component: Main,
            children :[
                //Main - TestExecution
                {path: "test-execution", name: "TestExecution", component: TestExecution },
                //Main - TestHistory
                {path: "test-history", name: "TestHistory", component: TestHistory }
            ]
        },
        //NotFound
        {path: "*", name: "NotFound", component: NotFound},


//        {path: "", name: "", component: ""}
    ]
})


export default router
