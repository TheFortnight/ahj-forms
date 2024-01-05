class SubscriptionApi {
    constructor(apiUrl) {
        this.apiUrl = apiUrl
    }

    async add(user) {
        const request = fetch(this.apiUrl + 'subscriptions/', {
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
        const query = 'subscriptions/' + encodeURIComponent(user.phone);

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
};

// Server sent events

/*const eventSource = new EventSource('http://localhost:8181/sse');

eventSource.addEventListener('open', (e)=> {
    console.log(e);

    console.log('sse open');
});

eventSource.addEventListener('error', (e)=> {
    console.log(e);

    console.log('sse error');
});

const subscriptions = document.querySelector('.subscriptions');

eventSource.addEventListener('message', (e)=> {
    console.log(e);
    const { name, phone } = JSON.parse(e.data);

    subscriptions.appendChild(document.createTextNode(`${name} ${phone} \n`));

    console.log('sse message');

});*/

const ws = new WebSocket('ws://localhost:8181/ws');

const chat = document.querySelector('.chat');

const chatMessage = document.querySelector('.chat-message');

const chatSend = document.querySelector('.chat-send');

chatSend.addEventListener('click', (event) => {

    event.preventDefault();
    
    const message = chatMessage.value;

    if (!message) return;

    ws.send(message);

    chatMessage.value = '';
    
});

ws.addEventListener('message', (e)=> {
    console.log('received msg from server: ', e);

    const data = JSON.parse(e.data);
    const { chat: messages } = data;

    messages.forEach(message => {
        chat.appendChild(document.createTextNode(message + '\n'));
    });

    console.log('ws message');
});

ws.addEventListener('close', (e)=> {
    console.log(e);

    console.log('ws close');
});

ws.addEventListener('open', (e)=> {
    console.log(e);

    console.log('ws open');
});

ws.addEventListener('error', (e)=> {
    console.log(e);

    console.log('ws error');
});



window.api = new SubscriptionApi('http://localhost:8181/');

/*(async () => {
    const request = fetch('http://localhost:8181/index');

    const result = await request;

    const text = await  result.text();

    console.log(text);
})();*/






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