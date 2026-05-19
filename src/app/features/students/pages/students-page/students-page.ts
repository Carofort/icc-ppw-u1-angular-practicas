import { ChangeDetectionStrategy, Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-students-page',
  imports: [RouterLink],
  templateUrl: './students-page.html',
  //styleUrls: ['./students-page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class StudentsPage {

  readonly students= signal([{id: 1, name: 'Juan Perez'}, {id: 2, name: 'Diego Sanchez'},
     {id: 3, name: 'Maria Gomez'}, {id: 4, name: 'Ana Rodriguez'}, {id: 5, name: 'Luis Fernandez'}]);
  
}
