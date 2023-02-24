import { Component, Input } from '@angular/core';

@Component({
  selector: 'sofka-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent {

  @Input()
 nombreUsuario: string


 constructor(){
  this.nombreUsuario = '';
 }
}
