import { Component, OnInit, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input("isLike?") isLiked: boolean = false
  @Input("likeCount") likes: number = 0
  heart = faHeart;

  constructor() { }

  ngOnInit(): void {
  }

  getColor(){
    return (this.isLiked ? "deeppink" : "#ccc")
  }

  onClickHandle(){
    this.isLiked = !this.isLiked
    if(!this.isLiked){
      this.likes = this.likes - 1 
    }else{
      this.likes = this.likes + 1
    }
  } 
}
