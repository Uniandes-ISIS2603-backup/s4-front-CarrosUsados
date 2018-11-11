import { Component, OnInit , Input} from '@angular/core';
import { PuntoventaService } from '../puntoventa.service';
import { ActivatedRoute } from '@angular/router';
import { PuntoventaDetail} from '../puntoventa-detail';

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
