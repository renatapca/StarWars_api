const routes = [{
  path: '/',
  component: () =>
    import('layouts/MainLayout.vue'),
  children: [{
    path: '',
    component: () =>
      import('pages/Index.vue')
  },
  {
    path: 'planetas',
    component: () =>
      import('pages/Planetas.vue')
  },
  {
    path: 'personagens',
    component: () =>
      import('pages/Personagens.vue')
  }
  ]
},

// Always leave this as last one,
// but you can also remove it
{
  path: '*',
  component: () =>
    import('pages/Error404.vue')
}
]

export default routes
