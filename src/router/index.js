import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../pages/HomePage.vue'),
    name: 'Home',
  },
  {
    path: '/login',
    component: () => import('../pages/LoginPage.vue'),
    name: 'Login',
  },
  {
    path: '/signup',
    component: () => import('../pages/SignupPage.vue'),
    name: 'Signup',
  },
  {
    path: '/dashboard',
    component: () => import('../pages/DashboardPage.vue'),
    name: 'Dashboard',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Todo check before route enter for auth req routes
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Check if the user is authenticated
    if (!!!localStorage.getItem('token')) {
      // User is not authenticated, redirect to the login page or show an error message
      next({ name: 'Login' });
    } else {
      // User is authenticated, allow access to the route
      next();
    }
  } else {
    // Non-authenticated routes, allow access
    next();
  }
});

export default router;
