import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  doctors = ['General Doctor', 'Skin & Hair', 'Child Care', 'Women\'s Health',
    'Dentists', 'ENT', 'Audiologist' , 'Psychiatrists', 'Radiologist', 'Neurologist'];

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToPharmacy() {
      this.route.navigate(['/pharmacy']);
  }

  goToDoctors() {
      this.route.navigate(['/doctors']);
  }

  goToReminders() {
      this.route.navigate(['/set-reminder']);
  }

  goToEmergancy() {
      this.route.navigate(['/emergancy']);
  }

  goToDoctorList() {
      this.route.navigate(['/doctor-list']);
  }

}
