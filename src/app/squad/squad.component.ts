import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.scss']
})
export class SquadComponent implements OnInit {

  apiKey='b466f67acd704a7a9d7e0a84f297241e';
  src: string[]=[];
  divB: boolean=false;
  data;   // metto il JSON della squadra
  subDiv=0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.src[0]="./../../assets/media/atalanta.png";
    this.src[1]="./../../assets/media/bologna.png";
    this.src[2]="./../../assets/media/cagliari.png";
    this.src[3]="./../../assets/media/chievo.png";
    this.src[4]="./../../assets/media/empoli.png";
    this.src[5]="./../../assets/media/fiorentina.png";
    this.src[6]="./../../assets/media/frosinone.png";
    this.src[7]="./../../assets/media/genoa.png";
    this.src[8]="./../../assets/media/inter.png";
    this.src[9]="./../../assets/media/juventus_black.png";
    this.src[10]="./../../assets/media/lazio.png";
    this.src[11]="./../../assets/media/milan.png";
    this.src[12]="./../../assets/media/napoli.png";
    this.src[13]="./../../assets/media/parma.png";
    this.src[14]="./../../assets/media/roma-400.png";
    this.src[15]="./../../assets/media/sampdoria.png";
    this.src[16]="./../../assets/media/sassuolo.png";
    this.src[17]="./../../assets/media/spal.png";
    this.src[18]="./../../assets/media/torino.png";
    this.src[19]="./../../assets/media/udinese.png";
  }

  getInfoSquad(index){
    switch(index){
      case 0:{
        this.http.get("http://api.football-data.org/v2/teams/102", {headers: new HttpHeaders({
          'X-Auth-Token' : this.apiKey})}
          ).subscribe(data => {
            this.data=data;
            console.log(data);
          });;
          break;
      }
      case 1:{
        this.http.get("http://api.football-data.org/v2/teams/103", {headers: new HttpHeaders({
          'X-Auth-Token' : this.apiKey})}
          ).subscribe(data => {
            this.data=data;
            console.log(data);
          });;
          break;
      }
      case 2:{
        this.http.get("http://api.football-data.org/v2/teams/104", {headers: new HttpHeaders({
          'X-Auth-Token' : this.apiKey})}
          ).subscribe(data => {
            this.data=data;
            console.log(data);
          });;
          break;
      }
      case 3:{
        this.http.get("http://api.football-data.org/v2/teams/106", {headers: new HttpHeaders({
          'X-Auth-Token' : this.apiKey})}
          ).subscribe(data => {
            this.data=data;
            console.log(data);
          });;
          break;
      }
      case 4:{
        this.http.get("http://api.football-data.org/v2/teams/445", {headers: new HttpHeaders({
          'X-Auth-Token' : this.apiKey})}
          ).subscribe(data => {
            this.data=data;
            console.log(data);
          });;
          break;
      }
      case 5:{
        this.http.get("http://api.football-data.org/v2/teams/99", {headers: new HttpHeaders({
          'X-Auth-Token' : this.apiKey})}
          ).subscribe(data => {
            this.data=data;
            console.log(data);
          });;
          break;
      }
      case 6:{
        this.http.get("http://api.football-data.org/v2/teams/470", {headers: new HttpHeaders({
          'X-Auth-Token' : this.apiKey})}
          ).subscribe(data => {
            this.data=data;
            console.log(data);
          });;
          break;
      }
      case 7:{
        this.http.get("http://api.football-data.org/v2/teams/107", {headers: new HttpHeaders({
          'X-Auth-Token' : this.apiKey})}
          ).subscribe(data => {
            this.data=data;
            console.log(data);
          });;
          break;
      }
      case 8:{
        this.http.get("http://api.football-data.org/v2/teams/108", {headers: new HttpHeaders({
          'X-Auth-Token' : this.apiKey})}
          ).subscribe(data => {
            this.data=data;
            console.log(data);
          });;
          break;
      }
      case 9:{
        this.http.get("http://api.football-data.org/v2/teams/109", {headers: new HttpHeaders({
          'X-Auth-Token' : this.apiKey})}
          ).subscribe(data => {
            this.data=data;
            console.log(data);
          });;
          break;
      }
      case 10:{
        this.http.get("http://api.football-data.org/v2/teams/110", {headers: new HttpHeaders({
          'X-Auth-Token' : this.apiKey})}
          ).subscribe(data => {
            this.data=data;
            console.log(data);
          });;
          break;
      }
      case 11:{
        this.http.get("http://api.football-data.org/v2/teams/98", {headers: new HttpHeaders({
          'X-Auth-Token' : this.apiKey})}
          ).subscribe(data => {
            this.data=data;
            console.log(data);
          });;
          break;
      }
      case 12:{
        this.http.get("http://api.football-data.org/v2/teams/113", {headers: new HttpHeaders({
          'X-Auth-Token' : this.apiKey})}
          ).subscribe(data => {
            this.data=data;
            console.log(data);
          });;
          break;
      }
      case 13:{
        this.http.get("http://api.football-data.org/v2/teams/112", {headers: new HttpHeaders({
          'X-Auth-Token' : this.apiKey})}
          ).subscribe(data => {
            this.data=data;
            console.log(data);
          });;
          break;
      }
      case 14:{
        this.http.get("http://api.football-data.org/v2/teams/100", {headers: new HttpHeaders({
          'X-Auth-Token' : this.apiKey})}
          ).subscribe(data => {
            this.data=data;
            console.log(data);
          });;
          break;
      }
      case 15:{
        this.http.get("http://api.football-data.org/v2/teams/584", {headers: new HttpHeaders({
          'X-Auth-Token' : this.apiKey})}
          ).subscribe(data => {
            this.data=data;
            console.log(data);
          });;
          break;
      }
      case 16:{
        this.http.get("http://api.football-data.org/v2/teams/471", {headers: new HttpHeaders({
          'X-Auth-Token' : this.apiKey})}
          ).subscribe(data => {
            this.data=data;
            console.log(data);
          });;
          break;
      }
      case 17:{
        this.http.get("http://api.football-data.org/v2/teams/1107", {headers: new HttpHeaders({
          'X-Auth-Token' : this.apiKey})}
          ).subscribe(data => {
            this.data=data;
            console.log(data);
          });;
          break;
      }
      case 18:{
        this.http.get("http://api.football-data.org/v2/teams/586", {headers: new HttpHeaders({
          'X-Auth-Token' : this.apiKey})}
          ).subscribe(data => {
            this.data=data;
            console.log(data);
          });;
          break;
      }
      case 19:{
        this.http.get("http://api.football-data.org/v2/teams/115", {headers: new HttpHeaders({
          'X-Auth-Token' : this.apiKey})}
          ).subscribe(data => {
            this.data=data;
            console.log(data);
          });;
          break;
      }
    }
    this.divB=true;
  }

  turnOff(){
    this.divB=false;
  }

  info(){
    this.subDiv=0;
  }

  rosa(){
    this.subDiv=1;
  }

  competizioni(){
    this.subDiv=2;
  }
}
