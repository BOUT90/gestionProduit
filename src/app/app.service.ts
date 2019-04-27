import { API_URLS } from './config/api.url.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  authenticated = false;

  constructor(private http: HttpClient) { }

  authentication(credentials, callback) {
    if (credentials ) {
      const token = btoa(credentials.userName + ':' + credentials.password);

      const httpOptions = {
        headers: new HttpHeaders({
          authentication : 'basic' + token
        })
      };

      this.http.get(API_URLS.user_url, httpOptions).subscribe(response => {
        if (response['name']) {
          this.authenticated = true;
        } else {
          this.authenticated = false;
        }
        return callback && callback();
      });
    }
  }
}
