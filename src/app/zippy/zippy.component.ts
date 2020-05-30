import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  @Input('title') title: String = ''

  isActive: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    console.log("clicked");
    this.isActive = !this.isActive;
    console.log(this.isActive);
  }  
}
