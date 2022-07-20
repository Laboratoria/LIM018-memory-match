const Start = () => {

  //Contenedor del componente Start
  const div_start = document.createElement('div');
  div_start.className = "div_start";
  //Título de la App
  const img_title = document.createElement('img');
  img_title.className = 'img_title';
  img_title.src = './img/title.png';
  img_title.alt = 'title';
  div_start.appendChild(img_title);
  //Imagen de Pikachu junto a las instrucciones
  const div_container_pikachu_instruction = document.createElement('div');
  div_start.appendChild(div_container_pikachu_instruction);
  //Pikachu
  const img_pikachu = document.createElement('img');
  img_pikachu.className = 'img_pikachu';
  img_pikachu.src = './img/pikachu.png';
  img_pikachu.alt = 'pikachu';
  div_container_pikachu_instruction.appendChild(img_pikachu);
  div_container_pikachu_instruction.className = "div_container_pikachu_instruction";
  //Instrucciones
  const div_instruction = document.createElement('div');
  div_instruction.className = 'div_instruction';
  div_container_pikachu_instruction.appendChild(div_instruction);

  const title_welcome = document.createElement('h1')
  title_welcome.className = 'title_welcome';
  title_welcome.innerText = 'Bienvenidos';
  div_instruction.appendChild(title_welcome);

  const div_p = document.createElement('div');
  div_p.className = 'div_p';
  div_instruction.appendChild(div_p);

  const p1 = document.createElement('p1');
  p1.className = 'p1';
  p1.innerText = '1. Debajo de cada carta hay una imagen.';
  div_p.appendChild(p1);
  const p2 = document.createElement('p2');
  p2.className = 'p2';
  p2.innerText = '2. Cada vez que hagas un click sobre una carta, ésta  se volteará y verás la imagen que esconde.';
  div_p.appendChild(p2);
  const p3 = document.createElement('p3');
  p3.className = 'p3';
  p3.innerText = ' 3. Ahora tendrás que buscar dicha imagen volteando otra carta. Si las imágenes son idénticas las cartas se quedarán volteadas, en otro caso se esconderán.';
  div_p.appendChild(p3);
  const p4 = document.createElement('p4');
  p4.className = 'p4';
  p4.innerText = ' 4. Para ganar tendrás que voltear todas las cartas con sus pares.';
  div_p.appendChild(p4);

  //final de la página
  const div_end = document.createElement('div');
  div_end.className = 'div_end'

  const input_name = document.createElement('input');
  input_name.placeholder = "Escribe tu nombre";
  input_name.className = 'input_name';

  const btn_play = document.createElement('button');
  btn_play.className = 'btn_play';
  btn_play.setAttribute('type', 'button');
  const btn_text = document.createTextNode('Jugar')
  btn_play.appendChild(btn_text);
  div_end.appendChild(input_name);
  div_end.appendChild(btn_play);

  div_start.appendChild(div_end);


  return div_start;

}
export default Start;











