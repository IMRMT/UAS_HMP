import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-cerbungdetail',
  templateUrl: './cerbungdetail.page.html',
  styleUrls: ['./cerbungdetail.page.scss'],
})
export class CerbungdetailPage implements OnInit {

  index = 0
  constructor(private route: ActivatedRoute, private cerbungservice: CerbungserviceService) { }

  cerbungs: any[] = [];

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.index = params['index']
        this.cerbungservice.cerbungDetail(this.index).subscribe(
          (data) => {
            this.cerbungs = data
          }
        );
      });
  }
}
