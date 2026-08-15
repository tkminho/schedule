import type { RouteRecordRaw } from 'vue-router'

const scheduleRoutes: RouteRecordRaw[] = [
  {
    path: '/schedule',
    name: 'schedule',
    component: () => import('@/views/schedule/index.vue'),
  },
]

export default scheduleRoutes
