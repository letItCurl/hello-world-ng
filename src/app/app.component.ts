// points to the service created
import { LikeService } from './like.service';
import { FavArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world-ng';
  tweet: any

  courses = [1,2,3]

  // Data injection / singleton patern
  constructor(service: LikeService){
    // this will define an interface
    this.tweet = service.getTweet() 
  }

  onFourthStar(event: FavArgs){
    console.log('The 4th start has been clicked');
    console.log(event)
  }
}
