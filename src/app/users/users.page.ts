import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { ActivatedRoute, Route } from '@angular/router';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  tipeStatus = "mostLike"
  like:any[]=[]
  follow:any[]=[]
  username=""
  
  constructor(private cerbungservice:CerbungserviceService, private route: ActivatedRoute) {
    // this.follow = this.userService.users.filter(users => users.status === 'following');
    this.username=localStorage.getItem("app_username") ?? ''
   }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.cerbungservice.displayMostLike().subscribe(
          (data) => {
            this.like = data
          }
        );
        this.cerbungservice.displayFollow(this.username).subscribe(
          (data) => {
            this.follow = data
          }
        );
      });

  }

}
