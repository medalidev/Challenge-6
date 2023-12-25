import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-convertisseur-child',
  templateUrl: './convertisseur-child.component.html',
  styleUrls: ['./convertisseur-child.component.css']
})
export class ConvertisseurChildComponent implements OnChanges {

  @Input('parentData') public text: any;


  @Output() public childEvent = new EventEmitter();
  title = ''
  ngOnChanges(changes: any) {
    this.title = changes.text.currentValue
    // this.childEvent.emit(changes.text.currentValue) challenge 6  ex1 5)
  }

  addValue() {
    this.childEvent.emit(this.text)

  }

}
