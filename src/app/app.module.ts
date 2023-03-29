import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './com/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JeuComponent } from './jeu/jeu.component';
import { AdminComponent } from './com/admin/admin.component';
import { FaceComponent } from './com/face/face.component';
import { QuestionComponent } from './com/question/question.component';
import { GrapheComponent } from './com/graphe/graphe.component';
import { NgChartsModule } from 'ng2-charts';
import { Sam3iComponent } from './com/sam3i/sam3i.component';
import { HessiComponent } from './com/hessi/hessi.component';
import { BasariComponent } from './com/basari/basari.component';
import { AnnimationComponent } from './com/annimation/annimation.component';
import { Nal3bouComponent } from './com/nal3bou/nal3bou.component';
import { ToAl3ebComponent } from './com/to-al3eb/to-al3eb.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JeuComponent,
    AdminComponent,
    FaceComponent,
    QuestionComponent,
    GrapheComponent,
    Sam3iComponent,
    HessiComponent,
    BasariComponent,
    AnnimationComponent,
    Nal3bouComponent,
    ToAl3ebComponent ,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
     
    ReactiveFormsModule,
    FormsModule ,
    NgChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
