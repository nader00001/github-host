import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './animation/animation.component';
import { AdminComponent } from './com/admin/admin.component';
import { FaceComponent } from './com/face/face.component';
import { GrapheComponent } from './com/graphe/graphe.component';
import { HomeComponent } from './com/home/home.component';
import { QuestionComponent } from './com/question/question.component';
import { JeuComponent } from './jeu/jeu.component';


const routes: Routes = [
  { path : "home" , component:HomeComponent},
  {path : "animation", component : AnimationComponent},
  {path : "jeu" , component: JeuComponent},
  {path : "admin" , component: AdminComponent},
  {path: "face"  , component:FaceComponent},
  {path : "question" , component : QuestionComponent},
  {path : "graphe" , component : GrapheComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
