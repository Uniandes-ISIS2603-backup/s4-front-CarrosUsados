import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { FichatecnicaService } from '../fichatecnica.service';
import { Fichatecnica } from '../fichatecnica';

@Component({
  selector: 'app-fichatecnica-create',
  templateUrl: './fichatecnica-create.component.html',
  styleUrls: ['./fichatecnica-create.component.css']
})
export class FichatecnicaCreateComponent implements OnInit {

  constructor(
    private fichaTecnicaService: FichatecnicaService,
    private toastrService: ToastrService
  ) { }

  /**
    * La nueva ficha técncia
    */
  fichaTecnica: Fichatecnica;

  /**
  * The output which tells the parent component
  * that the user no longer wants to create an author
  */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user created a new author
  */
  @Output() create = new EventEmitter();

  /**
  * Crea una ficha técnica
  */
  createFichaTecnica(): Fichatecnica {

    
    console.log(this.fichaTecnica);
    this.fichaTecnicaService.createFichaTecnica(this.fichaTecnica)
      .subscribe((fichaTecnica) => {
        this.fichaTecnica = fichaTecnica;
        this.create.emit();
        this.toastrService.success("La ficha técnica fue creada", "Creación de la ficha técnica");

      });
    return this.fichaTecnica;
  }

  /**
  * Emits the signal to tell the parent component that the
  * user no longer wants to create an user
  */
  cancelCreation(): void {
    this.cancel.emit();
  }

  /**
  * This function will initialize the component
  */
  ngOnInit() {
    this.fichaTecnica = new Fichatecnica();
  }
}
