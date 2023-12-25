import { Component } from '@angular/core';

@Component({
  selector: 'app-convertisseur-parent',
  templateUrl: './convertisseur-parent.component.html',
  styleUrls: ['./convertisseur-parent.component.css']
})
export class ConvertisseurParentComponent {
text=""
message=''
printValue(value:any){
  this.message = value 
}
}
