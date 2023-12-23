class SubscriptionApi {
    constructor(apiUrl) {
        this.apiUrl = apiUrl
    }

    async add(user) {
        const request = fetch(this.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        const result = await request;

        if (!result.ok) {
            console.error('ERROR!');

            return;
        }

        const json = await result.json();

        const status = json.status;

        console.log('STATUS: ', status);
    }

    async remove(user) {
        const query = '?phone=' + user.phone;
        const request = fetch(this.apiUrl + query, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        const result = await request;

        if (!result.ok) {
            console.error('ERROR!');

            return;
        }

        const json = await result.json();

        const status = json.status;

        console.log('STATUS: ', status);
    }
}

window.api = new SubscriptionApi('http://localhost:8181/');

(async () => {
    const request = fetch('http://localhost:8181/index');

    const result = await request;

    const text = await  result.text();

    console.log(text);
})();






/*const subscribeWidget = document.querySelector('.subscribe');
const subscribeForm = subscribeWidget.querySelector('.subscribe-form');
const nameInput = subscribeWidget.querySelector('.name');
const phoneInput = subscribeWidget.querySelector('.phone');
const unsubscribeBtn = subscribeWidget.querySelector('.unsubscribe-btn');

subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const body = new FormData(subscribeForm);
    
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if(xhr.readyState !== 4) return;
        console.log('xhr.responseText: ' + xhr.responseText);
    };

    xhr.open('POST', 'http://localhost:8181');

    xhr.send(body);
});



unsubscribeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const body = Array.from(subscribeForm.elements)
        .filter(({ name }) => name)
        .map(({ name, value}) => `${name}=${encodeURIComponent(value)}`)
        .join('&');
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if(xhr.readyState !== 4) return;        
        console.log('xhr.responseText: ' + xhr.responseText);
    };

    xhr.open('DELETE', 'http://localhost:8181/?' + body);

    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.send();
});
//debugger;
const uploadForm = document.querySelector('.upload-form');
const previewImage = document.querySelector('.preview-image');

uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('uplodaing file!')
    const body = new FormData(uploadForm);
    
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if(xhr.readyState !== 4) return;
        console.log('xhr.responseText: ' + xhr.responseText);
        previewImage.src = 'http://localhost:8181' + xhr.responseText;
    };

    xhr.open('POST', 'http://localhost:8181/upload');
    xhr.send(body);

});*/