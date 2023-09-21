function pink(elemento){
    elemento.style.background = "pink";
}

function white(elemento){
    elemento.style.background = "white";
}


function agregarPersona(){

    let nombre = prompt("Introduzca el nombre de la persona");
    let apellido = prompt("Introduzca el apellido: ");
    let email = prompt("Introduzca su correo");

    while(email=="" || email==null){  //VERIFICAMOS QUE EL EMAIL NO SEA NULO YA QUE VA A SER EL IDENTIFICADOR UNICO
        alert("Email no valido");
        email=prompt("Introduzca de nuevo su email");
    }

    let edad = prompt("Introduzca su edad");
    

    let tabla = document.getElementById("tabla"); //RESCATAMOS EL ELEMENTO TABLA DE NUESTRO HTML Y CREAMOS LAS FILAS Y COLUMNAS INSERTANDO LOS VALORES

    let c1 = document.createElement("td");
    let c2 = document.createElement("td");
    let c3 = document.createElement("td");
    let c4 = document.createElement("td");

    let texto1= document.createTextNode(nombre);
    let texto2= document.createTextNode(apellido);
    let texto3= document.createTextNode(email);
    let texto4= document.createTextNode(edad);

    c1.appendChild(texto1);
    c2.appendChild(texto2);
    c3.appendChild(texto3);
    c4.appendChild(texto4);

    let filas=document.createElement("tr");

    filas.appendChild(c1);
    filas.appendChild(c2);
    filas.appendChild(c3);
    filas.appendChild(c4);

    tabla.appendChild(filas);

    let lista = document.getElementById("personas"); //RESCATAMOS EL ELEMENTO PERSONAS DE NUESTRO DIV

    let li = document.createElement("li");

    let cadena = "Nombre completo: " + nombre + " " + apellido + " su correo es: " + email + " y  tiene " + edad + "años";

    let text = document.createTextNode(cadena);

    li.appendChild(text);

    lista.appendChild(li);

}

const reloj = () => { 

    let fechaActual=new Date();
    let hora = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();
    let segundos = fechaActual.getSeconds(); //CREAMOS UN TIPO DATE ASIGNADOLE LA FECHA ACTUAL Y OBTENEMOS HORAS MINUTOS Y SEGUNDOS

    document.getElementById("hora").innerHTML = `${hora}:${minutos}:${segundos}`; //LO ASOCIAMOS AL ELEMENTO HORA Y LE DAMOS EL FORMATO

    const meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    const dias = ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];

    let diaSemana = dias[fechaActual.getDay()]; //OBTENEMOS EL DIA DENTRO DEL ARREGLO DE DIAS Y REPETIMOS EL PASO PARA EL MES Y DIA DE LA SEMANA
    let dia = fechaActual.getDate();
    let mes = meses[fechaActual.getMonth()];
    let fechaTexto = `${diaSemana},${dia} ${mes}`; //DAMOS FORMATO

    document.getElementById("fecha").innerHTML = fechaTexto; // LO AÑADIMOS AL ELEMENTO FECHA

    document.getElementById("container");
}

setInterval(reloj,1000); //ESTE SET INTERVAL NOS MUESTRA LA FUNCION POR INTERVALO DE SEGUNDOS EN ESTE CASO 1000 EQUIVALE A 1 SEGUNDO


function borrarPersona(){

    let correo = prompt("Introduzca el correo de la persona a eliminar");

    let filas = document.getElementsByTagName("tr");

    let existe=false;

    for(let i=0; i<filas.length; i++){ //EN ESTE FOR RECORREMOS TODAS LAS FILAS Y COMPARAMOS EL TD EN LA POSICION 2 CON EL CORREO PASADO Y SI HAY COINCIDENCIAS LO ELIMINAMOS
        let fila=filas[i];
        let c = fila.getElementsByTagName("td")[2];
        let email = c.textContent;
        if(email===correo){
            existe=true;
            console.log(existe);
            filas[i].remove();

            let personaB = document.getElementById("personas");
            personaB.remove();

            let personaM = document.getElementById("personasM");
            personaM.remove();
        }
    }
    
    if(!existe){
        alert(`No se encontró ninguna persona con ese correo`);
    }

}

function modificarPersona(){

    let correo = prompt("Introduzca el correo de la persona a modificar");

    let filas = document.getElementsByTagName("tr");

    for(let i = 0; i<filas.length; i++){ //REPETIMOS EL MISMO PASO QUE EN ELIMINAR PARA BUSCAR COINCIDENCIAS EN ESTE CASO SI EXISTE CREAREMOS UN TD NUEVO CON LOS VALORES PASADOS POR PANTALL
        let fila=filas[i];
        let c = fila.getElementsByTagName("td")[2];
        let texto = c.textContent;

        if(texto === correo){

            let nombreNuevo = prompt("Introduzca el nuevo nombre: ");
            let apellidoNuevo = prompt("Introduzca el nuevo apellido: ");
            let emailNuevo = prompt("Introduzca el nuevo email: ");
            let nuevaEdad = prompt("Introduzca el nuevo edad: ");

            let c = filas[i].getElementsByTagName("td");

            c[0].textContent = nombreNuevo; //AÑADIMOS LAS VARIABLES A CADA POSICION 
            c[1].textContent = apellidoNuevo;
            c[2].textContent = emailNuevo;
            c[3].textContent = nuevaEdad;

            let lista = document.getElementById("personasM"); //CREAMOS LA LISTA PARA QUE NOS MUESTRE LAS PERSONAS MODIFICADAS

            let li = document.createElement("li");

            let cadena = "La persona con correo: " + correo + ", " + " ha sido reemplazada por la persona con correo: " + emailNuevo;

            let text = document.createTextNode(cadena);

            li.appendChild(text);

            lista.appendChild(li);

        }
    }

}
