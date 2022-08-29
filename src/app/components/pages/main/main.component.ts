import { Component, OnInit } from '@angular/core';
import { BaseService } from "services/api";
import { ExtraService } from "services";

import { forkJoin } from 'rxjs';


interface IPost {
  userId: number | undefined,
  author: string | undefined,
  title: string | undefined,
  body: string | undefined
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private baseService: BaseService,
    public extraService: ExtraService
  ) {
  }

  currentPosts: IPost[] = []

  searchValue = ''

  ngOnInit() {
    forkJoin([
      this.baseService.getUsers(),
      this.baseService.getPosts()
    ]).subscribe((response: any) => {
      response[0].forEach((user: any) => {
        response[1].forEach((post: any) => {
          if (user.id === post.userId) {
            this.currentPosts.push({
              userId: user.id,
              author: user.name,
              title: post.title,
              body: post.body
            })
          }
        })
      })
    })
  }

}
