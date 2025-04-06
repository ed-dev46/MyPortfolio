import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./components/hero/hero.component";
import { HeroPageComponent } from "./components/pages/hero-page/hero-page.component"
import { NavbarComponent } from "./components/navbar/navbar.component"
import { AboutMeComponent } from "./components/about-me/about-me.component"
import { ProjectsComponent } from "./components/projects/projects.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent, HeroPageComponent, NavbarComponent, AboutMeComponent, ProjectsComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}
