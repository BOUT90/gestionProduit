import { ProduitService } from './produit.service';

import { Component, OnInit } from '@angular/core';

import { Produit } from '../shared/produit';
import { FormGroup, FormControl, Validator, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: Produit[];
  operation: 'add';
  selectedProduit: Produit;
  produitForm: FormGroup;

  constructor(private prduitService: ProduitService, private fb: FormBuilder, private route: ActivatedRoute) {

    this.createForm();
   }

  ngOnInit() {
    this.initProduit();
    this.produits = this.route.snapshot.data.produits;

  }

  createForm() {
    this.produitForm = this.fb.group({

      ref: ['', Validators.required],
      quantite: '',
      prixUnitaire: ''

    });
  }
  loadProduits() {
    this.prduitService.getProduits().subscribe(
      data => {
        this.produits = data;
      }, error => {
        console.log('An error was occured' + error);
      }, () => {
        console.log('loading produits was done');
      }
    );
  }

  addProduit() {

    const p = this.produitForm.value;

    this.prduitService.addProduit(p).subscribe(
      res => {
        this.initProduit();
        this.loadProduits();
      }
    );
  }

  updateProduit() {
    const p = this.produitForm.value;

    this.prduitService.updateProduit(this.selectedProduit).subscribe(
      res => {
        this.initProduit();
        this.loadProduits();
      }
    );
  }

  deleteProduit() {
    console.log(this.selectedProduit.id);
    this.prduitService.deleteProduit(this.selectedProduit.id).subscribe(
      res => {
        this.initProduit();
        this.loadProduits();
      }
    );
  }

  initProduit() {
      this.createForm();
      this.selectedProduit = new Produit();
  }
}
