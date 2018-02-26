import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB-AKnByh3t-21SKi_Zk0z5z3tNvcg_g9w',
      authDomain: 'ng-recipe-book-2d2ac.firebaseapp.com'
    });
  }
}
