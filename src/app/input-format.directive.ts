import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  // this enable us to set the entry in template as: [x]="'inputAlias'"
  @Input('appInputFormat') format: String = 'lowcase'

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus(){
    // you can use any parent listener
    console.log("on Focus")
  }

  @HostListener('blur') onBlur(){
    console.log("on blur")
    console.log(this.format)
    let value: string = this.el.nativeElement.value;
    switch(this.format){
      case 'upcase':
        this.el.nativeElement.value = value.toUpperCase();
        break;
      case 'lowcase':
        this.el.nativeElement.value = value.toLowerCase();
        break;
      default:
    }
  }
}
