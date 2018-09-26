import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    loadedFeature = 'recipe';

    ngOnInit() {
      firebase.initializeApp({
        apiKey: 'AIzaSyCh_fH4k0y9kMUs3A92EeY-BrrJzLQR8O0',
        authDomain: 'ng-recipe-book-fb8b9.firebaseapp.com'
      });
    }

    onNavigate(feature: string) {
      this.loadedFeature = feature;
    }

}
