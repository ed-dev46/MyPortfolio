import { Component } from '@angular/core';
import { SectionTitleComponent } from "../section-title/section-title.component";
import { ProjectCardComponent } from "../project-card/project-card.component";

@Component({
  selector: 'app-projects',
  imports: [SectionTitleComponent, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  sectionTitle:string = "Meus projetos";
}
