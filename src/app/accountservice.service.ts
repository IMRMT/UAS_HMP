import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {

  constructor(private http: HttpClient) { }
  
  addAccount(c_name:string,c_pass:string,c_url:string, c_like: number) {
    // this.accounts.push({
    //   nama:p_name,
    //   password: p_pass,
    //   url: p_url,
    //   like: p_like
    // })
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('nama', c_name);
    body.set('password', c_pass);
    body.set('url', c_url);
    body.set('like', c_like.toString());
    const urlEncodedData = body.toString();
    return this.http.post(
      "https://ubaya.me/hybrid/160421144/cerbungs/signup.php", urlEncodedData, { headers });
  }
}
