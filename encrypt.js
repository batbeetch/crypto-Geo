
let descifrar = document.getElementById('descifrar');

function clickCifrar(){
    let cifrar = document.getElementById('cifrar'); //Obteniendo textarea con ID cifrar
    let contenedor = document.getElementById("contenedor"); //obteniendo <p> con ID contenedor
    
    if(/[A-Z]/.test(cifrar.value)){
        alert('Tu texto contiene Mayuscula!');
        return false;
    }

    if(/\d/.test(cifrar.value)){
        alert('Tu texto contiene numeros!');
        return false;
    }

    contenedor.innerHTML = encrypt(cifrar.value); //asignandole a 'contenedor' el resultado de la funcion 'encrypt' (se envia por parametro el valor de 'cifrar')
    //alert(encrypt(cifrar.value));
}

function encrypt(valor){
    console.log('Inicio');
    console.log(valor);
    let nuevoTexto = '';
    for (let i = 0; i < valor.length; i++){
        if(valor[i]=='e'){
            nuevoTexto+= 'enter';
            console.log(valor[i])
        }
        else if(valor[i]=='i'){
            nuevoTexto+= 'imes';
            console.log(valor[i])
        }
        else if(valor[i]=='a'){
            nuevoTexto+='ai';
            console.log(valor[i])
        }
        else if(valor[i]=='o'){
            nuevoTexto+='ober';
            console.log(valor[i])
        }
        else if(valor[i]=='u'){
            nuevoTexto+='ufat';
            console.log(valor[i])   
        }
        else{
            nuevoTexto+= valor[i]
        }
    }
    return nuevoTexto;
}

function clickDescifrar(){
    let descifrar = document.getElementById('cifrar'); //Obteniendo textarea con ID cifrar
    let contenedor = document.getElementById("contenedor"); //obteniendo <p> con ID contenedor
    if(/[A-Z]/.test(descifrar.value)){
        alert('Tu texto contiene Mayuscula!');
        return false;
    }

    if(/\d/.test(descifrar.value)){
        alert('Tu texto contiene numeros!');
        return false;
    }
    contenedor.innerHTML = decrypt(descifrar.value); //asignandole a 'contenedor' el resultado de la funcion 'encrypt' (se envia por parametro el valor de 'cifrar')
}

function decrypt(valor){
    console.log('Inicio');
    console.log(valor);
    //let nuevoTexto = '';

    
    valor = valor.split('enter').join('e');
    valor = valor.split('imes').join('i');
    valor = valor.split('ai').join('a');
    valor = valor.split('ober').join('o');
    valor = valor.split('ufat').join('u');

    return valor
}

function copiar(){
    let texto = document.getElementById('contenedor').innerText;
    navigator.clipboard.writeText(texto)
}

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/