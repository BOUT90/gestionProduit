import { Produit } from '../shared/produit';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProduitMocService {

  produits: Produit [] = [];

  constructor() {
    const p1: Produit = new Produit('Livre', 50 , 20);
    const p2: Produit = new Produit('Cahier', 250 , 50);
    const p3: Produit = new Produit('Stylo', 247 , 357);
    this.produits.push(p1);
    this.produits.push(p2);
    this.produits.push(p2);
  }

  public getProduits() {
    return this.produits;
  }
}
