import { FavArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world-ng';

  onFourthStar(event: FavArgs){
    console.log('The 4th start has been clicked');
    console.log(event)
  }
}
