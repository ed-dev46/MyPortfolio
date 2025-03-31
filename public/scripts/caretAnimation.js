const words = ["API REST", "WEBSITE", "MICROSERVIÇO", "SOLUÇÃO EMPRESARIAL"];
const typingElement = document.querySelector("#caretAnimation");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
let deleteSpeed = 50;
let delayAfterWord = 1000;

function typeEffect() {
    let currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingElement.innerHTML = "<p class='font-medium uppercase my-7'>"
        + "<span class='text-sky-500'>&#123;&nbsp;</span>" 
        + currentWord.substring(0, charIndex--)
        + "<span class='text-sky-500 border-l-5'>&nbsp;&#125;</span>"
        + "</p>";
    } else {
        typingElement.innerHTML = "<p class='font-medium uppercase my-7'>"
        + "<span class='text-sky-500'>&#123;&nbsp;</span>" 
        + currentWord.substring(0, charIndex++)
        + "<span class='text-sky-500 border-l-5'>&nbsp;&#125;</span>"
        + "</p>";
    }

    if (!isDeleting && charIndex === currentWord.length + 1) {
        setTimeout(() => isDeleting = true, delayAfterWord);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    let speed = isDeleting ? deleteSpeed : typingSpeed;
    setTimeout(typeEffect, speed);
}

typeEffect();