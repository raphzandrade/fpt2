import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards';
import { DirectivesPageComponent } from './pages/directives-page/directives-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PagesModule } from './pages/pages.module'
import { PipesPageComponent } from './pages/pipes-page/pipes-page.component';

const routes: Routes = [
  { path: 'my-list', component: ListPageComponent, canActivate: [AuthGuard] },
  { path: 'my-form', component: FormPageComponent, canActivate: [AuthGuard] },
  { path: 'directives-examples', component: DirectivesPageComponent, canActivate: [AuthGuard] },
  { path: 'pipes-examples', component: PipesPageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: '**', redirectTo: 'my-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    PagesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
