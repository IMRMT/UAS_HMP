import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.page.html',
  styleUrls: ['./following.page.scss'],
})
export class FollowingPage implements OnInit {
  search= ""
  cerbungs: any[] = []
  constructor(private cerbungservice: CerbungserviceService) { }

  ngOnInit() {
    this.cerbungservice.cerbungList(this.search).subscribe(
      (data) => {
        this.cerbungs = data
      }
    );
  }
}