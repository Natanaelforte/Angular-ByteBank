import { Transferencia } from 'src/models/transferencia.model';
import { TransferenciaService } from './../app/service/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector:'app-NovaTransferencia',
    templateUrl:'./NovaTransferencia.component.html',
    styleUrls:['./NovaTransferencia.component.scss'],
})
export class NovaTransferenciaComponent{
    @Output() aotransferir = new EventEmitter<any>();

    valor: number;
    destino:number;

    constructor(private service: TransferenciaService, private router: Router){

    }

    transferir(){
      const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};

      this.service.adicionar(valorEmitir).subscribe(resultado => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
      }, (Error) => console.error(Error));


    }

    limparCampos(){
      this.valor = 0;
      this.destino = 0;
    }
}
