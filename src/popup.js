class Popup {
    constructor(elementClass) {
        this.button = document.querySelector(elementClass);
        this.button.addEventListener('click', () => {
            this.createPopup();
        })
    }
    createPopup = () => {
        if (document.querySelector('.popup')){
            const popup = document.querySelector('.popup');
            popup.remove();
            return;
          }
        
          const popup = document.createElement('div');
          popup.classList.add('popup');
          const cont = document.querySelector('.container');  
          cont.insertAdjacentElement('afterbegin', popup); 
          const elCoord = this.button.getBoundingClientRect();
          popup.style.position = 'absolute';
          popup.style.width = '150px';
          popup.style.height = '80px';
          popup.style.left = (elCoord.left + this.button.offsetWidth - this.button.offsetWidth/2 - popup.offsetWidth/2 + 'px');
          popup.style.top = elCoord.top - this.button.offsetHeight - popup.offsetHeight + 'px';
          popup.style.border = 'double black 3px';  
          popup.textContent = 'Popup Content';
    }
}

module.exports = Popup;