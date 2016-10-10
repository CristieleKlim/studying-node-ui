import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Marca } from '../../models/marca';
import { MarcaProvider } from '../../providers/marca';

@Component({
  selector: 'page-marca',
  templateUrl: 'marca.html'
})
export class MarcaPage {

  marcas: Marca[];


  constructor(
    public navCtrl: NavController,
    private marcaProvider: MarcaProvider) {

      marcaProvider.findAll().subscribe(marcas => {
        this.marcas = marcas;
      })

    }

  ionViewDidLoad() {
    console.log('Hello Brand Page');
  }

}
