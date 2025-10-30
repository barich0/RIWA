const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') },
              { path: '/users', component: () => import('pages/UsersPage.vue') },
              { path: '/NoveKnjige', component: () => import('pages/NoveKnjigePage.vue') },
              { path: '/PopisKnjiga', component: () => import('pages/PopisKnjigaPage.vue') },
              { path: '/Pretrazivanje', component: () => import('pages/PretrazivanjePage.vue') },
              { path: '/Lokacija', component: () => import('pages/LokacijaPage.vue') },
              { path: '/Login', component: () => import('pages/LoginPage.vue') },
              { path: '/Registracija', component: () => import('pages/RegistracijaPage.vue') },
              { path: '/Test', component: () => import('pages/TestPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
