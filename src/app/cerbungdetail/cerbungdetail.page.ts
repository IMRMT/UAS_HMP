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
  getpara: any={}
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
        this.cerbungservice.getParagraf(this.index).subscribe(
          (data) => {
            this.getpara = data
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

  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  addFollow(){
    this.cerbungservice.addFollow(this.name,this.index).subscribe(
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
