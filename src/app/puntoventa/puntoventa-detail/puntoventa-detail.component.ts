import { Component, OnInit , Input, ViewChild} from '@angular/core';
import { PuntoventaService } from '../puntoventa.service';
import { ActivatedRoute } from '@angular/router';
import { PuntoventaDetail} from '../puntoventa-detail';
import { PuntoventaCalificacionesComponent } from '../puntoventa-calificaciones/puntoventa-calificaciones.component';
import { PuntoventaAddCalificacionComponent } from '../puntoventa-add-calificacion/puntoventa-add-calificacion.component';

@Component({
  selector: 'app-puntoventa-detail',
  templateUrl: './puntoventa-detail.component.html',
  styleUrls: ['./puntoventa-detail.component.css']
})
export class PuntoventaDetailComponent implements OnInit {

  constructor(private puntoventaService: PuntoventaService,
    private route: ActivatedRoute
    ) {

     }


     @Input() puntoventaDetail: PuntoventaDetail;
     puntoventa_id:number;

     /**
     * The child BookReviewListComponent
     */
    @ViewChild(PuntoventaCalificacionesComponent) calificacionListComponent: PuntoventaCalificacionesComponent;

    /**
     * The child BookReviewListComponent
     */
    @ViewChild(PuntoventaAddCalificacionComponent) reviewAddComponent: PuntoventaAddCalificacionComponent;

    toggleReviews(): void {
        if (this.reviewAddComponent.isCollapsed == false) {
            this.reviewAddComponent.isCollapsed = true;
        }
        this.calificacionListComponent.isCollapsed = !this.calificacionListComponent.isCollapsed;
    }

    toggleCreateReview(): void {
        if (this.calificacionListComponent.isCollapsed == false) {
            this.calificacionListComponent.isCollapsed = true;
        }
        this.reviewAddComponent.isCollapsed = !this.reviewAddComponent.isCollapsed;
    }



     getPuntoventaDetail(): void {
      this.puntoventaService.getPuntoventaDetail(this.puntoventa_id)
        .subscribe(puntoventaDetail => {
          this.puntoventaDetail = puntoventaDetail
        });
      }


      

  ngOnInit() {
    this.puntoventa_id= +this.route.snapshot.paramMap.get('id');
    this.puntoventaDetail= new PuntoventaDetail()
    this.getPuntoventaDetail()
  }

}
