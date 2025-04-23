import { Component } from '@angular/core';
import { SectionTitleComponent } from "../../section-title/section-title.component";
import { SoftSkillCardComponent } from '../../soft-skill-card/soft-skill-card.component';
import { HardSkillCardComponent } from '../../hard-skill-card/hard-skill-card.component';

@Component({
  selector: 'app-aboutme-page',
  imports: [SectionTitleComponent, SoftSkillCardComponent, HardSkillCardComponent],
  templateUrl: './aboutme-page.component.html',
  styleUrl: './aboutme-page.component.css'
})
export class AboutmePageComponent {

}
