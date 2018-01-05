import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { GreetingComponent } from './greeting/greeting.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GreetingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
