import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-decoration',
  imports: [],
  templateUrl: './title-decoration.component.html',
  styleUrl: './title-decoration.component.css'
})
export class TitleDecorationComponent {

  @Input() titleText: string = '';

}
