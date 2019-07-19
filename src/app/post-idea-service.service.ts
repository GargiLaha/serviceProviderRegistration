import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostIdeaServiceService {

  Idea:any = {}

  constructor(private httpclient: HttpClient) { }

  postIdea(value): any{
    console.log("in post idea service")
    this.httpclient.post("http://localhost:8063/api/v1/saved",value).subscribe();
    console.log("after the post url")
    
  }

  getIdeas():any{
        return this.httpclient.get("http://localhost:8063/api/v1/ideas")

  }


  // getServiceProvider():any{
  //   console.log("getting")
  //   return this.http.get("http://localhost:8077/api/v1/serviceproviders");
  // }

  // addServiceProvider(value):any{
  //   this.http.post("http://localhost:8077/api/v1/serviceprovider",value).subscribe();
  //   console.log("came");

  // }

  updateIdea(value):any{
    console.log("in post idea service value is=",value)
    return this.httpclient.put("http://localhost:8063/api/v1/idea",value).subscribe();
  } 
}
