import Vue from 'vue'
import Router from 'vue-router'
const Inicio = () => import('./pages/inicio')

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '',
            redirect: '/inicio'
        },
        {
            path: '/inicio',
            name: 'inicio',
            component: Inicio
        },
        {
            path: '/busquedas',
            name: 'busquedas',
            component: () => import('./pages/busquedas'),
        },
        {
            path: '/ventas',
            name: 'ventas',
            component: () => import('./pages/ventas'),
        },
        {
            path: '/total',
            name: 'total',
            component: () => import('./pages/total'),
        },
        {
            path: '*',
            name: 'notFound',
            component: () => import('./pages/notFound'),
        },
    ] // End routes
})