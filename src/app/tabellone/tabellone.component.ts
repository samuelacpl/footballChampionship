import { MatchComponent } from './../match/match.component';
import { MatchListService } from './../services/match-list.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatchService } from './../services/match.service';

@Component({
  selector: 'app-tabellone',
  templateUrl: './tabellone.component.html',
  styleUrls: ['./tabellone.component.scss']
})
export class TabelloneComponent implements OnInit {

  apiKey = 'b466f67acd704a7a9d7e0a84f297241e';
  token = 'X-Auth-Token';
  day = 38;
  matches: any[]=[];

  static divMatch: boolean=false;

  constructor(private service: MatchListService, private serviceMatch: MatchService) { }

  ngOnInit() {
    let ob = this.service.getMatches(this.day);   // appena l'observable ha i dati, li passa a dat
    ob.subscribe(data => {
      console.log(data);
      this.viewMatches(data);
    });
  }

  viewMatches(data){
    for(let i=0; i<data.count;i++){
        this.matches[i]=data.matches[i];
    }
  }

  showMatch(match){
    TabelloneComponent.divMatch=true;
    this.serviceMatch.getInfoMatch(match);
  }

  precDay(){
    if(this.day==1)
      this.day=38;
    else
      this.day--;
    this.printDay();
  }

  nextDay(){
    if(this.day==38)
      this.day=1;
    else
      this.day++;
    this.printDay();
  }

  printDay(){
    let ob = this.service.getMatches(this.day);   // appena l'observable ha i dati, li passa a dat
    ob.subscribe(data => {
      console.log(data);
      this.viewMatches(data);
    });
  }

  getDivMatch(){
    return TabelloneComponent.divMatch;
  }
}
