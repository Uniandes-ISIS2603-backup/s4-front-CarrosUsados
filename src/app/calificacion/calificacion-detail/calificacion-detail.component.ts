import { Component, OnInit ,Input} from '@angular/core';
import { CalificacionService} from '../calificacion.service';
import { CalificacionDetail } from '../calificacion-detail';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-calificacion-detail',
  templateUrl: './calificacion-detail.component.html',
  styleUrls: ['./calificacion-detail.component.css']
})
export class CalificacionDetailComponent implements OnInit {

  @Input() calificacionDetail: CalificacionDetail;

  constructor(private calificacionService: CalificacionService,
    private route: ActivatedRoute
    ) {

     }
 
     calificacion_id:number;

     getCalificacionDetail(): void {
      this.calificacionService.getCalificacionDetail(this.calificacion_id)
        .subscribe(calificacionDetail => {
          this.calificacionDetail = calificacionDetail
        });
      }
  ngOnInit() {
    this.calificacion_id= +this.route.snapshot.paramMap.get('id');
    this.calificacionDetail= new CalificacionDetail()
    this.getCalificacionDetail()
  }

}
