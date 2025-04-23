import { Component } from '@angular/core';
import { HeroPageComponent } from "./components/pages/hero-page/hero-page.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AboutMeComponent } from "./components/about-me/about-me.component"
import { ProjectsComponent } from "./components/projects/projects.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AboutmePageComponent } from "./components/pages/aboutme-page/aboutme-page.component";

@Component({
  selector: 'app-root',
  imports: [HeroPageComponent, NavbarComponent, AboutMeComponent, ProjectsComponent, ContactComponent, FooterComponent, AboutmePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}
