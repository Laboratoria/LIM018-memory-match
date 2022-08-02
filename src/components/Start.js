const Start = () => {
  
  const div_start = document.createElement('div'); //Contenedor del componente Start
  div_start.className = "div_start";
  
  const div_img_title = document.createElement('div'); //Título de la App
  div_img_title.className = 'div_img_title';
  const img_title = document.createElement('img');
  img_title.className = 'img_title';
  img_title.src = '../img/title.png';
  img_title.alt = 'title';
  div_img_title.appendChild(img_title);
  div_start.appendChild(div_img_title);
  
  const div_container = document.createElement('div'); //Imagen de Pikachu 
  div_container.className = "div_container";
  div_start.appendChild(div_container);
  
  const title_welcome = document.createElement('h1'); //Welcome
  title_welcome.className = 'title_welcome';
  title_welcome.innerText = '¡Bienvenidos!';
  div_container.appendChild(title_welcome);
  
  const div_img_pikachu = document.createElement('div'); //Pikachu
  div_img_pikachu.className = 'div_img_pikachu';
  const img_pikachu = document.createElement('img');
  img_pikachu.className = 'img_pikachu';
  img_pikachu.src = './img/pikachu.png';
  img_pikachu.alt = 'pikachu';
  div_img_pikachu.appendChild(img_pikachu);
  div_container.appendChild(div_img_pikachu);
     
  
  const div_end = document.createElement('div'); //final de la página
  div_end.className = 'div_end';

  const input_name = document.createElement('input');
  input_name.placeholder = "Escribe tu nombre";
  input_name.className = 'input_name';

  const btn_play = document.createElement('button');
  btn_play.className = 'btn_play';
  btn_play.setAttribute('type', 'button');
  const btn_text = document.createTextNode('Jugar');
  btn_play.appendChild(btn_text);
  div_end.appendChild(input_name);
  div_end.appendChild(btn_play);

  div_start.appendChild(div_end);


  return div_start;

}
export default Start;











