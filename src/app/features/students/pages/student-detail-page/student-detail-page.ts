import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-detail-page',
  imports: [RouterLink],
  templateUrl: './student-detail-page.html',
  styleUrls: ['./student-detail-page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class StudentDetailPage {

  // ActivatedRoute permite leer 2 parámetros de la Ruta que definimos en app.routes.ts, en este caso el id del estudiante
  private route = inject(ActivatedRoute);
  readonly id = this.route.snapshot.paramMap.get('id');

}
