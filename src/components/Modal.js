const Modal = (text) => {

  const div_popup_overlay = document.createElement('div');
  div_popup_overlay.className = 'popup-overlay';
  
  const div_popup_box_container = document.createElement('div'); //modal contenedor
  div_popup_box_container.className = 'popup-box-container';
  div_popup_overlay.appendChild(div_popup_box_container);
  
  const div_img = document.createElement('div');// imagen 
  div_img.className = 'check-container';
  const img_modal = document.createElement('img');
  img_modal.className = 'img_modal';
  img_modal.src = './img/title.png';
  div_img.appendChild(img_modal);
  div_popup_box_container.appendChild(div_img);
  
  const div_text_modal = document.createElement('div'); //texto
  div_text_modal.className = 'popup-message-container';
  const span_text = document.createElement('span');
  span_text.className = 'span-text';
  span_text.innerText = `${text}`;
  div_text_modal.appendChild(span_text);
  div_popup_box_container.appendChild(div_text_modal);
  
  const button_modal = document.createElement('button'); //botón
  button_modal.className = 'ok-btn';
  button_modal.setAttribute('type', 'button');
  const name_button_modal = document.createTextNode('Aceptar')
  button_modal.appendChild(name_button_modal);
  div_popup_box_container.appendChild(button_modal);

  return div_popup_overlay;
}

export default Modal;