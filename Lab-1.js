// Lab-1

// pregunta 1
//Cual es el resultado de la siguiente operacion?
 
console.log(1 + '1' - 1)

/*La respuesta seria 10 dado a en la exprecion que se muestra dentro del console.log se tiene 
inicial mente el digito 1 despues el operador + seguimamente se muestra el string ´1´, lo que ocurre aqui es que 
el operador + se encarga de convertir el 1 a un string y lo concatena, dando como resultado '11' para despues 
volver a ser convertido a un numero debido a que se cuenta con el operador - y a lo toma como un digito (11) aparte realiza
la operacion de restarle el 1 uy esto dara como resultado 10*/

//Pregunta 2.
//Que se imprimira en la consola? 

{
    let x = 5;
    let y = x++;

    console.log(y);
}
/* La respuesta seria y = 5; esto es debido a que el valor que esta teniendo x es de 5 inicialmente, aun que se visualiza x++ 
se podria comprender que a ese valor se le sumaria 1 pero esto pasara hasta realizar una operracion o procedimiento inicial */

//Pregunta 3
//Cual seria la salida del siguiente codigo

{
    let x = 10;
    (function()
    {
        console.log(x);
        let x = 20;
    }
    )
}

/*Para este caso se presentaria el error "ReferenceError", dado a que el valor inicial de X es de 10 como un dato global porque se declara fuera de la funcion,
seguidamente se da inicio a la funcion y en esta se vuelve a declara x = 20 esto lo asigna como una variable local dentro de la funcion. si x no se ubiera 
declarado denttro la funcion, se usaria la varable global pero como esta se establecion tambien dentro de la funcion misma por lo cual no lo buscara de una manera 
global sino local pero el error se da debido a que el console.log se encuentra antes de la declaracion de x por lo cual no logra dar con el valor de esta variable y 
retorna el error*/

//Pregunta 4 
//Cual es el resultado de esta expreseion?

{
    console.log(0 == '0');
}

/* La respuesta seria True, se debe entender que se tiene '0' el cual es un string pero en javaScrip intenta convertir la cadena a un numero, al realizar esto y
compararlo con el 0, para establecer que es verdad, por esto*/

//Pregunta 5 
// Que imprime este codigo?
{
    console.log(typeof null);
}

/*La respuesta seria object, cabe aclarar que se tiene un error en esta linea de codigo debido que se tiene Typeof, el cual se usa para retornar el tipo de dato de una 
variable o valor, despues hay un null lo cual representa la ausencia de un valor, al juntar estos de devuelve object pero se sabe que null no es uno en si pero igual lo 
retorna como uno, es error heredado de JS.*/

//Pregunta 6 
//Que retorna este codigo 
{
    console.log([] == false);
}

/* la respuesta seria true, para esta linea se cuenta con un [] los cual se establece como un array este se encuentra vacio y un false, estos son comparados por ==,
entoces JS comvierte el array en una cadena vacia y despues lo comviete a 0, el falce tambien se combierte en 0 al ser un booleano y esos seria iguales entonces. */

//Pregunta 7 
//¿Cuál es la salida de este código?++ 

{
    const arr = [1, 2, 3];
    const [x, y] = arr;
    console.log(y);
}

/* Respuesta seria 2, inicialmente se crea el array con los valores 1, 2 y 3, seguidamente se realiza la restruccion del array por el const [x, y] estos toman los 
valores del anterior array en orden por lo cual x = 1 y y = 2, a la por la salida seria 2.  */

//Pregunta 8 
//¿Cuál es la salida del siguiente código?
{
    let x = 10;
    (function() {
    console.log(x);
    let x = 20;
    })();
}

/*La respuesta seria ReferenceError, esto se da por que incialmente se declara x = 10 con una variable gloval, seguidamente se incia una funcion, donde se presenta
el comando de imprimir seguidamente se vulve a declara la variable x pero esta ves com olocal, el error se da cuando se inicia la funcion y se imprime dado que se 
deberia mostrar el valor de x pero esta fue establecida despues de console.log entonces en el momento de dar el valor aun no esta y presenta el error. */

//Pregunta 9
//¿Cuál es la salida del siguiente código?

{
    let a = [1, 2, 3];
    let b = a;
    b.push(4);
    console.log(a);
}

/* la respuesta seria 1, 2, 3 y 4, se inicia creando el array a (1, 2, 3), seguidamente se crea el b y este hace referencia con a (no se copia, sino se referencia) 
al agregar 4 con push b entonces a la hora de imprimir el array a imprimira 1, 2, 3 y 4 dado que a y b apuntan al mismo array. */ 

//Pregunta 10 
//¿Qué devuelve este código?

{
    let a = {};
    let b = a;
    console.log(a === b);
}

/* la respuesta es true, para este caso pasa lo mismo que en la pregunta anterior, dado a que se crea el objeto a (vacio), seguidamente se crea b pero este 
hace referencia al espacio de memoria de a por lo cual tambien estara vacio, entonces al comprarlos con '===' mostra que son los mismos, dado a que usan el 
mismo espacio de memoria. */ 