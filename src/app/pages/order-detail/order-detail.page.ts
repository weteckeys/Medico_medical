import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {

  orderType;
  constructor(private route: ActivatedRoute, private navCtrl: NavController) {
      this.route.queryParams.subscribe(data => {
          console.log(data);
          this.orderType = data.value;
      })
  }

  ngOnInit() {
  }

  goBack() {
      this.navCtrl.back()
  }

}
