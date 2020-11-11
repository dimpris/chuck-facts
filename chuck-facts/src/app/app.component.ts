import { Component } from '@angular/core';

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

  constructor() {
    
  }

  ngOnInit() {
    
  }

  public RandomClicked() {
    this.isRandom = true;
  }
  
  public SearchClicked() {
    this.isRandom = false;
  }

  public Search() {
    
  }

  
}
