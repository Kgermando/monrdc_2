import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../services/data/business.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  business = [];
  postsSearch = [];
  category = [];
  selected: string;
  groupSelected = '';
  noResult = false;
  checkLoading = false;
  selectedCat = '';
  search = '';
  // tslint:disable-next-line:no-inferrable-types
  p: number = 1;

  constructor(private postsService: BusinessService) { }

  ngOnInit() {
     this.getAllBusiness();
  }


  // onSelected(criteria: any) {
  //   this.checkLoading = false;
  //   console.log(criteria.value);
  //   this.posts = this.postsService.searchPost(criteria.value);
  //   this.checkLoading = true;
  // }

  // searchByCategory(criteria: string) {
  //   console.log(criteria);
  //   this.checkLoading = false;
  //   if (criteria !== 'all') {
  //     this.posts = this.postsService.searchPostByCategory(criteria);
  //     this.checkLoading = true;
  //   } else {
  //     this.getAllpost();
  //   }
  // }

  getAllBusiness() {
    // reset array
    this.business = [];
    // get all docs no.
    this.postsService.getAllPostsDocNo().subscribe(data => {
      data.docs.forEach(doc => {
        // Query All doc in posts collection
        this.postsService.getBusiness(doc.id).subscribe(post => {
          // Query data in each document
          this.business.push({ doc: doc.id, post });
          // Store post collection for search auto-complete
          this.postsSearch = this.business;
        });
      });
      this.checkLoading = true;
    });
  }

  typeaheadNoResults(event: boolean): void {
    this.noResult = event;
  }

  // onReload() {
  //   this.checkLoading = false;
  //   this.getAllpost();
  // }

}
