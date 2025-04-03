import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hard-skill-card',
  imports: [],
  templateUrl: './hard-skill-card.component.html',
  styleUrl: './hard-skill-card.component.css'
})
export class HardSkillCardComponent {

  @Input() skillName: string = "";
  @Input() skillImgUrl: string = "";

}
