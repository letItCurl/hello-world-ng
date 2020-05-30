import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  // just TS class
  tweet = {
    likesCount: 500,
    isLiked: true
  }

  constructor() { }

  getTweet(){
    return this.tweet
  }
}
