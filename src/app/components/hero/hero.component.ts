import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { SectionTitleComponent } from "../section-title/section-title.component";
import { HeroCaretComponent } from "../hero-caret/hero-caret.component";

@Component({
  selector: 'app-hero',
  imports: [SectionTitleComponent, HeroCaretComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {

  caretAnimationText: string = "";
  
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.loadScript();
  }

  loadScript(): void {
    let script = this.renderer.createElement("script");
    script.type = "text/javascript";
    script.src = "scripts/caretAnimation.js";
    
    this.renderer.appendChild(this.el.nativeElement, script);
  }
}
