import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  message: string;
  constructor(public navCtrl: NavController, private navParams: NavParams) {
    console.log('hhh');

    this.message = this.navParams.get('data');
    console.log(this.message);

  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
