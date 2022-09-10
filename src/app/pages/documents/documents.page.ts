import { UploadDocumentPage } from './../upload-document/upload-document.page';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {

  constructor(private router: Router, private modalCtrl: ModalController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  async goToUploadDocuments() {
      const modal = await this.modalCtrl.create({
        component: UploadDocumentPage,
        cssClass: 'custom-modal'
      });
      return await modal.present();
  }
  
}
