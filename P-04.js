function crearPersona(name, ci, email) {
    return {
        name: name,
        ci: ci,
        email: email,
    };
}
var persona1 = crearPersona("Cristian Sunagua", "123456789", "cristian@gmail.com");
var persona2 = crearPersona("Jorge Luis", "987654321", "Jorge.l@gmail.com");
console.log(persona1);
console.log(persona2);
