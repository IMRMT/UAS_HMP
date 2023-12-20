import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountserviceService } from '../accountservice.service';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.page.html',
  styleUrls: ['./preference.page.scss'],
})
export class PreferencePage implements OnInit {

  index = 0
  constructor(private route:ActivatedRoute, private accountservice:AccountserviceService) { }

  accounts:any[] = [];

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.index = params['index']
      }
    )
    this.accounts = this.accountservice.accounts
  }

}
