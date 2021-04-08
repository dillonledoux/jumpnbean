import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Contact } from './contact';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    'Content-Type': 'application/json'
  }


  contactUsPost(contact:Contact): Observable<any> {
    const baseURL = "https://w7o4z2xcek.execute-api.us-east-1.amazonaws.com/alpha/contact-us"
    const httpOptions = { 
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify(contact);
    
    return this.http.post(baseURL, body, httpOptions)
  }


}
