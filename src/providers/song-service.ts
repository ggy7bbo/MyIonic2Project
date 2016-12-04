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
    this.load();
  }

  load(){
    if(this.data1){
      return Promise.resolve(this.data1);
    }
    return new Promise(resolve => {
      this.http.get('data/data.json').subscribe(res => { // .map(res => res.json())
          this.data1 = res.json();
          resolve(this.data1);
          // console.log(this.data1);
        });
    });
  }
  // 
  // filterItems(searchTerm){
  //
  //     return this.data1.filter((item) => {
  //         return item.name.first.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  //     });
  //
  // }

}
