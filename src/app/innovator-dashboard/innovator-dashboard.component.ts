import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationServiceService } from '../registration-service.service';
import { MatDialog } from '@angular/material';
import { PostIdeaComponent } from '../post-idea/post-idea.component';
import { getTreeMultipleDefaultNodeDefsError } from '@angular/cdk/tree';
import { PostIdeaServiceService } from '../post-idea-service.service';

@Component({
  selector: 'app-innovator-dashboard',
  templateUrl: './innovator-dashboard.component.html',
  styleUrls: ['./innovator-dashboard.component.scss']
})
export class InnovatorDashboardComponent implements OnInit {

  constructor(private registrationService: RegistrationServiceService, private router: Router, private route: ActivatedRoute, public dialog: MatDialog) { }

  innovatorprofiledashboarddata: any = [];
  ideaData: any = [];
  nopost: any;

  //  openDialog(): void {
  //    const dialogRef = this.dialog.open(PostIdeaComponent, {
  //      width: '800px',
  //    });

  //    dialogRef.afterClosed().subscribe(result => {

  //      console.log('The dialog was closed');
  //    });
  //  }
  ngOnInit() {
    // this.registrationService.getInnovatorProfile().subscribe(data=>
    //   {
    //     console.log(data);
    //     this.innovatorprofiledashboarddata=data;
    //   });
    // }
    console.log("Before calling the function:", this.ideaData);

    this.getByEmailId();
    this.getIdeasPostedByInnovator();
  }



  getByEmailId(): void {
    const emailId = this.route.snapshot.paramMap.get('sendEmailId');
    console.log("in innovator profile getbyemail--" + emailId);
    this.registrationService.getByEmailIdForInnovatorProfile(emailId).subscribe((data: any) => {
      console.log("data fetched..", data);
      if (data == null) {
        console.log("No data Obtained...");
      }
      this.innovatorprofiledashboarddata = data;
      console.log("after getting back from service", this.innovatorprofiledashboarddata.emailId)
    });
  }

  routeDetail(): any {
    const emailId = this.route.snapshot.paramMap.get('sendEmailId');
    console.log("in innovator dashboard routeDetails" + emailId);

    this.router.navigateByUrl('/postIdea/' + emailId);
  }

  goToProfile(): void {
    const emailId = this.route.snapshot.paramMap.get('sendEmailId');
    this.router.navigateByUrl('/innovatorProfile/' + emailId);
  }

  //  getIdeasPostedByInnovator():any{
  //   const emailId=this.route.snapshot.paramMap.get('sendEmailId');
  //   console.log("in innovator dashboard getIdeasPostedByInnovator "+emailId);
  //   this.registrationService.getIdeasPostedByInnovator(emailId).subscribe((dataOfIdea)=>{
  //     console.log("after")
  //   })
  //  }

  getIdeasPostedByInnovator(): any {
    const emailId = this.route.snapshot.paramMap.get('sendEmailId');
    console.log("in innovator dashboard get by email " + emailId);
    this.registrationService.getIdeasPostedByInnovator(emailId).subscribe((data: any) => {
      console.log("data fetched..from getideapostedbyinnovator..", data);
      this.ideaData = data;
      // console.log("see data.0. ", this.ideaData[0]);
      // console.log("see data.1. ", this.ideaData[0].title);
      if(this.ideaData.length==0)
      {
        console.log("Testing...if ");
        this.nopost = "YOU HAVE NOT POSTED ANY IDEAS YET";
      }
    });

  }

  getAllIdeaDetail(value):any{
    console.log("this is the title"+ value);
    this.router.navigateByUrl('/ideaDetail/'+value);
  }



}