import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPage
  },  {
    path: 'edit-account',
    loadChildren: () => import('./edit-account/edit-account.module').then( m => m.EditAccountPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthPageRoutingModule {}
