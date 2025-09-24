import {createRouter, createWebHistory} from 'vue-router'
import HeroSection from './components/HeroSection/HeroSection.vue'
import BookStatus from './components/BookStatus/BookStatus.vue'
import ApplicationStatus from './components/ApplicationStatus/ApplicationStatus.vue'
import Admin from './components/Admin /Admin.vue'

const routes = [
    {
        path:'/',
        component: HeroSection
    },
    {
        path:"/tekshirish",
        component: BookStatus
    },
    {
        path:"/application-check-youth",
        component: ApplicationStatus
    },
    {
        path:"/admin-page",
        component:Admin
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router