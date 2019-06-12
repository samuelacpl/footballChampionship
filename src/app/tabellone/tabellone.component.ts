import { MatchListService } from './../services/match-list.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tabellone',
  templateUrl: './tabellone.component.html',
  styleUrls: ['./tabellone.component.scss']
})
export class TabelloneComponent implements OnInit {

  apiKey='b466f67acd704a7a9d7e0a84f297241e';
  token='X-Auth-Token';

  constructor(private service:MatchListService) { }

  ngOnInit() {
  }

  getMatch(){
  let ob=this.service.getMatches();   // appena l'observable ha i dati, li passa a dat
  ob.subscribe(data=>{
      console.log(data);
  });
  }
}
