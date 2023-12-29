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
  }

  login() {
    this.cerbungService.login(this.username, this.password).subscribe(
      (response: any) => {
        if (response.result === 'success') {
          alert("success")
          this.username = response.username
          this.name = response.username
          localStorage.setItem("app_username",this.username)
          localStorage.setItem("app_name",this.name)
        }
        else {
          alert(response.message)
        }
      });
  }

  logout() {
    this.username = ""
    this.name= ""
    localStorage.removeItem("username")
    localStorage.removeItem("name")  
  }
}