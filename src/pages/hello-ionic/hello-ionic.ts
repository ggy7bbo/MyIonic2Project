import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SongService } from '../../providers/song-service';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  // searchQuery: string = '';
  searchTerm: string = '';
  // searchControl: FormControl;
  // lists : Array<{title: string, note: string, index: string}>;
  public song : any;
  // searching: any = false;
  items: any;

  constructor(public songService : SongService) {
    this.initializeItems();
    // this.searchControl = new FormControl();
    // this.loadSong();
    // this.initializeItems();
    // this.lists = [];
    // for(let i = 1; i < 11; i++) {
    //   this.lists.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     index: 'No.' + i
    //   });
    // }
  }

  initializeItems() {
    this.items = [
      {
        "gender": "female",
        "name": {
          "title": "miss",
          "first": "bernice",
          "last": "reynolds"
        },
        "location": {
          "street": "9997 preston rd",
          "city": "arlington",
          "state": "minnesota",
          "postcode": 41867
        },
        "email": "bernice.reynolds@example.com",
        "login": {
          "username": "brownbear473",
          "password": "hondas",
          "salt": "LwjSUq0J",
          "md5": "14c1f08b28f8cfb22f129a45aae0f33b",
          "sha1": "287328a841c063eb651557222b2da576fcc59029",
          "sha256": "baadd9d9eb99d7d602d8966d38dcd99364a29b6e29c56d4c6a3f43575bceb174"
        },
        "dob": "1976-12-01 10:35:52",
        "registered": "2003-06-08 06:13:05",
        "phone": "(542)-674-7696",
        "cell": "(431)-709-5209",
        "id": {
          "name": "SSN",
          "value": "518-25-8344"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/96.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/96.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/96.jpg"
        },
        "nat": "US"
      },
      {
      "gender": "male",
      "name": {
      "title": "mr",
      "first": "wyatt",
      "last": "mccoy"
      },
      "location": {
      "street": "9792 white oak dr",
      "city": "kalgoorlie",
      "state": "victoria",
      "postcode": 1417
      },
      "email": "wyatt.mccoy@example.com",
      "login": {
      "username": "orangebutterfly596",
      "password": "zhai",
      "salt": "X3douvk9",
      "md5": "0428fcc639c64e15c6b952cc20317068",
      "sha1": "876c2928e3140a94db6d76e420d1465f0a9bb3f6",
      "sha256": "9aef317c994b87a46e5bf4fbf71e43ddce279fbbf18e7cacde5f0081f329f870"
      },
      "dob": "1945-11-03 06:59:25",
      "registered": "2012-03-19 04:20:55",
      "phone": "08-5188-8654",
      "cell": "0431-262-237",
      "id": {
      "name": "TFN",
      "value": "293568737"
      },
      "picture": {
      "large": "https://randomuser.me/api/portraits/men/27.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/27.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/27.jpg"
      },
      "nat": "AU"
      },
      {
      "gender": "male",
      "name": {
      "title": "mr",
      "first": "jano",
      "last": "riedel"
      },
      "location": {
      "street": "5432 waldweg",
      "city": "offenbach am main",
      "state": "schleswig-holstein",
      "postcode": 68296
      },
      "email": "jano.riedel@example.com",
      "login": {
      "username": "whitewolf377",
      "password": "seeker",
      "salt": "WbnoaxMA",
      "md5": "de969a9ed43bb27c24dea737eec00dc3",
      "sha1": "b46957d94e37497e517889ac3af0724753432935",
      "sha256": "0a857a99469271932fc7ec02e22b690f25468752a73e8ec01b5fdeb2292a1165"
      },
      "dob": "1990-05-24 10:59:04",
      "registered": "2016-02-12 17:44:55",
      "phone": "0173-6649386",
      "cell": "0174-5670056",
      "id": {
      "name": "",
      "value": null
      },
      "picture": {
      "large": "https://randomuser.me/api/portraits/men/79.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/79.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/79.jpg"
      },
      "nat": "DE"
      }
    ];
  }

  // loadSong() {
  //   this.songService.load()
  //     .then(data1 => {
  //       this.song = data1;
  //     })
  // }

  // ionViewDidLoad() {
  //
  //     this.setFilteredItems();
  //     this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
  //
  //         this.searching = false;
  //         this.setFilteredItems();
  //
  //     });
  // }
  //
  // onSearchInput(){
  //     this.searching = true;
  // }
  //
  // setFilteredItems() {
  //
  //     this.song = this.songService.filterItems(this.searchTerm);
  //
  // }

  // getItems(ev: any) {
  //   this.loadSong();
  //
  //   let val = ev.target.value;
  //
  //   if(val && val.trim() != ''){
  //     this.song = this.song.filter((item) => {
  //       // console.log(person);
  //       // console.log(item.gender.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //
  //       return (item.name.first.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //     console.log(this.song);
  //   }
  // }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.first.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
