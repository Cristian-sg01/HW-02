function crearPersona(name: string, ci: string, email: string): Persona {
    return {
      name,
      ci,
      email,
    };
  }
  
  interface Persona {
    name: string;
    ci: string;
    email: string;
  }
  
  
  const persona1 = crearPersona("Cristian Sunagua", "123456789", "cristian@gmail.com");
  const persona2 = crearPersona("Jorge Luis", "987654321", "Jorge.l@gmail.com");
  
  console.log(persona1);
  console.log(persona2);
  