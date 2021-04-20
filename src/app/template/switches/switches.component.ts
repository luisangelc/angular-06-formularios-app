import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {
  persona = {
    genero: 'F',
    notificaciones: !0,
  }

  terminosYCondiciones: boolean = false;
}
