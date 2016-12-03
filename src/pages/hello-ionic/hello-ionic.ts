import { Component } from '@angular/core';
import { SongService } from '../../providers/song-service';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
  providers: [SongService]
})
export class HelloIonicPage {
  lists : Array<{title: string, note: string, index: string}>;
  public song : any;

  constructor(public songService : SongService) {

    this.loadSong();
    // this.lists = [];
    // for(let i = 1; i < 11; i++) {
    //   this.lists.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     index: 'No.' + i
    //   });
    // }
  }

  loadSong() {
    this.songService.load()
      .then(data1 => {
        this.song = data1;
      })
  }

  getItems(ev) {
    this.loadSong();

    let val = ev.target.value;

    if(val && val.trim() != ''){
      return this.song = this.song.filter((person) => {
        // console.log(person);
        console.log(person.gender.toLowerCase().indexOf(val.toLowerCase()) > -1);

        return (person.gender.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


}
