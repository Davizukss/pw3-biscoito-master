import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent {

  @Output() biscoitoQuebrado: EventEmitter<boolean> = new EventEmitter();

  BiscoitoAbrido: string = "../../assets/biscoito.png";
  BiscoitoFichado: string = "../../assets/biscoito-quebrado.png";
  oculto : boolean = true;
  

  MudaBiscoito() {
    this.oculto = !this.oculto;
    this.biscoitoQuebrado.emit(this.oculto);
  }
}
