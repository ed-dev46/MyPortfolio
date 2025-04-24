import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../section-title/section-title.component';
import { ProjectCardComponent } from '../../project-card/project-card.component';

@Component({
  selector: 'app-myprojects-page',
  imports: [SectionTitleComponent, ProjectCardComponent],
  templateUrl: './myprojects-page.component.html',
  styleUrl: './myprojects-page.component.css'
})
export class MyprojectsPageComponent {

}
