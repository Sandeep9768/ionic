import { Component } from '@angular/core';
import { UserService } from '../api/user.service'
// import { NavController } from '@ionic/angular';//
import { NavController, NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from "../login/login.component";
import { Router } from '@angular/router';
import { OrderPage } from '../order/order.page'
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  rowdata: any;
  cart = []
  purchase;
  spinner = true;
  constructor(public toastController: ToastController, public alertController: AlertController, public modalController: ModalController, private UserService: UserService, public navCtrl: NavController, private router: Router) {
    // const id = 2
    console.log('calll');

    this.presentModal()
    this.UserService.alldata('/product/product')
      .subscribe(response => {
        this.rowdata = response.json()
        this.spinner = false
        // console.log(this.rowdata, 'res');

      });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: LoginComponent,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }


  addcart(item, event, index) {
    if (event.checked) {
      const data = {
        index: index,
        id: 2,
        Product_id: item.Product_id
      }
      this.cart.push(data)

      console.log('cart', this.cart);
    }
    else {

      console.log("uncheck");
      console.log(this.cart);
      var index1 = this.cart.findIndex(obj => obj.index == index);
      var getIndex = index1;
      // console.log("Asd", getIndex);

      if (getIndex > -1) {
        this.cart.splice(getIndex, 1);
        console.log(this.cart);
      }

    }






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
                console.log(response.json(), 'response');
                this.presentToastWithOptions()

              });
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Product By Successfully',
      showCloseButton: true,
      position: 'top',
      closeButtonText: 'Done'
    });
    toast.present();
  }




}
