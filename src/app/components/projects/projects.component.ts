import { Component } from '@angular/core';
import { TitleDecorationComponent } from "../title-decoration/title-decoration.component";

@Component({
  selector: 'app-projects',
  imports: [TitleDecorationComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  sectionTitle:string = "Meus projetos";
}
