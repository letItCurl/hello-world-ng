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
  tweet: any;
  id = 4;

  courses: Array<any> = [];

  viewMode = "map";

  // Data injection / singleton patern
  constructor(service: LikeService){
    // this will define an interface
    this.tweet = service.getTweet() 
  }

  onAdd(){
    this.id = this.id + 1 
    this.courses.push({id: this.id, name: `courses${this.id}` })
  }

  onRemove(course){
    let index = this.courses.indexOf(course)
    this.courses.splice(index,1)
  }

  onChange(course){
    let index = this.courses.indexOf(course)
    this.courses[index].name = `${index} UPDATE`
  }

  onChangeFor(course){
    course.name = "SIMPLE UPDATE"

    let index = this.courses.indexOf(course)
    console.log(this.courses[index].name)
  }
  
  loadCourses(){
    this.courses = [
      {id: 1, name: 'courses1'},
      {id: 2, name: 'courses2'},
      {id: 3, name: 'courses3'},
      {id: 4, name: 'courses4'}
    ];
  }

  // return the data to watch
  trackCourse(index, course){
    return course ? course.id : undefined
  }

  onFourthStar(event: FavArgs){
    console.log('The 4th start has been clicked');
    console.log(event)
  }
  
}
