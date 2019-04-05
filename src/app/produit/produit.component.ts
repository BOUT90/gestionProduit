import { Component, OnInit } from '@angular/core';
import { ProduitMocService } from './produit.mock.service';
import { Produit } from '../shared/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: Produit[];
  constructor(private prduitMocService: ProduitMocService) { }

  ngOnInit() {
    this.produits = this.prduitMocService.getProduits();
  }

}
