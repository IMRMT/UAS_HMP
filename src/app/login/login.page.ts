import { Component, OnInit } from '@angular/core';
import { AccountserviceService } from '../accountservice.service';
import { AppComponent } from '../app.component';

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


  constructor(private accountservice:AccountserviceService, private appComponent: AppComponent) { 
    this.appComponent.showTabs = false
  }

  ngOnInit() {
    this.account = this.accountservice.accounts
  }

  CheckValid(names: string, passw: string){
    if(names === this.account[0].nama){
      if(passw === this.account[0].password){
        
      this.strvalid = "valid"
      this.route = "/home"
      this.message = "Login Success"
      }
      else if(passw !== this.account[0].password){
      this.strvalid = "invalid"
      this.route = "/login"
      this.message = "Wrong Password"
      }
    }
    else if (names !== this.account[0].nama && passw !== this.account[0].password){ 
      this.strvalid = "invalid"
      this.route = "/login"
      this.message = "Wrong Username and Password"
    }
  }

}
