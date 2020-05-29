import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarReg } from '@fortawesome/free-regular-svg-icons'


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('fav') isFavorite: boolean;
  @Output('change') click = new EventEmitter;
  
  getStar(){
    return (!this.isFavorite ?  faStar : faStarReg);
  }

  constructor() { }

  ngOnInit(): void {
  }

  onClickHandle(){
    this.isFavorite = !this.isFavorite;
    this.click.emit({status: this.isFavorite});
  }
}

export interface FavArgs {
  status: boolean
}
