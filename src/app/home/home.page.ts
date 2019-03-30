import { Component } from '@angular/core';
import { UserService } from '../api/user.service'
// import { NavController } from '@ionic/angular';//
import { NavController, NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from "../login/login.component";
import { Router } from '@angular/router';
import { OrderPage } from '../order/order.page'
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  rowdata: any;
  cart = []
  purchase
  constructor(public alertController: AlertController, public modalController: ModalController, private UserService: UserService, public navCtrl: NavController, private router: Router) {
    // const id = 2
    this.UserService.alldata('/product/product')
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

    const data = {
      id: 2,
      Product_id: item.Product_id
    }
    this.cart.push(data)
    console.log(this.cart);

    // this.purchase = true
    // console.log(item);
    // this.cart.push(item)
    // var customer_id = 2;

    // console.log('cart', this.cart);


    // this.router.navigate(['/', { data: this.cart }]);

  }
  demo() {
    this.presentAlertConfirm();
  }
  async presentAlertConfirm() {
    this.cart
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');

          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log(this.cart, 'g');
            this.UserService.postAllData('/order/order', this.cart)
              .subscribe(response => {
                // this.rowdata = response.json()
                console.log(response);

              });
          }
        }
      ]
    });

    await alert.present();
  }



}
