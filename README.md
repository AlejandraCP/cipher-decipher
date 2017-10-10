# El repositorio contiene dos funciones **cipher** y **deCipher**

## Función cipher

Esta función consiste en la solicitud de un texto al usuario, el texto será sustituido por otro según el cifrado César. Cada letra del texto será reemplazada por otra que se encuentra en el número fijo de posiciones más adelantes en el alfabeto.  

## Función decipher  

El usuario podrá descifrar el texto cifrado.

## Contenido  
* Archivos adjuntos.  
* Pseudocódigo de la función.  
* Diagrama de flujo.  

### Archivos adjuntos en repositorio
1. **Carpeta assets** contiene diagrama de flujo.  
2. **Carpeta app** contiene archivo app.js en el cuál se ecuentra el código de la función con el lenguaje Javascript.  
3. **archivo index.html** está vinculado con app.js, el usuario podrá acceder a la función mediante este archivo.  
<file:///C:/Users/maria.DESKTOP-1MMFGAP/Desktop/cipher-decipher/index.html/>
4. **README.md** contiene pseudocódigo de la función y diagrama de flujo.  


### Pseudocódigo de la función cipher

* Inicio función Cifrado
  * phrase = Mostrar('Escribe el texto a cifrar:') : Solicita texto
  * charValue = 0;
  * cipherPhrase ='';
  * para( i = 0; mientras i < phrase.longitud; i+1){  
    * charValue = phrase.codigoASCII(i);
    * Si (charValue >= 65 y charValue <= 90){
      charValue = (charValue - 65 + 33) % 26 + 65  
      charValue = String.delCaracter(charValue)
      cipherPhrase = cipherPhrase+ charValue  
    }
    * si no (charValue>=97 y charValue<=122){  
      charValue = (charValue - 97 + 33)%26+97  
      charValue = String.delCaracter(charValue)  
      cipherPhrase = cipherPhrase+ charValue  
    }  

    }   
    Mostrar('El texto cifrado es: ' + cipherPhrase)
      Fin de ciclo  

* fin de la función  



### Pseudocódigo de la función deCipher  

* Inicio función decifrado
  * phrase2 = Mostrar('Escribe el texto a cifrar:') : Solicita texto
  * charValue2 = 0
  * deCipherPhrase =''
  * para( i = 0; mientras i < phrase2.longitud; i+1){  
    * charValue2 = phrase2.codigoASCII(i);
    * Si (charValue2 >= 65 y charValue2 <= 90){  
      charValue2 = (charValue2 + 65 - 33) % 26 + 65  
      charValue2 = String.delCaracter(charValue2)  
      deCipherPhrase = deCipherPhrase + charValue2  
    }
    * si no (charValue2>=97 y charValue2<=122){  
      charValue2 = (charValue2 + 97 - 45) % 26 + 97  
      charValue2 = String.delCaracter(charValue2)  
      cipherPhrase = cipherPhrase + charValue2  
    }  

    }   
    Mostrar('El texto cifrado es: ' + cipherPhrase)  

* fin de la función
