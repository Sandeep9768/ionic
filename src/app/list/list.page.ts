import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { UserService } from '../api/user.service'
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  message: string;
  rowdata
  constructor(public navCtrl: NavController, private UserService: UserService) {
    this.UserService.alldata('/product/product')
      .subscribe(response => {
        this.rowdata = response.json()
        // console.log(this.rowdata, 'res');

      });
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
