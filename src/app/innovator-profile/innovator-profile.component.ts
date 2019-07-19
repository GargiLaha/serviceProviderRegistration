import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from '../registration-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PostIdeaComponent } from '../post-idea/post-idea.component';

@Component({
  selector: 'app-innovator-profile',
  templateUrl: './innovator-profile.component.html',
  styleUrls: ['./innovator-profile.component.scss']
})
export class InnovatorProfileComponent implements OnInit {

  constructor(private registrationService:RegistrationServiceService,private router:Router,private route:ActivatedRoute, public dialog: MatDialog) { }
  
  innovatorprofiledashboarddata:any =[];
  
  openDialog(): void {
    const dialogRef = this.dialog.open(PostIdeaComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      
      console.log('The dialog was closed');
    });
  }
  ngOnInit() {
    // this.registrationService.getInnovatorProfile().subscribe(data=>
    //   {
    //     console.log(data);
    //     this.innovatorprofiledashboarddata=data;
    //   });
    // }
    this.getByEmailId(); 
  }
  
  getByEmailId():void
  {
    const emailId=this.route.snapshot.paramMap.get('sendEmailId');
    console.log("in innovator profile get by email"+emailId);

    this.registrationService.getByEmailIdForInnovatorProfile(emailId).subscribe((data:any)=>{
      console.log("data fetched.."+ data);
      this.innovatorprofiledashboarddata=data;
      console.log("after getting back from service",this.innovatorprofiledashboarddata.emailId)
    });
  }
  
  goToDashboard():any{
    const emailId=this.route.snapshot.paramMap.get('sendEmailId');
this.router.navigateByUrl('/innovatorDashboard/'+emailId);
  }

}
