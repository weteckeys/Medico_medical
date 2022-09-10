import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {

  tabID = 'new';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  segmentChanged(eve) {
      console.log(eve.detail.value);
      this.tabID = eve.detail.value;
  }

  goToOrderDetail(val) {
    const navData: NavigationExtras = {
        queryParams: {
            value: val
        }
    };
    this.router.navigate(['/order-detail'], navData);
  }

  

}
