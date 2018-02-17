import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';
import { WarningAlertComponent } from './components/warning-alert/warning-alert.component';
import { GameControlComponent } from './components/game-control/game-control.component';
import { OddControlComponent } from './components/game-control/odd-control/odd-control.component';
import { EvenControlComponent } from './components/game-control/even-control/even-control.component';
import { ActiveUsersComponent } from './components/active-users/active-users.component';
import { InactiveUsersComponent } from './components/inactive-users/inactive-users.component';
import { CounterService } from './services/counter.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    GameControlComponent,
    EvenControlComponent,
    OddControlComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
