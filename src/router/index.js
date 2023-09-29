import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomeScreen.vue';
import ProductPage from '../views/ProductScreen.vue';
import NotFound from '../views/NotFound.vue'




const routes = [
   
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },

    {
        path: '/product/:id',
        name: 'product',
        component : ProductPage,
        props: route =>({
            id: parseInt(route.params.id)
        })
    },
    {
        path : '/:pathMatch(.*)*',
        name : 'NotFound',
        component : NotFound
    }
   
    
    
]


const router = createRouter({
    history : createWebHistory(),
    routes,
})

export default router