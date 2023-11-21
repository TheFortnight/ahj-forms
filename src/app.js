//const Popup = require('./popup')
//const popup = new Popup('.button');

const subscribeWidget = document.querySelector('.subscribe');
const subscribeForm = subscribeWidget.querySelector('.subscribe-form');
const nameInput = subscribeWidget.querySelector('.name');
const phoneInput = subscribeWidget.querySelector('.phone');

subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if(xhr.readyState !== 4) return;
        console.log('xhr.responseText: ' + xhr.responseText);
    };

    xhr.open('POST', '');

    xhr.send();
});