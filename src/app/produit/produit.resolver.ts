import { ProduitService } from './produit.service';
import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProduitResolver implements Resolve<any> {

  constructor(private produitService: ProduitService) {

  }

  resolve() {
    return this.produitService.getProduits();
  }
}
