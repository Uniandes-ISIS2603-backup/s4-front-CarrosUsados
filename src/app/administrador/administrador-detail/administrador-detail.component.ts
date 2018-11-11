import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdministradorService } from '../administrador.service';
import { AdministradorDetail } from '../administrador-detail';
@Component({
  selector: 'app-administrador-detail',
  templateUrl: './administrador-detail.component.html',
  styleUrls: ['./administrador-detail.component.css']
})
export class AdministradorDetailComponent implements OnInit {
  /**
      * la ficha tecnica
      */
  @Input() administradorDetail: AdministradorDetail;

  /**
* El id de la ficha tecnica que viene en el path get .../administradores/administradores_id
*/
  administrador_id: number;

  constructor(
    private route: ActivatedRoute,
    private administradorService: AdministradorService
  ) { }



  /**
  * El metodo que obtiene el detalle de la ficha tecnica que queremos mostrar
  */
  getAdministradorDetail(): void {
    this.administradorService.getAdministradorDetail(this.administrador_id)
      .subscribe(administradorDetail => {
        this.administradorDetail = administradorDetail
      });
  }

  parseDate( date:String) : Date
  {
    return new Date (Date.parse(date.substring(0,date.length-5)));
  }

  ngOnInit() {

    this.administrador_id = +this.route.snapshot.paramMap.get('id');
    if (this.administrador_id) {
      this.administradorDetail = new AdministradorDetail();
      this.getAdministradorDetail();
    }
  }
}
