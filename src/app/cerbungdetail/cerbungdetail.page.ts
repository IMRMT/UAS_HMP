import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-cerbungdetail',
  templateUrl: './cerbungdetail.page.html',
  styleUrls: ['./cerbungdetail.page.scss'],
})
export class CerbungdetailPage implements OnInit {

  index = 1
  cerbungs:any={};
  paragraf=""
  name=""
  constructor(private route: ActivatedRoute, private cerbungservice: CerbungserviceService) {
    this.name=localStorage.getItem("app_username") ?? ''
   }

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

  addParagraf(){
    this.cerbungservice.addParagraf(this.name,this.index,this.paragraf).subscribe(
      (response:any) => {
        if(response.result == "success"){
          alert("Success")
        }
        else {
          alert(response.message)
        }
      }
    )
  }
}
