import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { NavController, NavParams } from 'ionic-angular';

declare var daum: any;

@Component({
  selector: 'map-style',
  templateUrl: 'map.html'
})
export class MapPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.initalizeMap();
  }

  initalizeMap(){

    		this.platform.ready().then(() => {
          var infowindow = new daum.maps.InfoWindow({zIndex:1});

          var container = document.getElementById('map');
          var options = {
            center: new daum.maps.LatLng(33.450701, 126.570667),
            level: 2
    		  }
          var map = new daum.maps.Map(container, options);

          var ps = new daum.maps.services.Places();
          // ps.keywordSearch('궁동 노래방', placesSearchCB);
          ps.keywordSearch({
              keyword : '궁동 노래방',
              options: {
                radius : 2000
              }
          }, placesSearchCB);

          function placesSearchCB (status, data, pagination) {
              if (status === daum.maps.services.Status.OK) {

                  // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                  // LatLngBounds 객체에 좌표를 추가합니다
                  var bounds = new daum.maps.LatLngBounds();

                  for (var i=0; i<data.places.length; i++) {
                      displayMarker(data.places[i]);
                      bounds.extend(new daum.maps.LatLng(data.places[i].latitude, data.places[i].longitude));
                  }

                  // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                  map.setBounds(bounds);
              }
          }
          function displayMarker(place) {

              // 마커를 생성하고 지도에 표시합니다
              var marker = new daum.maps.Marker({
                  map: map,
                  position: new daum.maps.LatLng(place.latitude, place.longitude)
              });

              // 마커에 클릭이벤트를 등록합니다
              daum.maps.event.addListener(marker, 'click', function() {
                  // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                  infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.title + '</div>');
                  infowindow.open(map, marker);
              });
          }
        });
      }
}
