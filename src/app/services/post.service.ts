import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = "https://jsonplaceholder.typicode.com/posts/";
  private httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'}),
  };
  constructor(private http: HttpClient) {

   }

  getPost(){
    return this.http.get(this.url, this.httpOptions)
   }

  createPost(post){
    return this.http.post(this.url, post, this.httpOptions)
  }
  updatePost(post){
    return this.http.patch(this.url+`${post.id}`, {isRead: true}, this.httpOptions)
  }
  deletePost(post){
    return this.http.delete(this.url+`${post.id}`)
  }
}
