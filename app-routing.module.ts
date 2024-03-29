import { NgModule } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { EmplistComponent } from './emplist/emplist.component';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
  
const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'emplist-component',component:EmplistComponent},
  { path: 'project-component',component:ProjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}