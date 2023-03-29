import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchWord='';
  constructor(activatedRoute:ActivatedRoute, private router:Router){
    activatedRoute.params.subscribe((params) => {
      if(params.searchWord)
      this.searchWord = params.searchWord;
    })
  }

  search(word:string):void{
    if(word)
    this.router.navigateByUrl('/search/'+word);
  }
}
