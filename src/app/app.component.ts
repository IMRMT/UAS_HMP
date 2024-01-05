import { Component } from '@angular/core';
import { CerbungserviceService } from './cerbungservice.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  username = ""
  password = ""
  name = ""

  constructor(private cerbungService: CerbungserviceService) {
    this.username=localStorage.getItem("app_username") ?? ''
    this.name=localStorage.getItem("app_name") ?? ''
    this.password=localStorage.getItem("app_password") ?? ''
  }

  login() {
    this.cerbungService.login(this.username, this.password).subscribe(
      (response: any) => {
        if (response.result === 'success') {
          alert("success")
          this.username = response.username
          this.name = response.username
          this.password
          localStorage.setItem("app_username",this.username)
          localStorage.setItem("app_name",this.name)
          localStorage.setItem("app_password",this.password)
        }
        else {
          alert(response.message)
        }
      });
  }

  logout() {
    this.username = ""
    this.name= ""
    this.password
    localStorage.removeItem("username")
    localStorage.removeItem("name")
    localStorage.removeItem("password")
  }
}