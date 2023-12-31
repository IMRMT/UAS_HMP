import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CerbungserviceService {

  constructor(private http: HttpClient) { }

  cerbungList(search: string): Observable<any> {
    return this.http.get("https://ubaya.me/hybrid/160421144/cerbungs/cerbungs.php?search="+search);
  }

  userList(search: string): Observable<any> {
    return this.http.get("https://ubaya.me/hybrid/160421144/cerbungs/users.php?search="+search);
  }

  cerbungDetail(id: number): Observable<any> {
    return this.http.get("https://ubaya.me/hybrid/160421144/cerbungs/cerbung_detail.php?id="+id)
  }

  cerbungFollowing(name: string):Observable<any>{
    return this.http.get("https://ubaya.me/hybrid/160421144/cerbungs/following.php?name="+name)
  }

  getParagraf(id:number): Observable<any> {
    return this.http.get("https://ubaya.me/hybrid/160421144/cerbungs/get_paragraf.php?id="+id)
  }

  displayMostLike(): Observable<any> {
    return this.http.get("https://ubaya.me/hybrid/160421144/cerbungs/mostLike.php")
  }

  displayFollow(name:string): Observable<any> {
    return this.http.get("https://ubaya.me/hybrid/160421144/cerbungs/followUser.php?name="+name)
  }

  sendNotification(name:string): Observable<any> {
    return this.http.get("https://ubaya.me/hybrid/160421144/cerbungs/notification.php?name="+name)
  }

  detailNotification(id:number): Observable<any> {
    return this.http.get("https://ubaya.me/hybrid/160421144/cerbungs/notifdetail.php?id="+id)
  }

  addCerbung(c_title: string,  c_desc: string, c_url: string, c_genre: string, c_access: string,c_paragraf: string, c_username:string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('judul', c_title);
    body.set('deskripsi', c_desc);
    body.set('genre', c_genre);
    body.set('paragraf', c_paragraf);
    body.set('url_cerbung', c_url);
    body.set('akses', c_access);
    body.set('fk_username', c_username);
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
    "https://ubaya.me/hybrid/160421144/cerbungs/add_paragraf.php", urlEncodedData, { headers });
  }

  addFollow(c_akun_username:string,c_idCerbung: number ){
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('akun_username', c_akun_username);
    body.set('cerbung_idcerbung', c_idCerbung.toString());
    const urlEncodedData = body.toString();
    return this.http.post(
    "https://ubaya.me/hybrid/160421144/cerbungs/add_followingCerbung.php", urlEncodedData, { headers });
  }

  updatePass(c_username:string,c_password:string){
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', c_username);
    body.set('password', c_password);
    const urlEncodedData = body.toString();
    return this.http.post(
    "https://ubaya.me/hybrid/160421144/cerbungs/update_password.php", urlEncodedData, { headers });
  }
}
