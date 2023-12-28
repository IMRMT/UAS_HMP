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

  }

  login() {
    this.cerbungService.login(this.username, this.password).subscribe(
      (response: any) => {
        if (response.result === 'success') {
          alert("success")
          this.username = response.username
          this.name = response.username
        }
        else {
          alert(response.message)
        }
      });
  }

  logout() {
    this.username = ""
    this.name= ""
  }
}
