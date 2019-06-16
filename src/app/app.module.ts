import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TabelloneComponent } from './tabellone/tabellone.component';
import { MatchComponent } from './match/match.component';
import { SquadComponent } from './squad/squad.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelloneComponent,
    MatchComponent,
    SquadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
