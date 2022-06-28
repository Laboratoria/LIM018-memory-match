const Start = () => {
    const div_end = document.createElement('div');
    div_end.className = 'div_end'
  
    const input_name = document.createElement('input');
    input_name.placeholder = "Escribe tu nombre";
    input_name.className = 'input_name';
    
    const btn_play = document.createElement('button');
    btn_play.className = 'btn_play';
    const btn_text = document.createTextNode('Jugar')
    
    const message = document.createElement('span');
  
    btn_play.appendChild(btn_text);
    div_end.appendChild(input_name);
    div_end.appendChild(btn_play);
    div_end.appendChild(message);
  
    btn_play.addEventListener("click", (event) => {
      event.preventDefault();
      //let name = input_name.value;
      if(input_name.value===""){
        
        message.innerText = "Escribe tu nombre para jugar";
        //alert("Escribe tu nombre para empezar a jugar");
        
      } else {
        
        message.innerText = `Vamos a jugar ${input_name.value}!!!`;
        //alert(input_name.value);
      }
    })
    
  
  
    /* end.className = 'App';
    end.textContent = 'Soy Jackie!'; */
  
    return div_end;
    
  };
  
  export default Start;