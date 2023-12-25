import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConvertisseurParentComponent } from './convertisseur-parent/convertisseur-parent.component';
import { ConvertisseurChildComponent } from './convertisseur-child/convertisseur-child.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ActorsComponent } from './actors/actors.component';
import { ActorComponent } from './actor/actor.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvertisseurParentComponent,
    ConvertisseurChildComponent,
    ActorsComponent,
    ActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
