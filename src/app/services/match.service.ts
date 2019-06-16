import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  apiKey='b466f67acd704a7a9d7e0a84f297241e';
  token='X-Auth-Token';

  dayMatch;

  constructor(private http: HttpClient) { }

  getMatch(giornata): Observable<any>{
    return this.http.get("http://api.football-data.org/v2/competitions/SA/matches?matchday="+giornata, {headers: new HttpHeaders({
      'X-Auth-Token' : this.apiKey})}
      );
  }

  getInfoMatch(match){
    this.dayMatch=match;
  }

  getDayMatch(){
    return this.dayMatch;
  }
}
