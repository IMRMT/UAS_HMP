import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  notifs:any[]=[]
  username=""

  constructor(private cerbungservice:CerbungserviceService, private route: ActivatedRoute) {
    this.username=localStorage.getItem("app_username") ?? ''
   }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.cerbungservice.sendNotification(this.username).subscribe(
          (data) => {
            this.notifs = data
          }
        );}
    )};
}
