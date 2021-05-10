import { HomeComponent } from './component/home/home.component';
import { DefaultLayoutComponent } from './component/DefaultLayout/default-layout/default-layout.component';
import { HeaderComponent } from './component/DefaultLayout/header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
