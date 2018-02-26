import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/app/tabs/(schedule:schedule)', pathMatch: 'full' },
  { path: 'account', loadChildren: './pages/account/account.module#AccountModule' },
  { path: 'support', loadChildren: './pages/support/support.module#SupportModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignUpModule' },
  { path: 'app', loadChildren: './pages/tabs-page/tabs-page.module#TabsModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
