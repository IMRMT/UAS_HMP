import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-notifdetail',
  templateUrl: './notifdetail.page.html',
  styleUrls: ['./notifdetail.page.scss'],
})
export class NotifdetailPage implements OnInit {

  index = 1
  cerbungs: any[] = []
  constructor(private route: ActivatedRoute, private cerbungservice: CerbungserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.index = params['index']
        this.cerbungservice.detailNotification(this.index).subscribe(
          (data) => {
            this.cerbungs = data
          }
        );
      });
  }

}
