import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-caret',
  imports: [],
  templateUrl: './hero-caret.component.html',
  styleUrl: './hero-caret.component.css'
})
export class HeroCaretComponent {

  caretText: string = "";
  myServices: string[] = ["api's rest", "websites", "microsserviços", "soluções empresariais"];
  typingSpeed: number = 150;
  deletingSpeed: number = 50;
  deleteDelay: number = 1000;
  typingDelay: number = 200;

  constructor() {
    this.startTyping();
  }

  async startTyping() {
    let index = 0;

    while (true) {
      let currentWord = this.myServices[index];

      for (let i = 0; i < currentWord.length; i++) {
        this.caretText += currentWord[i];
        await this.wait(this.typingSpeed);
      }

      await this.wait(this.deleteDelay);

      for (let i = currentWord.length; i >= 0; i--) {
        this.caretText = currentWord.substring(0, i);
        await this.wait(this.deletingSpeed);
      }

      await this.wait(this.typingDelay);

      index = (index + 1) % this.myServices.length;
    }
  }

  wait(delay: number) {
    return new Promise(x => setTimeout(x, delay));
  }

}
