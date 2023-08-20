import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MissionComponent } from './mission/mission.component';
import { AboutComponent } from './about/about.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" }, 
  { path: "home", component: HomeComponent },
  { path: "mission", component: MissionComponent },
  { path: "about", component: AboutComponent },
  { path: "solutions", component: SolutionsComponent },
  { path: "contact", component: ContactComponent }
  // Code for wild star . . .
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
