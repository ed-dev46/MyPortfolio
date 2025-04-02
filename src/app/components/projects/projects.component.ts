import { Component } from '@angular/core';
import { SectionTitleComponent } from "../section-title/section-title.component";

@Component({
  selector: 'app-projects',
  imports: [SectionTitleComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  sectionTitle:string = "Meus projetos";
}
