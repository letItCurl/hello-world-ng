import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private url = "https://jsonplaceholder.typicode.com/todos/";

  constructor(private http: HttpClient) {
    
   }

  ngOnInit(): void {
    this.http
    .get(this.url)
    .subscribe(response =>{
      this.posts = response;
    });
  }

  createPost(input: HTMLInputElement){
    let post = {title: input.value};
    this.http.post(this.url, post, this.httpOptions).subscribe(response =>{
      post['id'] = response['id'];
      this.posts.unshift(post);
      input.value = "";
      console.log(response);
    })
  }

  updatePost(post){
    // patch will just fill the diff
    this.http.patch(this.url+`${post.id}`, {isRead: true}, this.httpOptions).subscribe(response=>{
      console.log(response)
    })
    // put  replace the object
  }

}
