import { Component } from '@angular/core';
import { HeroPageComponent } from "./components/pages/hero-page/hero-page.component";
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AboutMeComponent } from "./components/about-me/about-me.component"
import { ProjectsComponent } from "./components/projects/projects.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HeroPageComponent, HeroComponent, NavbarComponent, AboutMeComponent, ProjectsComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}
