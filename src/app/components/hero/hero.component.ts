import { Component } from '@angular/core';
import { SectionTitleComponent } from "../section-title/section-title.component";
import { HeroCaretComponent } from "../hero-caret/hero-caret.component";

@Component({
  selector: 'app-hero',
  imports: [SectionTitleComponent, HeroCaretComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
