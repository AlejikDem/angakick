import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { GameService } from './game.service';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { GreetingComponent } from './greeting/greeting.component';
import { TimerComponent } from './timer/timer.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GreetingComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
