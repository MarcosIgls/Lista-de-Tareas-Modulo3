import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  @Input() text: String = "";
  @Input() color: string = "";
  @Output() btnClik= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.btnClik.emit();
  }

}
