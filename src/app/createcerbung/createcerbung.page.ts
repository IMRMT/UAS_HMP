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
  c_access = ""
  c_paragraf = ""
  c_author=""
  c_fkusername=""
  arr_genre:string[] = []

  characterCount: number = 0;
  agreedToTerms: boolean = false;
  constructor(private cerbungservice:CerbungserviceService, private router:Router, private user: AccountserviceService) { }

  ngOnInit() {
    this.arr_genre = ["Kocak","Horror","Aksi"]
    this.c_fkusername=localStorage.getItem("app_username") ?? ''
  }

  resetForm() {
    this.jenistampilan = 'first';
    this.c_title = "";  
    this.c_desc = "";
    this.c_url ="";
    this.c_genre ="";
    this.c_access= "Public";
    this.c_paragraf="";
    this.c_fkusername="";
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
      if( this.c_access == "Public" ||this.c_paragraf == ''){
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
      this.cerbungservice.addCerbung(this.c_title, this.c_desc, this.c_url, this.c_genre,
        this.c_access, this.c_paragraf, this.c_fkusername).subscribe(
          (response: any) => {
            if (response.result === 'success') {
              alert(response.message);
            }
            else {
              alert(response.message);
            }
          }
        )
        this.c_title = ""
        this.c_desc = ""
        this.c_url = ""
        this.c_genre = ""
        this.c_access = ""
        this.c_paragraf = ""
        this.c_author = ""
        this.c_fkusername=""
        this.router.navigate(['/home']);
        this.resetForm();
    }
  }

}
