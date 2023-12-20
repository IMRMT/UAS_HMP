import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  tipeStatus = "mostLike"
  pengguna:any[]=[]
  follow:any[]=[]

  // chunkArray(arr: any[], chunkSize: number): any[][] {
  //   const result = [];
  //   for (let i = 0; i < arr.length; i += chunkSize) {
  //     result.push(arr.slice(i, i + chunkSize));
  //   }
  //   return result;
  // }
  constructor(private userService :UserserviceService) {
    this.follow = this.userService.users.filter(users => users.status === 'following');
   }

  ngOnInit() {
    this.pengguna= this.userService.users
  }

}
