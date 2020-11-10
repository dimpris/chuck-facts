import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chuck-facts';
  private api: ApiService;
  private categories: string[] = [];
  private isRandom = true;
  private selectedCategory: string;
  private username = '';
  private answers: any[] = [];

  constructor(apiService: ApiService) {
    this.api = apiService;
  }

  ngOnInit() {
    this.api.GetCategories().subscribe((data: string[]) => {
      this.categories = data;
    });
  }

  public RandomClicked() {
    this.isRandom = true;
  }
  
  public SearchClicked() {
    this.isRandom = false;
  }

  public Search() {
    if (this.isRandom) {
      this.api.SearchRandom(this.selectedCategory, this.username).subscribe((data: any) => {
        this.setAnswer([data]);
      });
    } else {
      this.api.Search(this.username).subscribe((data: any) => {
        this.setAnswer(data.result);
      });
    }
  }

  public selectChangeHandler(e: any) {
    if (e.target.value) {
      this.selectedCategory = e.target.value;
    }
  }

  public inputChangeHandler(e: any) {
    if (e.target.value) {
      this.username = e.target.value;
    }
  }

  private setAnswer(data: any[]) {
    this.answers = data;
  }
}
