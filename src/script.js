//Maquina de escrever
function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = " ";
    textoArray.forEach(function (letra, i) {
        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 100 * i);
    });
}

const titulo = document.querySelector(".Welcome");
alert(titulo);
typeWrite(titulo);