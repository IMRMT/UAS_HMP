import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  users = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtl2KWcvDkOW-PwbBNU27bQ1uFW3mEv4-OD8reCibF&s",
      name: "Theodorus",
      since : "2023",
      like : "200",
      status : "following", 
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtl2KWcvDkOW-PwbBNU27bQ1uFW3mEv4-OD8reCibF&s",
      name: "Farrel",
      since : "2022",
      like : "180",
      status : "following",  
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtl2KWcvDkOW-PwbBNU27bQ1uFW3mEv4-OD8reCibF&s",
      name: "Michael",
      since : "2021",
      like : "160",
      status : "",  
    }
  ]
  constructor() { }
}
