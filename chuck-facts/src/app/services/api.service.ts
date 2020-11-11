import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NgRedux } from '@angular-redux/store';
import { InitialState, Fact } from '../store/reducer';
import { GetCategories, GetRandomFact, Search } from '../store/actions';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://api.chucknorris.io/jokes/';

  constructor(
    private http: HttpClient,
    private ngRedux: NgRedux<InitialState>
  ) { }

  getCategories() {
    this.http
      .get(this.baseUrl + 'categories')
      .subscribe((categories: Array<string>) => {
        this.ngRedux.dispatch(GetCategories(categories));
      });
  }

  searchFact(query?: string) {
    let params = {};

    if (query) {
      params = {...params, query}
  }

    this.http
      .get(this.baseUrl + 'search', {params: params})
      .subscribe((data: any) => {
        let result = data.result as Array<Fact>;
        result = result.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        this.ngRedux.dispatch(Search(result));
      });
  }

  getRandomFact(name?: string, category?: string) {
    let params = {};

    if (category) {
        params = {...params, category}
    }

    if (name) {
        params = {...params, name}
    }

    this.http
      .get(this.baseUrl + 'random', {params: params})
      .subscribe((data: Fact) => {
        this.ngRedux.dispatch(GetRandomFact([data]));
      });
  }
}
