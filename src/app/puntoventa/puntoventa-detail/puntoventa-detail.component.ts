import { Component, OnInit , Input, ViewChild} from '@angular/core';
import { PuntoventaService } from '../puntoventa.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PuntoventaDetail} from '../puntoventa-detail';
import {Calificacion} from '../../calificacion/calificacion';
import { PuntoventaCalificacionesComponent } from '../puntoventa-calificaciones/puntoventa-calificaciones.component';
import { PuntoventaAddCalificacionComponent } from '../puntoventa-add-calificacion/puntoventa-add-calificacion.component';
import { Puntoventa } from '../puntoventa';

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

 /**
    * The punto id retrieved from the address
    */
     puntoventa_id:number;

    /**
    * The book whose details are shown
    */
    punto: Puntoventa;


    /**
    * The suscription which helps to know when a new book
    * needs to be loaded
    */
    navigationSubscription;

    /**
     * The child BookReviewListComponent
     */
    @ViewChild(PuntoventaCalificacionesComponent) reviewListComponent:PuntoventaCalificacionesComponent;

 



     getPuntoventaDetail(): void {
      this.puntoventaService.getPuntoventaDetail(this.puntoventa_id)
        .subscribe(puntoventaDetail => {
          this.puntoventaDetail = puntoventaDetail
        });
      }



    /**
     * The function called when a review is posted, so that the child component can refresh the list
     */
    updateReviews(): void {
        this.getPuntoventaDetail();
        this.reviewListComponent.calificacionespunto.filter(calificacion => calificacion.puntoventa.id !=this.puntoventa_id)
        this.reviewListComponent.updateReviews(this.puntoventaDetail.calificaciones.filter(calificacion => calificacion.puntoventa.id ==this.puntoventa_id));
        this.reviewListComponent.isCollapsed = false;
        // this.reviewAddComponent.isCollapsed = true;
    }



  ngOnInit() {
    this.puntoventa_id= +this.route.snapshot.paramMap.get('id');
    if (this.puntoventa_id)
    {
    this.puntoventaDetail= new PuntoventaDetail();
    this.getPuntoventaDetail();
    this.puntoventaDetail.calificaciones = new Array<Calificacion>();
  }}


  

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
