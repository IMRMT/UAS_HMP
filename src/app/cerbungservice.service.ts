import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CerbungserviceService {

  constructor(private http: HttpClient) { }

  cerbungList(): Observable<any> {
    return this.http.get("https://ubaya.me/hybrid/160421144/cerbungs/cerbungs.php");
  }

  cerbungDetail(id: number): Observable<any> {
    return this.http.get("https://ubaya.me/hybrid/160421144/cerbungs/cerbung_detail.php?id=" + id)
  }

  addCerbung(c_title: string,  c_desc: string, c_url: string, c_genre: string, c_access: number,c_paragraf: string, c_like:number) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('judul', c_title);
    body.set('deskripsi', c_desc);
    body.set('genre', c_genre);
    body.set('paragraf', c_paragraf);
    body.set('url_cerbung', c_url);
    body.set('akses', c_access.toString());
    body.set('like', c_like.toString());
    const urlEncodedData = body.toString();
    return this.http.post(
      "https://ubaya.me/hybrid/160421144/cerbungs/new_cerbung.php", urlEncodedData, { headers });
  }

  signUp(c_username: string, c_pass: string, c_url: string,c_like: number){
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', c_username);
    body.set('password', c_pass);
    body.set('url', c_url);
    body.set('like', c_like.toString());
    const urlEncodedData = body.toString();
    return this.http.post(
      "https://ubaya.me/hybrid/160421144/cerbungs/signup.php", urlEncodedData, { headers });
  }

  login(c_username: string, c_pass: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', c_username);
    body.set('password', c_pass);
    const urlEncodedData = body.toString();
    return this.http.post(
      "https://ubaya.me/hybrid/160421144/cerbungs/login.php", urlEncodedData, { headers });
  }

  addParagraf(c_storyTeller: string,  c_idCerbung: number, c_paragraf: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('story_teller', c_storyTeller);
    body.set('idc', c_idCerbung.toString());
    body.set('paragraf', c_paragraf);
    const urlEncodedData = body.toString();
    return this.http.post(
    "https://ubaya.me/hybrid/160421144/cerbungs/new_cerbung.php", urlEncodedData, { headers });
  }
}
