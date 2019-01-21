import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, State } from '@ngrx/store';

/*import * as fromApp from '../app.reducer';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';*/


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  //posts$: Observable<Array<Object>>;
  posts=[];
  url = 'https://jsonplaceholder.typicode.com/posts';
  id = 0;
  isPopUp = false;

  constructor(private route: ActivatedRoute, /*private store: Store<{ ui: fromApp.State }>*/) {
    fetch(this.url).then(response =>
      response.json().then(data => ({
        data: data,
        status: response.status
      })
      ).then(res => {
        console.log(res.status);
        this.posts = res.data;
      }));
  }

  ngOnInit() {
    //this.store.subscribe(data =>console.log(data));
    //this.posts$ = this.store.map(state=>state.ui.posts);
    //console.log(this.posts$);
    if (this.route.snapshot.queryParams.userId) {
      this.id = Number(this.route.snapshot.queryParams.userId);
      this.id++;
    }
  }
  addNewPost(title, post) {
    console.log(title, post);
    this.posts.push({
      "userId": this.id,
      "id": this.posts.length + 1,
      "title": title,
      "body": post
    })
    this.isPopUp = false;
  }

}
