import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GreetingComponent } from './greeting/greeting.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  { path: '', component: GreetingComponent },
  { path: 'game', component: GameComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
