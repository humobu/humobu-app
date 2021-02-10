import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'grupos',
        children: [ 
          {
            path: '',
            loadChildren: () => import('../grupos/grupos.module').then(m => m.GruposPageModule)
          },
          {
            path: 'estabelecimento',
            loadChildren: () => import('../estabelecimento/estabelecimento.module').then(m => m.EstabelecimentoPageModule)
          }
        ]        
      },
      {
        path: 'conversas',
        loadChildren: () => import('../conversas/conversas.module').then(m => m.ConversasPageModule)
      },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
          },
          {
            path: 'sexo',
            children: [
              {
                path: '',
                loadChildren: () => import('../perfil-sexo/perfil-sexo.module').then(m => m.PerfilSexoPageModule)
              },
              {
                path: 'mais',
                loadChildren: () => import('../perfil-sexo-mais/perfil-sexo-mais.module').then(m => m.PerfilSexoMaisPageModule)
              }
            ]
          },
          {
            path: 'orientacao',
            loadChildren: () => import('../perfil-orientacao/perfil-orientacao.module').then(m => m.PerfilOrientacaoPageModule)
          }
        ]
        //loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: '',
        redirectTo: 'grupos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'grupos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
