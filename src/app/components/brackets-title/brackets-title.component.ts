import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-brackets-title',
  imports: [],
  templateUrl: './brackets-title.component.html',
  styleUrl: './brackets-title.component.css'
})
export class BracketsTitleComponent {

  @Input() titleText: string = "";

}
