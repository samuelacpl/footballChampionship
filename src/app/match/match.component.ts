import { Component, OnInit } from '@angular/core';
import { MatchService } from './../services/match.service';
import { TabelloneComponent } from '../tabellone/tabellone.component';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  dayMatch;
  homePlayers: string[]=[];
  awayPlayers: string[]=[];

  constructor(private service: MatchService) { }

  ngOnInit() {
    this.dayMatch=this.service.getDayMatch();
  }

  getHomeTeam(){
    return this.dayMatch.homeTeam.name;
  }

  getAwayTeam(){
    return this.dayMatch.awayTeam.name;
  }

  getReferees(){
    return 'Aribitri: ' + this.dayMatch.referees[0].name + ',\n' +
    this.dayMatch.referees[1].name + ',\n' +
    this.dayMatch.referees[2].name + ',\n' +
    this.dayMatch.referees[3].name + ',\n' +
    this.dayMatch.referees[4].name + '\n';

  }

  getInfoMatch(){
    return 'Risultato Primo Tempo:   ' + this.dayMatch.score.halfTime.homeTeam + ' - ' + this.dayMatch.score.halfTime.awayTeam +
    ' Risultato Finale: ' + this.dayMatch.score.fullTime.homeTeam + ' - ' + this.dayMatch.score.fullTime.awayTeam;
  }

  getPenalty(){
    let str='';
    if(this.dayMatch.score.penalties.homeTeam!=null)
      str='Rigori squadra in casa: ' + this.dayMatch.score.penalties.homeTeam;
    if(this.dayMatch.score.penalties.awayTeam!=null)
      str=str+'Rigori squadra in trasferta: ' + this.dayMatch.score.penalties.awayTeam;
    return str;
  }

  turnOff(){
    TabelloneComponent.divMatch=false;
  }

  getNameMatch(){
    this.dayMatch=this.service.getDayMatch();
    return this.dayMatch.homeTeam.name + ' - ' + this.dayMatch.awayTeam.name;
  }

}
