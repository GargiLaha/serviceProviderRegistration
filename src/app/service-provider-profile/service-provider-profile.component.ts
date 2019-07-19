import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from '../registration-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-provider-profile',
  templateUrl: './service-provider-profile.component.html',
  styleUrls: ['./service-provider-profile.component.scss']
})
export class ServiceProviderProfileComponent implements OnInit {

  constructor(private registrationService:RegistrationServiceService, private router:Router, private route:ActivatedRoute) { }



  serviceProviderData:any=[];
  skills = [];
  certifications=[];
  subDomains=[];
  ngOnInit() {

    // this.registrationService.getServiceProvider().subscribe(data=>
    // {
    //   console.log("hiiiiiii",data);
    //   this.serviceProviderData=data;
    //   console.log("hmmm",this.serviceProviderData[0].emailId)
    // });
    
    this.getByEmailId();

  } 

  getByEmailId():void
  {
    const emailId=this.route.snapshot.paramMap.get('sendEmailId');
    console.log("in service-provider..get by email"+emailId);
    this.registrationService.getByEmailIdForServiceProvider(emailId).subscribe((data:any)=>{
      console.log("data fetched.."+ data);
      this.serviceProviderData=data;
      console.log("after getting back from service",this.serviceProviderData.emailId);
    });
  }

  goToDashboard()
  {
    console.log("working",this.serviceProviderData.emailId);
    this.router.navigateByUrl('/serviceDasboard/'+this.serviceProviderData.emailId)
  }
  

}
