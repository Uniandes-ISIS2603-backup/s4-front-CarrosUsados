import { Component, Input,OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';



import { FichatecnicaService } from '../fichatecnica.service';


import { FichatecnicaDetail } from '../fichatecnica-detail';

@Component({
  selector: 'app-fichatecnica-detail',
  templateUrl: './fichatecnica-detail.component.html',
  styleUrls: ['./fichatecnica-detail.component.css']
})
export class FichatecnicaDetailComponent implements OnInit {

  /**
    * la ficha tecnica
    */
   @Input() fichaTecnicaDetail: FichatecnicaDetail;

  constructor(
    private route: ActivatedRoute,
    private fichaTecnicaService: FichatecnicaService 
    ) 
    { }



  /**
  * El id de la ficha tecnica que viene en el path get .../fichatecnica/fichatecnica_id
  */
  fichatecnica_id: number;

  /**
    * El metodo que obtiene el detalle de la ficha tecnica que queremos mostrar
    */
   getFichaTecnicaDetail(): void {
    this.fichaTecnicaService.getFichaTecnicaDetail(this.fichatecnica_id)
        .subscribe(fichaTecnicaDetail => {
            this.fichaTecnicaDetail = fichaTecnicaDetail
        });
    }



  ngOnInit() {

    this.fichatecnica_id = +this.route.snapshot.paramMap.get('id');
        if (this.fichatecnica_id){
        this.fichaTecnicaDetail = new FichatecnicaDetail();
        this.getFichaTecnicaDetail();
        }
  }

}
