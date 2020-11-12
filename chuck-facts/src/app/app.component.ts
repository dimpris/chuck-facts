import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { InitialState, Fact } from './store/reducer';
import { ApiService } from './services/api.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chuck-facts';
  categories: string[] = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};
  isRandom = true;
  username = '';
  answers: Fact[] = [];

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
      .select<Array<Fact>>('answer')
      .subscribe((items: Array<Fact>) => {
        this.answers = items;
      });
  }


  ngOnInit() {
    this.apiService.getCategories();

    this.dropdownSettings = {
      singleSelection: false,
      allowSearchFilter: false,
      enableCheckAll: false,
    };
  }

  public Search() {
    if (!this.isRandom) {
      this.apiService.searchFact(this.username);
    } else {
      this.apiService.getRandomFact(this.username, this.selectedItems.toString())
    }
  }

  
}
