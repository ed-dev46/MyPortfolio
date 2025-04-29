import { Component } from '@angular/core';
import { HeroPageComponent } from "./components/pages/hero-page/hero-page.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MyprojectsPageComponent } from './components/pages/myprojects-page/myprojects-page.component';
import { AboutmePageComponent } from "./components/pages/aboutme-page/aboutme-page.component";
import { ContactmePageComponent } from './components/pages/contactme-page/contactme-page.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeroPageComponent, NavbarComponent, MyprojectsPageComponent, AboutmePageComponent, ContactmePageComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}
