import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { checkTutorialGuard } from './providers/check-tutorial.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule),
    pathMatch: 'full'
  },
  {
    path: 'schedule',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
  },
  {
    path: 'exhibitor',
    loadChildren: () => import('./pages/exhibitor-list/exhibitor-list.module').then(m => m.ExhibitorListPageModule)
  },
  {
    path: 'exposchedule',
    loadChildren: () => import('./pages/expo-schedule/expo-schedule.module').then(m => m.ExpoScheduleModule)
  },
  {
    path: 'broadcasting',
    loadChildren: () => import('./pages/broadcasting/broadcasting.module').then(m => m.BroadcastingPageModule)
  },
  {
    path: 'supplier',
    loadChildren: () => import('./pages/supplierplatform/supplier.module').then(m => m.SupplierPageModule)
  },
  {
    path: 'btb',
    loadChildren: () => import('./pages/btb/btb.module').then(m => m.BtbPageModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule),
    canMatch: [checkTutorialGuard]
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
