import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SongService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SongService {
  data1: any;

  constructor(public http: Http) {
    console.log('Hello SongService Provider');
  }

  load(){
    if(this.data1){
      return Promise.resolve(this.data1);
    }
    return new Promise(resolve => {
      this.http.get('https://randomuser.me/api/?results=10&seed=foobar')
        .map(res => res.json())
        .subscribe(data => {
          this.data1 = data.results;
          resolve(this.data1);
        });
    });
  }

}
