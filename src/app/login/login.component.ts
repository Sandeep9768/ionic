import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';
// import { NavController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public navCtrl: NavController, private router: Router) {
    // console.log(this.navParams.data);

  }

  ngOnInit() { }
  login() {
    this.router.navigate(['home']);
  }
  registration() {
    this.router.navigate(['/register']);
  }
}
