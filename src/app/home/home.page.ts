import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  tipeGenre = "All";
  search= "";
  result= "";
  cerbungs: any[] = [];


  // chunkArray(arr: any[], chunkSize: number): any[][] {
  //   const result = [];
  //   for (let i = 0; i < arr.length; i += chunkSize) {
  //     result.push(arr.slice(i, i + chunkSize));
  //   }
  //   return result;
  // }

  loadCerbungData() {
    this.cerbungservice.cerbungList(this.search).subscribe((data) => {
      this.cerbungs = data;
    });
  }


  constructor(private cerbungservice: CerbungserviceService) { }

  ngOnInit() {
    // this.loadCerbungData();
    if(this.search==''){
      this.result='%%'
    }else{
      this.result='%' + this.search + '%'
    }
    this.cerbungservice.cerbungList(this.result).subscribe( //untuk yg Observe di foodservice
      (data) => {
        this.cerbungs = data //diisi dengan data dari webservice
      }
    );
  }

  handleInput(event:any){
    const query = event.target.value.toLowerCase();

    if(query==''){
      this.result='%%'
    }else{
      this.result='%' + query + '%'
    }
    this.cerbungservice.cerbungList(this.result).subscribe( //untuk yg Observe di foodservice
      (data) => {
        this.cerbungs = data //diisi dengan data dari webservice
      }
    );
  }
}
