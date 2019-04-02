import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';

// import { NavController, NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public navCtrl: NavController, private router: Router, public modalController: ModalController) {
    console.log("this.navParams.data");
    // this.presentModal()
  }
  // async presentModal() {
  //   const modal = await this.modalController.create({
  //     component: RegistrationComponent,
  //     componentProps: { value: 123 }
  //   });
  //   return await modal.present();
  // }
  ngOnInit() { }
  login() {
    this.router.navigate(['home']);
  }
  registration() {
    this.router.navigate(['/register']);
  }
}
