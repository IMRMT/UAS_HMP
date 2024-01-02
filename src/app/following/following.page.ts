import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.page.html',
  styleUrls: ['./following.page.scss'],
})
export class FollowingPage implements OnInit {
  jenistampilan = "card"
  name= ""
  cerbungs: any[] = []
  constructor(private cerbungservice: CerbungserviceService) { 
    this.name=localStorage.getItem("app_username") ?? ''
  }

  ngOnInit() {
    this.cerbungservice.cerbungFollowing(this.name).subscribe(
      (data) => {
        this.cerbungs = data
      }
    );
  }
}