import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  strvalid = "invalid"
  route = "/login"
  message = ""
  account:any[] = []
  // account = [
  //   {
  //     nama: "admin",
  //     password: "admin" 
  //   }
  // ]
  enteredNama: string = "";
  enteredPassword: string = "";


  constructor(private cerbungservice:CerbungserviceService, private appComponent: AppComponent) {
    this.enteredNama = localStorage.getItem("app_username") ?? ''
    this.enteredPassword = localStorage.getItem("app_password") ?? ''
  }

  ngOnInit() {
    // this.account = this.cerbungservice.accounts
  }

  // CheckValid(names: string, passw: string){
  //   if(names === this.account[0].nama){
  //     if(passw === this.account[0].password){
        
  //     this.strvalid = "valid"
  //     this.route = "/home"
  //     this.message = "Login Success"
  //     }
  //     else if(passw !== this.account[0].password){
  //     this.strvalid = "invalid"
  //     this.route = "/login"
  //     this.message = "Wrong Password"
  //     }
  //   }
  //   else if (names !== this.account[0].nama && passw !== this.account[0].password){ 
  //     this.strvalid = "invalid"
  //     this.route = "/login"
  //     this.message = "Wrong Username and Password"
  //   }
  // }
  login() {
    this.cerbungservice.login(this.enteredNama, this.enteredPassword).subscribe(
      (response: any) => {
        if (response.result === 'success') {
          alert("success")
          this.enteredNama = response.fullname
          localStorage.setItem("app_username", this.enteredNama)
          localStorage.setItem("app_password", this.enteredPassword)
        }
        else {
          alert(response.message)
        }
      }
    );
  }
  logout() {
    this.enteredNama = ""
    this.enteredPassword = ""
    localStorage.removeItem("enteredNama")
    localStorage.removeItem("enteredPassword")
  }
}
