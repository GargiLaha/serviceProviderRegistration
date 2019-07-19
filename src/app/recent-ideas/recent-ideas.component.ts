import { Component, OnInit } from '@angular/core';
import { RecentIdeasService } from '../recent-ideas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recent-ideas',
  templateUrl: './recent-ideas.component.html',
  styleUrls: ['./recent-ideas.component.scss']
})
export class RecentIdeasComponent implements OnInit {

  constructor(private recentideas: RecentIdeasService ,private router: Router) { }
  arrayOfIdeas:any=[];
id;
  ngOnInit() {
    this.recentideas.getRecentIdeas().subscribe(data=>
    {
      console.log(data);
      this.arrayOfIdeas=data;

     
    })

}


}
