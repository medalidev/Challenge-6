import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent {
  fActor: { fN: string; lN: string }[] = [];
  listActors = [{ 'lastName': 'Robert', 'firstName': 'Julia' },
  { 'lastName': 'Walker', 'firstName': 'Paul' },
  { 'lastName': 'Pitt', 'firstName': 'Brad' }]

}
