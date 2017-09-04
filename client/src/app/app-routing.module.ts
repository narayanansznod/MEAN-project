import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from "app/components/home/home.component";
import { DashboardComponent } from "app/components/dashboard/dashboard.component";


// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'dashboard', component: DashboardComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
