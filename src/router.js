import { createRouter, createWebHistory } from 'vue-router'
import HeroSection from './components/HeroSection/HeroSection.vue'
import BookStatus from './components/BookStatus/BookStatus.vue'
import ApplicationStatus from './components/ApplicationStatus/ApplicationStatus.vue'
import Admin from './components/Admin /Admin.vue'
import DashboardLayout from './layouts/DashboardLayout.vue'
import ApplicationSend from './components/ApplictionSend/ApplicationSend.vue'
const routes = [
    {
        path: '/',
        component: HeroSection
    },
    {
        path: "/tekshirish",
        component: BookStatus
    },
    {
        path: "/application-check-youth",
        component: ApplicationStatus
    },
    {
        path: "/admin-page",
        component: Admin
    },
    {
        path: "/application",
        component: ApplicationSend
    },
    {
        path: "/admin",
        component: DashboardLayout,
        children: [
            { path: "", component: () => import("../src/pages/admin/Dashboard.vue") },
            { path: "applications", component: () => import("../src/pages/admin/Application.vue") },
            { path: "users", component: () => import("../src/pages/admin/Users.vue") },
        ],
    },
    {
        path: "/city",
        component: DashboardLayout,
        children: [
            { path: "", component: () => import("../src/pages/city/Dashboard.vue") },
            { path: "reports", component: () => import("../src/pages/city/Reports.vue") },
        ],
    },
    {
        path: "/region",
        component: DashboardLayout,
        children: [
            { path: "", component: () => import("../src/pages/region/Dashboard.vue") },
            { path: "stats", component: () => import("../src/pages/region/Stats.vue") },
        ],
    },
    {
        path: "/user",
        component: DashboardLayout,
        children: [
            { path: "applications", component: () => import("../src/pages/user/Dashboad.vue") },
            { path: "profile", component: () => import("../src/pages/user/Profile.vue") },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router