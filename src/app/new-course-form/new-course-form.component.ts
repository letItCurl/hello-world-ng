import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

  form: FormGroup;

  // same form construction but with form builder
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    })
   }
  
  ngOnInit(): void {
  }
  // this is for forms arrays...

  /*
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl(),
    }),
    topics: new FormArray([])
  })
  */

  // don't forget to type the inputs...
  addTopic(topic: HTMLInputElement){
    // new FormControl adds an input to the object forms 
    this.topics.push(new FormControl(topic.value));
    topic.value = ''
  }

  removeTopic(topic: FormControl){
    let index = this.topics['controls'].indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(){
    // 'as' alow us to type after the .get()
    return (this.form.get('topics') as FormArray);
    // FormArrays allow us to push an element
  }
}
