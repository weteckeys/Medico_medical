import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  name = 'Jonh Doe';
  email = 'jonhdoe@gmail.com';
  phone = '9876543212';

  changeName = false;
  changeEmail = false;
  changePhone = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDocList() {
      this.router.navigate(['/doc-list']);
  }

}
