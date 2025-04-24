import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  @Input() projectTitle: string = "";
  @Input() projectImgUrl: string = "";
  @Input() projectStacks: string[] = [];

  projectOpen: boolean = false;

}
