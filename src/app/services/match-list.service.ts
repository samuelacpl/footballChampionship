import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchListService {

  apiKey='b466f67acd704a7a9d7e0a84f297241e';
  token='X-Auth-Token';

  constructor(private http: HttpClient) { }

  getMatches(): Observable<any>{
    return this.http.get("http://api.football-data.org/v2/competitions/2114/matches", {headers: new HttpHeaders({
      'X-Auth-Token' : this.apiKey})}
      );
  }
}
