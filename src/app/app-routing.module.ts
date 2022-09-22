import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { PagesModule } from './pages/pages.module'

const routes: Routes = [
  { path: 'my-list', component: ListPageComponent },
  { path: 'my-form', component: FormPageComponent },
  { path: '**', redirectTo: 'my-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    PagesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
