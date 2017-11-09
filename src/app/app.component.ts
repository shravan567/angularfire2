import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private af: AngularFireDatabase){
    //this.af.object('connected').subscribe(console.log);
    af.object('connected').valueChanges().subscribe(console.log);
  }
}
