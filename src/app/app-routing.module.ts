import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './com/admin/admin.component';
import { AnnimationComponent } from './com/annimation/annimation.component';
import { BasariComponent } from './com/basari/basari.component';
import { FaceComponent } from './com/face/face.component';
import { GrapheComponent } from './com/graphe/graphe.component';
import { HessiComponent } from './com/hessi/hessi.component';
import { HomeComponent } from './com/home/home.component';
import { Nal3bouComponent } from './com/nal3bou/nal3bou.component';
import { QuestionComponent } from './com/question/question.component';
import { Sam3iComponent } from './com/sam3i/sam3i.component';
import { ToAl3ebComponent } from './com/to-al3eb/to-al3eb.component';
import { JeuComponent } from './jeu/jeu.component';


const routes: Routes = [
  { path : "home" , component:HomeComponent},
  {path : "jeu" , component: JeuComponent},
  {path : "admin" , component: AdminComponent},
  {path: "face"  , component:FaceComponent},
  {path : "question" , component : QuestionComponent},
  {path : "graphe" , component : GrapheComponent},
  {path : "hessi" , component :HessiComponent} ,
  {path : "sam3i" , component : Sam3iComponent} ,
  {path : "basari" , component : BasariComponent},
  {path : "annimation" , component :AnnimationComponent},
  {path : "nal3bou" , component : Nal3bouComponent},
  {path : "toAl3eb" , component : ToAl3ebComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
