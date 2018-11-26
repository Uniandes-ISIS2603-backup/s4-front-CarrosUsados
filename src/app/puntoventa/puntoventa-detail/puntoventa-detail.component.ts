import { Component, OnInit , Input, ViewChild} from '@angular/core';
import { PuntoventaService } from '../puntoventa.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PuntoventaDetail} from '../puntoventa-detail';
import {Calificacion} from '../../calificacion/calificacion';
import { PuntoventaCalificacionesComponent } from '../puntoventa-calificaciones/puntoventa-calificaciones.component';
import { PuntoventaAddCalificacionComponent } from '../puntoventa-add-calificacion/puntoventa-add-calificacion.component';

@Component({
  selector: 'app-puntoventa-detail',
  templateUrl: './puntoventa-detail.component.html',
  styleUrls: ['./puntoventa-detail.component.css']
})
export class PuntoventaDetailComponent implements OnInit {

  constructor(private puntoventaService: PuntoventaService,
    private route: ActivatedRoute,
    private router: Router
    ) {
      
        //This is added so we can refresh the view when one of the books in
        //the "Other books" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });
     }


     @Input() puntoventaDetail: PuntoventaDetail;
     puntoventa_id:number;


    navigationSubscription;
  /**
     * The child BookReviewListComponent
     */
    @ViewChild(PuntoventaCalificacionesComponent) reviewListComponent: PuntoventaCalificacionesComponent;

    /**
     * The child BookReviewListComponent
     */
    @ViewChild(PuntoventaAddCalificacionComponent) reviewAddComponent:PuntoventaAddCalificacionComponent;

    toggleReviews(): void {
        if (this.reviewAddComponent.isCollapsed == false) {
            this.reviewAddComponent.isCollapsed = true;
        }
        this.reviewListComponent.isCollapsed = !this.reviewListComponent.isCollapsed;
    }

    toggleCreateReview(): void {
        if (this.reviewListComponent.isCollapsed == false) {
            this.reviewListComponent.isCollapsed = true;
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
    this.puntoventaDetail= new PuntoventaDetail();
    this.getPuntoventaDetail();
    this.puntoventaDetail.calificaciones = new Array<Calificacion>();
  }

      /**
    * This method helps to refresh the view when we need to load another book into it
    * when one of the other books in the list is clicked
    */
   ngOnDestroy() {
    if (this.navigationSubscription) {
        this.navigationSubscription.unsubscribe();
    }
}

}
