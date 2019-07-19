import { Component, OnInit } from '@angular/core';
import { RecentIdeasService } from '../recent-ideas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-ideas',
  templateUrl: './all-ideas.component.html',
  styleUrls: ['./all-ideas.component.scss']
})
export class AllIdeasComponent implements OnInit {

  constructor(private recentideas: RecentIdeasService ,private router: Router, private route:ActivatedRoute) { }
  arrayOfIdeas:any=[];
id;
  ngOnInit() {
    this.recentideas.getRecentIdeas().subscribe(data=>
    {
      console.log(data);
      this.arrayOfIdeas=data;

     
    })

}

search(value)
{
  console.log(value);
  this.router.navigateByUrl('/search/'+value);


}

applyForAnIdea(title)
{
  console.log(title);
  const emailId=this.route.snapshot.paramMap.get('emailId');
  console.log(emailId);
  if(emailId==null)
  {
    console.log("displaying null")
    this.router.navigateByUrl('/login');
  }
  else{
    console.log("coming here")
    this.recentideas.sendToInnovator(title,emailId);
//create success modal
  }
}
}