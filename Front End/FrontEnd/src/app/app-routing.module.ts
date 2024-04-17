import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeLayerComponent } from './components/resume-layer/resume-layer.component';


const routes: Routes = [
  { path: 'fill-resume', component: ResumeLayerComponent },
  { path: '**', component: ResumeLayerComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
