import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts;
  
  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.service.getPost()
    .subscribe(response =>{
      this.posts = response;
    });
  }

  createPost(input: HTMLInputElement){
    let post = {title: input.value};
    this.service.createPost(post).subscribe(response =>{
      post['id'] = response['id'];
      this.posts.unshift(post);
      input.value = "";
      console.log(response);
    })
  }

  updatePost(post){
    // patch will just fill the diff
    this.service.updatePost(post)
    .subscribe(response=>{
      console.log(response)
    })
    // put  replace the object
  }

  deletePost(post){
    this.service.deletePost(post)
    .subscribe(res =>{
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1)
    })
  }

}
