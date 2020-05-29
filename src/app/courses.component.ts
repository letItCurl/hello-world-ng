import { CourseService } from './courses.service';
import {Component} from '@angular/core'

@Component({
    selector: 'courses',
    template: `
    <h2>{{ getTitle() }}</h2>
    <img [src]="imgUrl">
    <ul>
        <li *ngFor="let course of courses" > {{ course }} </li>
    </ul>
    <div (click)="onClickDiv($event)">
        <button (click)="onSave($event)" class="btn btn-primary" [class.active]="isActive">Anothor btn...</button>
    </div>
    <table>
        <thead>
            <tr [attr.colspan]="colSpan" >
                name 
            </tr>   
        </thead>
        <tbody>
            <tr>
                <td> roland </td>
                <td> 465465 </td>
            </tr>
        </tbody>
    </table>
    <input #email (keyup.enter)="onKeyUp(email.value)"/>
    <br/>
    <input [(ngModel)]="name" (keyup.enter)="onKeyUpName()" />
    <hr/>
    {{video.title | uppercase | lowercase}} <br/>
    {{video.rating | number: '1.2-2' }} <br/>
    {{video.students | number}} <br/>
    {{video.price | currency: 'AUD':true:'3.2-2'}} <br/>
    {{video.releaseDate | date:'shortDate'}} <br/>
    <hr/>
    <p>{{text | summary: 50}}</p>
      `
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    imgUrl="https://picsum.photos/200";
    colSpan = 2;
    isActive = true;
    email="test@me.com";
    name="roro";
    text=`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

    video={
        title: "The angular course",
        rating: 4.965,
        students: 646465,
        price: 198.47,
        releaseDate: new Date(2016, 3, 1)
    }

    constructor(service: CourseService) {
        this.courses = service.getCourses()
    }

    getTitle() {
        return this.title
    }

    onSave($event){
        $event.stopPropagation();
        console.log("Button was clicked")
        console.log($event)
    }

    onClickDiv($event){
        console.log("Div was clicked")
        console.log($event)
    }

    onKeyUp(email){
        console.log("enter was pressed:")
        console.log(email)
    }

    onKeyUpName(){
        console.log("enter was pressed:")
        console.log(this.name)
    }
}