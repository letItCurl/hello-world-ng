import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  tweet = {
    likesCount: 500,
    isLiked: true
  }

  constructor() { }

  getTweet(){
    return this.tweet
  }
}
