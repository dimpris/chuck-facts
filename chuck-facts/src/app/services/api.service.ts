import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class ApiService {
    private base: string;

    constructor(private http: HttpClient) {
        // Should be placed in config file and separated by mode (dev/prod), but not now :)
        this.base = `https://api.chucknorris.io/jokes/`;
    }

    public GetCategories() {
        return this._get(`categories`);
    }

    public SearchRandom(category?: string, name?: string) {
        let params = {};

        if (category) {
            params = {...params, category}
        }

        if (name) {
            params = {...params, name}
        }

        return this._get(`random`, params);
    }

    public Search (name?: string) {
        let params = {};

        if (name) {
            params = {...params, query: name}
        }

        return this._get(`search`, params);
    }

    private _get(path: string, params?: any) {
        return this.http.get(this.base + path, {params: params});
    }
}