import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Actor } from './actor';
@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent {

  @Input('firstName') public fName: any;
  @Input('lastName') public lName: any;
  @Input('index') public i: any;
  @Input('list') list: any;
  @Output() listFavoris= new EventEmitter()
  public model = new Actor('', '')
  favorisActor: { fN: string; lN: string }[] = [];
  constructor() {

  }
  supp() {
    this.list.splice(this.i, 1)
  }

  favoris(e:any) {
    if (e.target.checked == true) {
      this.favorisActor.push({ fN: this.fName, lN: this.lName });
    }
    console.log(this.favorisActor);
    }
    favorisEvent(){
      this.listFavoris.emit(this.favorisActor);
    }
}
