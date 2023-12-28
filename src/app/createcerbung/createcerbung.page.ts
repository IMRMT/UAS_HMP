import { Component, OnInit } from '@angular/core';
import { CerbungserviceService } from '../cerbungservice.service';
import { Router } from '@angular/router';
import { AccountserviceService } from '../accountservice.service';

@Component({
  selector: 'app-createcerbung',
  templateUrl: './createcerbung.page.html',
  styleUrls: ['./createcerbung.page.scss'],
})
export class CreatecerbungPage implements OnInit {

  jenistampilan = "first"
  alertButtons = "OK"
  c_title = ""
  c_desc = ""
  c_url = ""
  c_genre=""
  c_access = 0
  c_paragraf = ""
  c_author=""
  c_like= 0
  arr_genre:string[] = []

  characterCount: number = 0;
  agreedToTerms: boolean = false;
  constructor(private cerbungservice:CerbungserviceService, private router:Router, private user: AccountserviceService) { }

  ngOnInit() {
    this.arr_genre = ["Kocak","Horror","Aksi"]
  }

  submitCerbung() {
    this.cerbungservice.addCerbung(
      this.c_title,  
      this.c_desc, 
      this.c_url, 
      this.c_genre, 
      this.c_access,
      this.c_paragraf, 
      this.c_like )
      this.router.navigate(['/home']);
  }

  resetForm() {
    this.jenistampilan = 'first';
    this.c_title = "";  
    this.c_desc = "";
    this.c_url ="";
    this.c_genre ="";
    this.c_access=1;
    this.c_paragraf=""; 
    this.c_like= 0;
    this.agreedToTerms=false;
  }

  nextSection(section: string) {
    if(this.jenistampilan == "first"){
      if( this.c_title == '' || this.c_desc == ''|| this.c_url == ''|| this.c_genre == ''){
        alert("Mohon isi data yang kosong !")
      }else{
        this.jenistampilan = section;
      }
    } else if(this.jenistampilan =="second"){
      if( this.c_access == 1 ||this.c_paragraf == ''){
        alert("Mohon isi data yang kosong !")
      }else{
        this.jenistampilan = section;
      }
    }

  }

  prevSection(section: string) {
    this.jenistampilan = section;
  }

  countCharacters(event: any) {
    this.characterCount = event.target.value.length;
  }

  publishCerbung() {
    if (this.agreedToTerms) {
      this.cerbungservice.addCerbung(this.c_title,this.c_desc,this.c_url,this.c_genre,this.c_access,this.c_paragraf,this.c_like);
      this.router.navigate(['/home']);
      this.resetForm();
    }
  }

}
