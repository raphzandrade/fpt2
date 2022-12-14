import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './list-page/list-page.component';
import { ComponentsModule } from '../components/components.module';
import { FormPageComponent } from './form-page/form-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives/directives.module';
import { DirectivesPageComponent } from './directives-page/directives-page.component';
import { PipesPageComponent } from './pipes-page/pipes-page.component';
import { PipesModule } from '../pipes/pipes.module';
import { LoginPageComponent } from './login-page/login-page.component';



@NgModule({
  declarations: [
    ListPageComponent,
    FormPageComponent,
    DirectivesPageComponent,
    PipesPageComponent,
    LoginPageComponent
  ],
  exports: [
    ListPageComponent,
    FormPageComponent,
    DirectivesPageComponent,
    PipesPageComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
    PipesModule
  ]
})
export class PagesModule { }

