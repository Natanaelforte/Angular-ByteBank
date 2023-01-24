import { Component } from '@angular/core';
import { TransferenciaService } from './service/transferencia.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alura-app';



  constructor(private service: TransferenciaService){

  }


}
