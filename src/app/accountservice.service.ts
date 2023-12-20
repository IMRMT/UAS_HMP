import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {

  accounts = [
    {
      nama: "admin",
      password: "admin",
      url: "" 
    }
  ]
  constructor() { }
  addAccount(p_name:string,p_pass:string,p_url:string) {
    this.accounts.push({
      nama:p_name,
      password: p_pass,
      url: p_url
    })
  }
}
