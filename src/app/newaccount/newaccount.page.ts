import { Component, OnInit } from '@angular/core';
import { AccountserviceService } from '../accountservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.page.html',
  styleUrls: ['./newaccount.page.scss'],
})
export class NewaccountPage implements OnInit {

  alertButtons = "OK"
  new_name = ""
  new_conf = ""
  new_url = ""
  new_pass = ""


  constructor(private accountservice:AccountserviceService,private router:Router) { }

  ngOnInit() {
  }

  submitAccount() {
    if (this.new_conf === this.new_pass){
      this.accountservice.addAccount(this.new_name, this.new_url, this.new_pass)
      this.new_name=""
      this.new_url=""
      this.new_pass=""
      this.router.navigate(['/login']); 
    }
  }
}
