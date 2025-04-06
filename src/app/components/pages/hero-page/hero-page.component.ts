import { Component } from '@angular/core';
import { SectionTitleComponent } from "../../section-title/section-title.component";
import { HeroCaretComponent } from "../../hero-caret/hero-caret.component";

@Component({
  selector: 'app-hero-page',
  imports: [SectionTitleComponent, HeroCaretComponent],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {

}
