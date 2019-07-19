import { Component, OnInit } from '@angular/core';
import { RecentIdeasService } from '../recent-ideas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  ideas: any;

  constructor(private recentideas: RecentIdeasService, private route:ActivatedRoute) { }

  ngOnInit() {
    const title=this.route.snapshot.paramMap.get('idea');
    console.log("in search comp"+title)
    this.recentideas.getIdeaDetails(title).subscribe((data:any)=>{
      console.log("data fetched.."+ data);
      this.ideas=data;
    });
  }

}
