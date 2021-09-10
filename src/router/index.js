import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

export const constantRoutes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        component: () => import('@/views/Login')
    }
]

// upon login, get the routes from api's response
export const asyncRoutes = [
    /* routes return from api based user's permission */
]

// after createApp(), only load the constantRoutes
const router = createRouter({
    routes: constantRoutes,
    history: createWebHistory(),
})

router.beforeEach((to, from, next) => {
    // if the token has been stored 
    console.log(store.getters)
    if (store.getters.token) {
        if (to.path === '/login') {
            next({ path: '/login' })
        } else {
            if (store.getters.roles.length !== 0) return next()
            // if there're no roles returned from the backend 
            store.dispatch('GetUserInfo')
                .then(res => {
                    const roles = store.getters.roles
                    store.dispatch('GenerateRoutes', { roles })
                        .then(res => {
                            router.addRoutes(store.getters.addRoutes)
                            next({ ...to, replace: true })
                        })
                })
                .catch(err => console.error(err))
        }
    } else {
        console.log('poop')
        next('/login')
    }
})

export default router
