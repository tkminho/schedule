import { createRouter, createWebHistory } from 'vue-router';
// 기본 공통 페이지 라우트 (메인 화면, 404 에러 등)
const defaultRoutes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
    },
];
// modules 폴더 안의 모든 index.ts (또는 .ts) 파일을 자동으로 다 긁어옵니다.
const modules = import.meta.glob('./modules/**/*.ts', {
    eager: true,
});
const moduleRoutes = [];
for (const path in modules) {
    const module = modules[path];
    if (module.default) {
        moduleRoutes.push(...module.default);
    }
}
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [...defaultRoutes, ...moduleRoutes],
});
export default router;
