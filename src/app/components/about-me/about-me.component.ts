import { Component } from '@angular/core';
import { SectionTitleComponent } from "../section-title/section-title.component";
import { SoftSkillCardComponent } from '../soft-skill-card/soft-skill-card.component';

@Component({
  selector: 'app-about-me',
  imports: [SectionTitleComponent, SoftSkillCardComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
