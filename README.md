# Función Cifrado César

**Esta función consiste en la solicitud de un texto al usuario, el texto será sustituido por otro según el cifrado César. Cada letra del texto será reemplazada por otra que se encuentra en el número fijo de posiciones más adelantes en el alfabeto.  
Para esta función solo se tiene en cuenta las 26 letras mayúsculas del alfabeto.**

## Contenido  
* Archivos adjuntos.  
* Pseudocódigo de la función.  
* Diagrama de flujo.  

### Archivos adjuntos en repositorio
1. **Carpeta app** contiene archivo app.js en el cuál se ecuentra el código de la función con el lenguaje Javascript.  
2. **archivo index.html** está vinculado con app.js, el usuario podrá acceder a la función mediante este archivo.
3. **README.md** contiene pseudocódigo de la función y diagrama de flujo.
## Pseudocódigo de la función Cifrado César

* Inicio función Cifrado
  * phrase = Mostrar('Escribe el texto a cifrar:') : Solicita texto
  * phraseToArray = phrase.convertir a mayúscula().separar e invertir orden('')
  * Crear array vacio newArray = []  

	//Ciclo itera por cada elemento  
  * para( i = 0; mientras i < longitud de phraseToArray; i+1)  
    * si phraseToArray[i] = cadena vacia o phraseToArray[i] >= 0  
      * phrase = Mostrar('El texto no debe contener espacios ni números,  
      escribe la frase a cifrar').convertir a mayúscula().separar e invertir orden('')  
      Fin de ciclo  
  * para( j = 0; mientras j < longitud de phraseToArray; j +1)  
  //Se obtiene valor ASCII de caracter que reemplaza al elemento
    * number = ((valor ASCII del elemento - 65) + 33 % 26 + 65)  
      * si (number) > 90  
          //Disminuye en 26 para solo obtener caracteres desde la A a la Z.
        * number = number - 26  
    * numberToLetter = letra según ASCII de valor(number)
    * Agregar numberToLetter a newArray  
    Fin de Ciclo  

  * Mostrar ('Su texto cifrado es: '+ newArray.en string(''))  
  * Preguntar('¿Desea descifrar el texto cifrado?')  
    * si(acepta)  
      * Mostrar('Su texto original es: ' + phrase)  
* fin de la función  


## Diagrama de flujo de la función Cifrado César
