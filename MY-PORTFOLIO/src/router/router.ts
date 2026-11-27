import { createRouter, createWebHistory } from 'vue-router'
import main from '@/components/pages/main.vue'
import services from '@/components/pages/services.vue'
import projects from '@/components/pages/projects.vue'
import NotFound from '@/components/layout/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/", component: main, name: 'home'},
    {path: "/services", component: services, name: 'services'},
    {path: "/projects", component: projects, name: 'projects'},
    { path: "/:catchAll(.*)", component: NotFound },
  ],
});

export default router
