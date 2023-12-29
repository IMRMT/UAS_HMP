import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  tipeGenre = "All";
  bookTitle = "";
  cerbungs: any[] = [];
  filteredCerbungs: any[] = [];  // Introduce a new property for filtered cerbungs

  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  loadCerbungData() {
    this.cerbungservice.cerbungList().subscribe((data) => {
      this.cerbungs = data;
    });
  }


  constructor(private cerbungservice: CerbungserviceService) { }

  ngOnInit() {
    this.loadCerbungData();
  }

  filterCerbungTitle() {
    if (this.tipeGenre === 'All') {
      this.filteredCerbungs = this.cerbungs.filter(cerbung => {
        return cerbung.judul.toLowerCase().includes(this.bookTitle.toLowerCase());
      });
    } else {
      this.filteredCerbungs = this.cerbungs.filter(cerbung => {
        return cerbung.judul.toLowerCase().includes(this.bookTitle.toLowerCase()) && cerbung.genre === this.tipeGenre;
      });
    }
  }
}
