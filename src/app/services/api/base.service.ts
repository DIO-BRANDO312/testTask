import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})

export class BaseService {
  constructor(
    private httpClient: HttpClient
  ) {
  }

  private readonly root = 'https://jsonplaceholder.typicode.com/'

  getPosts() {
    return this.httpClient.get(
      this.root + 'posts'
    )
  }

  getUsers() {
    return this.httpClient.get(
      this.root + 'users'
    )
  }
}
