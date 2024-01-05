import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountserviceService } from '../accountservice.service';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.page.html',
  styleUrls: ['./preference.page.scss'],
})
export class PreferencePage implements OnInit {

  search=""
  akuns:any[] = [];
  password=""
  img=""
  index = 0
  newPassOne=""
  newPassTwo=""

  
  constructor(private route:ActivatedRoute, private cerbungservice:CerbungserviceService) {
    this.password=localStorage.getItem("app_password") ?? ''
    this.search=localStorage.getItem("app_username") ?? ''
   }

  toggleTheme(event:any){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','light');
    }else{
      document.body.setAttribute('color-theme','dark');
    }
  }

  ngOnInit() {
    this.cerbungservice.userList(this.search).subscribe((data) => {
      this.akuns= data;
    });
  }

  updatePass(){
    if(this.newPassOne === this.newPassTwo){
      this.password = this.newPassTwo
      this.cerbungservice.updatePass(this.search,this.password).subscribe(
        (response:any) => {
          if(response.result == "success"){
            alert("Success")
          }
          else {
            alert(response.message)
          }
        }
      )
    } else{
      alert("Password tidak sama")
    }

  }
}
