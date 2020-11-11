import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { InitialState } from './store/reducer';
import { ApiService } from './services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chuck-facts';
  categories: string[] = [];
  isRandom = true;
  selectedCategory: string;
  username = '';
  answers: any[] = [];

  constructor(
    private ngRedux: NgRedux<InitialState>,
    private apiService: ApiService
  ) {
    this.ngRedux
      .select<Array<string>>('categories')
      .subscribe((items: Array<string>) => {
        this.categories = items;
      });
    this.ngRedux
      .select<Array<string>>('answer')
      .subscribe((items: Array<any>) => {
        this.answers = items;
      });
  }


  ngOnInit() {
    this.apiService.getCategories();
  }

  public RandomClicked() {
    this.isRandom = true;
  }
  
  public SearchClicked() {
    this.isRandom = false;
  }

  public Search() {
    if (!this.isRandom) {
      this.apiService.searchFact(this.username);
    } else {
      this.apiService.getRandomFact(this.username, this.selectedCategory)
    }
  }

  
}
