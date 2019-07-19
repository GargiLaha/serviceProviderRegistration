import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecentIdeasService {

  constructor(private httpclient: HttpClient) { }

  getRecentIdeas():any{
    return this.httpclient.get("http://localhost:8063/api/v1/ideas");
  }

  getIdeaDetails(value):any{
    console.log(value);
    return this.httpclient.get(`http://localhost:8063/api/v1/idea/${value}`)
  }

  sendToInnovator(title,emailId):any{
    this.httpclient.put(`http://localhost:8060/api/v1/idea/${title}/${emailId}`,{}).subscribe();
    console.log("came");

  }

  getAppliedServiceProviders(title):any
  {
    console.log("here applied people",title)
    return this.httpclient.get(`http://localhost:8060/api/v1//serviceProviders/${title}`);
    console.log("after url")
  }

  approveOrRejectSP(title,emailId,status):any{
this.httpclient.put(`http://localhost:8060/api/v1/serviceProviders/${title}/${emailId}/${status}`,{});
console.log("coming");
  }
}
