import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  appPages = [
    {
      url: 'tabs/home',
      title: 'Home'
    },
    {
      url: 'appoinments',
      title: 'My Appoinments'
    },
    {
      url: '/my-orders',
      title: 'My Orders'
    },
    {
      url: 'set-reminder',
      title: 'Reminders'
    },
    {
      url: 'documents',
      title: 'Medical Records'
    },
    {
      url: 'chat',
      title: 'Chats'
    },
    {
      url: '/settings',
      title: 'Profile'
    },
  ];
  selectedIndex: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }

  logout() {
    this.router.navigate(['/']);
  }
}
