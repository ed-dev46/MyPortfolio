import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-soft-skill-card',
  imports: [CommonModule],
  templateUrl: './soft-skill-card.component.html',
  styleUrl: './soft-skill-card.component.css'
})
export class SoftSkillCardComponent {

  @Input() skillTitle = "";

  skillOpen: boolean = false;
}
