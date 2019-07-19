import { Component, OnInit } from '@angular/core';
import { IntelligentserviceService } from '../intelligentservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PostIdeaServiceService } from '../post-idea-service.service';

@Component({
  selector: 'app-intelligent-service',
  templateUrl: './intelligent-service.component.html',
  styleUrls: ['./intelligent-service.component.css']
})
export class IntelligentServiceComponent implements OnInit {

  constructor(private intelligentService: IntelligentserviceService,private postIdeaService:PostIdeaServiceService, private route: ActivatedRoute,
    private router: Router) { }
  allServiceProviders: any = [];
  filteredProviders: any = [];
  servProvider: any;
  acceptedServiceProvoders: any = [];
  rejectedServiceProviders: any = [];
  length: any;
  roles: string[] = [];;

  ngOnInit() {
    this.getAllServiceProviders();
    this.roles = this.route.snapshot.paramMap.get('roles').split(',');
  }


  home()
  {
    this.router.navigateByUrl('/home');
  }



  getAllServiceProviders() {
      let roles = this.route.snapshot.paramMap.get('roles').split(',');
      let allVendors = []
      roles.map(e => {
        this.intelligentService.getServiceProviders(e).subscribe(data => {
            data.serviceProvider.map(i => {
              allVendors.push(i);
            })
            this.allServiceProviders = allVendors;
            this.filteredProviders = this.allServiceProviders.filter(e => e.role == roles[0]);
        })
      })
  }



  public accept(value) {
    this.acceptedServiceProvoders.push(value);
   console.log( "acceptedprovoders", this.acceptedServiceProvoders)

   this.postIdeaService.Idea.serviceProviders=this.acceptedServiceProvoders;
   console.log("updated idea",this.postIdeaService.Idea)

 }

   done()
   {
     this.postIdeaService.updateIdea(this.postIdeaService.Idea)
     this.router.navigateByUrl('/home')
   }

   myClick(event) {
    let currentRole = event.tab.textLabel
    console.log(currentRole )
    this.filteredProviders =  this.allServiceProviders.filter(e => e.role == currentRole)
   }


 public reject(value) {
  let index=this.filteredProviders.indexOf(value);
  this.filteredProviders.splice(index,1);
  console.log(this.filteredProviders);
 }

}








