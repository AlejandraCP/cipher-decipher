// Cifra un texto mediante el cifrado César.
function cipher(){
  // Se obtiene el texto a cifrar.
  var phrase = prompt('Escribe el texto a cifrar');
  // phrase es convertida a masyúscula y en un array con caracteres separados.
  var phraseToArray = phrase.toUpperCase().split('');
  // El array vacio, será nuevo array con los caracteres cifrados
  newArray = [];

  // Ciclo que itera por cada elemento del array phraseToArray.
  for(var i = 0; i < phraseToArray.length; i++){
    // Si el elemento es un string vacio aparece nuevo prompt.
    // Si el elemento parseado es >= a cero aparece nuevo prompt.
    if(phrase[i] === ' ' || parseInt(phraseToArray[i]) >= 0){
      phraseToArray = prompt('El texto no debe contener espacios ni números, \n escribe el texto a cifrar.').toUpperCase().split('');
      // El valor de i debe regresar a cero para volver a iterar por cada caracter.
      i = 0;
    }
  }

  // Ciclo que itera por cada elemento del array phraseToArray.
  for(var j = 0; j < phraseToArray.length; j++){
    // Obtiene el valor ASCII de caracter que remplaza al elemento.
    var number = ((phraseToArray[j].charCodeAt(0) - 65) + 33 % 26 + 65);
    // Si es mayor a 90 se disminuirá en 26 para solo obtener caracteres desde la A a la Z.
    if(number > 90){
        number -= 26;
    }
    // Convierte en caracter según valor numérico.
    var numberToLetter = String.fromCharCode(number);
    // Agrega el caracter al array.
    newArray.push(numberToLetter);
  }

  // Muestra el texto cifrado en un string.
  alert('Su texto cifrado es: '+ newArray.join(''));
  // Da opción a descifrar el texto cifrado.
  var returnDecipher =  confirm('¿Desea descifrar el texto cifrado?');
  // Si acepta, se muestra texto original.
  if(returnDecipher){
    document.getElementById("demo").innerHTML = 'Su texto original es: ' + phrase;
  }
}


// Descifra un texto codificado por el cifrado César.
function decipher(){
  // Se obtiene el texto a cifrar.
  var phrase = prompt('Escribe el texto a descifrar');
  // phrase es convertida a masyúscula y en un array con caracteres separados.
  var phraseToArray = phrase.toUpperCase().split('');
  // El array vacio, será nuevo array con los caracteres cifrados
  newArray = [];

  // Ciclo que itera por cada elemento del array phraseToArray.
  for(var i = 0; i < phraseToArray.length; i++){
    // Si el elemento es un string vacio aparece nuevo prompt.
    // Si el elemento parseado es mayor a cero aparece nuevo prompt.
    if(phrase[i] === ' ' || parseInt(phraseToArray[i]) >= 0){
      phraseToArray = prompt('El texto no debe contener espacios ni números, \n escribe la frase a cifrar.').toUpperCase().split('');
      // El valor de i debe regresar a cero para volver a iterar por cada elemento.
      i = 0;
    }
  }

  // Ciclo que itera por cada elemento del array phraseToArray.
  for(var j = 0; j < phraseToArray.length; j++){
    // Obtiene el valor ASCII de caracter que remplaza al elemento.
    var number = ((phraseToArray[j].charCodeAt(0) - 65) - 33 % 26 + 65);
    //Si es menor a 65 se suma 26 para solo obtener caracteres desde la A a la Z.
    if(number < 65){
        number = number + 26;
    }
    // Convierte en caracter según valor numérico.
    var numberToLetter = String.fromCharCode(number);
    // Agrega el caracter al array.
    newArray.push(numberToLetter);
  }

  // Muestra el texto descifrado en un string.
  alert('Su texto descifrado es: '+ newArray.join(''));
  // Da opción a cifrar el texto descifrado.
  var returnCipher =  confirm('¿Desea cifrar el texto descifrado?');
  // Si acepta, se muestra texto cifrado.
  if(returnCipher){
    document.getElementById("demo").innerHTML = 'Su texto original es: ' + phrase;
  }
}
