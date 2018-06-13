// 'use strict';

var html = document.querySelector('html');
var wrapper = document.querySelector('.wrapper');
var card = document.querySelector('.card');
var cardText = document.querySelector('.card__text');
var btn = document.querySelector('.button');
var input = document.querySelector('.input');

loadEventListeners();

function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', docLoaded);
    input.addEventListener('keyup', inputBinding);
    btn.addEventListener('click', submitInput);
    wrapper.addEventListener('mousedown', reloadPage);
}

function docLoaded() {
    // html.style = `animation: gradientDark 1s ease-in;
    //               animation-fill-mode: forwards`;

    html.className = 'dark';
}

function inputBinding() {
    cardText.textContent = input.value;
}

function submitInput() {
    if (input.value !== '') {
        // html.style = `animation: gradientLight 1.5s ease-in;
        //               animation-fill-mode: forwards`;

        html.className = 'light';

        input.value = '';
        input.style.display = 'none';

        card.className = 'card card--back';

        compliments = ['but you are a human equivalent of a unicorn', 'but Einstein would be jealous of your brain', 'but you\'re smarter than Google and Lisa Simpson combined', 'but you\'re hotter than Jon Snow and Khaleesi combined', 'but you\'re every dog\'s favorite person', 'but you\'re a great person to do group projects with', 'but your karaoke performances put Beyonce to shame', 'but you do wake up flawless', 'but you\'re a human equivalent of pizza', 'but you\'re such a badass you would make Voldemort run for the hills'];

        var randomIndex = Math.floor(Math.random() * compliments.length);
        cardText.textContent = compliments[randomIndex];

        btn.className = 'button reload';
        btn.textContent = 'Great! But I\'m still a little down';
    } else {
        card.className = 'card card--back';

        cardText.textContent = 'Feeling good already? Awesome!';

        setTimeout(function () {
            cardText.textContent = '';
        }, 2500);
    }
}

function reloadPage(e) {
    if (e.target.className === 'button reload') {
        window.location.reload();
    }
}