import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CerbungserviceService {

  cerbungs = [
    {
      title: "Rahasia Terkunci di Perpustakaan Kuno",
      url: "https://cdn0-production-images-kly.akamaized.net/PQSxrArjnGsvtGXt58xYi5NRTTU=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1017658/original/035927600_1444628523-kpl-640x386.jpg",
      desc : '"Rahasia Terkunci di Perpustakaan Kuno" mengisahkan tentang seorang mahasiswa bernama Alex yang secara tak sengaja menemukan sebuah buku kuno yang misterius di perpustakaan universitasnya.',
      genre : "Aksi", 
      access: "",
      paragraf : "",
      author : "Theodorus RH",
      date : "13/07/2022",
    },
    {
      title: "Rahasia banteng merah",
      url: "https://asset.kompas.com/crops/gPeOWFA3DUFaCuYq0NhrzsdXB7E=/0x0:779x519/750x500/data/photo/2021/10/15/61698c7aece86.jpg",
      desc : '"merah adalah kunci kemenangan.',
      genre : "Horror",
      access : "",
      paragraf : "",
      author : "Vinsent Farrel",
      date : "07/09/2023",
    },
    {
      title: "Manusia setengah salmon",
      url: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/11/29/792355515.jpg",
      desc : '"Manusia dengan insang salmon.',
      genre : "Kocak",
      access : "",
      paragraf : "",
      author : "Michael Timonuli",
      date : "29/03/2021",
    }
  ]
  constructor() { }
  addCerbung(c_title: string,  c_desc: string, c_url: string, c_genre: string, c_access: string, c_paragraf: string, c_author:string, c_date:string) {
    this.cerbungs.push({
      title: c_title,
      desc: c_desc,
      url: c_url,
      genre: c_genre,
      access: c_access,
      paragraf: c_paragraf,
      author: c_author,
      date: c_date,
    })
  }
}
