import { API_URLS } from '../config/api.url.config';
import { HttpClient} from '@angular/common/http';



import { Produit } from '../shared/produit';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits: Produit [] = [];

  constructor(private http: HttpClient) {
  }

  public getProduits(): Observable<any> {
    return this.http.get(API_URLS.produit_url);
  }

  public addProduit(p: Produit): Observable<any> {
    return this.http.post(API_URLS.produit_url, p);
  }

  public updateProduit(p: Produit): Observable<any> {
    return this.http.put(API_URLS.produit_url, p);
  }

  public deleteProduit(id: number): Observable<any> {
    return this.http.delete(API_URLS.produit_url + '/${id}');
  }
}
