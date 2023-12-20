import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  tipeGenre="All";
  bookTitle="";
  cerbungs:any[] = []

  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }
  constructor(private cerbungservice:CerbungserviceService, private appComponent : AppComponent) { 
    this.appComponent.showTabs = true
  }
  
  ngOnInit() {
    this.cerbungs = this.cerbungservice.cerbungs
  }

  filterCerbungTitle() {
    if (this.tipeGenre === 'All') {
      this.cerbungs = this.cerbungservice.cerbungs.filter(cerbung => {
        return cerbung.title.toLowerCase().includes(this.bookTitle.toLowerCase());
      });
    } else {
      this.cerbungs = this.cerbungservice.cerbungs.filter(cerbung => {
        return cerbung.title.toLowerCase().includes(this.bookTitle.toLowerCase()) && cerbung.genre === this.tipeGenre;
      });
    }
  }
}
