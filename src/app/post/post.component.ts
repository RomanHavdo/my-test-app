import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id;
  posts=[];
  url = 'https://jsonplaceholder.typicode.com/posts';
  comments=[];
  urlComments='https://jsonplaceholder.typicode.com/comments';
  constructor(private route:ActivatedRoute) {
    fetch(this.url).then(response =>
      response.json().then(data => ({
        data: data,
        status: response.status
      })
      ).then(res => {
        console.log(res.status);
        this.posts = res.data;
      }));

      fetch(this.urlComments).then(response =>
        response.json().then(data => ({
          data: data,
          status: response.status
        })
        ).then(res => {
          console.log(res.status);
          this.comments = res.data;
        }));
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get("id"))
    })
  }

}
