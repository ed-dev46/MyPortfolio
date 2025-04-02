import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-soft-skill-card',
  imports: [],
  templateUrl: './soft-skill-card.component.html',
  styleUrl: './soft-skill-card.component.css'
})
export class SoftSkillCardComponent {

  @Input() skillTitle = "";

}
