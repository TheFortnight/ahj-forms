const button = document.querySelector('.button');
button.addEventListener('click', () => {

  if (document.querySelector('.popup')){
    const popup = document.querySelector('.popup');
    popup.remove();
    return;
  }

  const popup = document.createElement('div');
  popup.classList.add('popup');
  const cont = document.querySelector('.container');  
  cont.insertAdjacentElement('afterbegin', popup); 
  const elCoord = button.getBoundingClientRect();
  popup.style.position = 'absolute';
  popup.style.width = '150px';
  popup.style.height = '80px';
  popup.style.left = (elCoord.left + button.offsetWidth - button.offsetWidth/2 - popup.offsetWidth/2 + 'px');
  popup.style.top = elCoord.top - button.offsetHeight - popup.offsetHeight + 'px';
  popup.style.border = 'double black 3px';  
  popup.textContent = 'Popup Content';
})