import { Component } from '@angular/core';
import { UserService } from '../api/user.service'
// import { NavController } from '@ionic/angular';//
import { NavController, NavParams } from '@ionic/angular';
import { LoginComponent } from "../login/login.component";
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  rowdata: any;
  cart = []
  constructor(private UserService: UserService, public navCtrl: NavController, private router: Router) {
    // const id = 2
    this.UserService.alldata()
      .subscribe(response => {
        this.rowdata = response.json()
        console.log(this.rowdata);

        // console.log(response.json());
        // this.rowdata = JSON.parse(JSON.stringify(response));
        // console.log(this.rowdata.Product_id);

        // if (JSON.parse(response.text())) {


        //   alert('Successfully Uploaded');
        // }
        // else {
        //   alert('Error Uploading');
        // }
      });
  }
  addcart(item) {
    console.log(item);
    this.cart.push(item)
    console.log('cart', this.cart);
    this.router.navigate(['/list', { data: this.cart }]);

  }
}
