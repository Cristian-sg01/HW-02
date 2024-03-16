function saludar(nombre) {
    console.log(`¡Hola, ${nombre}!`);
  
    const hora = new Date().getHours();
    if (hora >= 0 && hora < 12) {
      console.log(`Buenos días, ${nombre}. ¿Cómo estás?`);
    } else if (hora >= 12 && hora < 18) {
      console.log(`Buenas tardes ${nombre}.`);
    } else {
      console.log(`Buenas noches ${nombre}.`);
    }
  }
  
saludar("Juan");
saludar("Ana");
  