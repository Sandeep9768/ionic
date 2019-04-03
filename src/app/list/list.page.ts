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
  purchase = [];
  constructor(public navCtrl: NavController, private UserService: UserService) {
    // var id = 1
    var data = {
      id: 1
    }
    this.UserService.postAllData('/order/purchase', data)
      .subscribe(response => {
        this.rowdata = response.json()
        console.log(this.rowdata, 'res');
        var d = this.rowdata.Product
        // console.log(d);

        this.rowdata.map(user => {
          var t = user.Product;
          // console.log(t, 'res');
          t.map(t => {
            // console.log(t.Product_id);
            var data = {
              order_id: user.order_id,
              order_date: user.order_date,
              product_id: t.Product_id,
              product_name: t.Product_name,
              product_price: t.Product_price,
              product_url: t.Product_url,
              product_url2: t.Product_url2
            }
            // console.log(data);
            this.purchase.push(data)



          })
        })
        console.log(this.purchase);


      });
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
