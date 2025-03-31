import { Component } from '@angular/core';
import { TitleDecorationComponent } from "../title-decoration/title-decoration.component";

@Component({
  selector: 'app-navbar',
  imports: [TitleDecorationComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
