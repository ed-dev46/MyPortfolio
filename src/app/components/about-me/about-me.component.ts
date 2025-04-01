import { Component } from '@angular/core';
import { TitleDecorationComponent } from "../title-decoration/title-decoration.component";
import { BracketsTitleComponent } from "../brackets-title/brackets-title.component";

@Component({
  selector: 'app-about-me',
  imports: [TitleDecorationComponent, BracketsTitleComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
