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

  index = 0
  constructor(private route:ActivatedRoute, private cerbungservice:CerbungserviceService) { }

  search=""
  accounts:any[] = [];

  ngOnInit() {
    this.cerbungservice.cerbungList(this.search).subscribe((data) => {
      this.cerbungservice = data;
    });
  }

}
