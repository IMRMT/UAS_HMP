import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-respond',
  templateUrl: './respond.page.html',
  styleUrls: ['./respond.page.scss'],
})
export class RespondPage implements OnInit {

  constructor(private userService: UserserviceService) { }

  user:any[]=[]

  ngOnInit() {
    this.user = this.userService.users
  }

}
