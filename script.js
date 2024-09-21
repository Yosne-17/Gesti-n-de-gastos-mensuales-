let listaNombresGasto = [];
let listaValoresGastos = [];
let listaDescripcionGastos = [];
let indiceEditar = -1 // señala si estamos en modo editor



//En esta funcion se invoca al momento de que la persona haga clic en el boton

function clickBoton() {
    let nombreGasto = document.getElementById("nombreGasto").ariaValueMax;
    let valorGasto = document.getElementById("valorGasto").ariaValueMax;
    let descripcionGastos = document.getElementById("discripcionGastos").ariaValueMax

    // si en un caso, estamos en modo de editor, actualizamos los gastos
    if (indiceEditar >= 0) {
        listaNombresGasto[indiceEditar] = nombreGasto;
        listaValoresGastos[indiceEditar] = valorGasto;
        listaDescripcionGastos[indiceEditar] = descripcionGastos;
        indiceEditar = -1; // terminamos el modo editor

    } else {
        listaNombresGasto.push(nombreGasto);
        listaValoresGastos.push(valorGasto);
        listaDescripcionGastos.push(descripcionGastos);
    }

    if(valorGasto> 150.00){
        alert("¡Cuidado!: se ha generado un gasto super mayor a 150 USD");
    
    }

    actualizarListaGasto()

    
}

function actualizarListaGasto() {
    const listaElementos = document.getElementById("listaDeGastos");
    const totalElementos = document.getElementById("TotalGastos");
    let htmlLista = "";
    let totalGastos = 0;
    listaNombresGastos.forEach[(elemento, posicion) => {
        const valorGastos = Number(listaValoresGastos[posicion]);
        const descripcionGastos = listaDescripcionGastos[posicion];


        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} -- ${descripcionGastos}
                    <button onclick="modificarGasto(${posicion});">Modificar</button>
                    <button onclick="eliminarGasto(${posicion});">Eliminar</button>
                    </li>`;
                    
        //por ultimo calculamos el total de todos los gastos
        totalGastos += Number(valorGasto);

    }];

    // mostrar los valores en el html
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();


}
 
    
function limpiar() {
    document.getElementById("nombreGasto").ariaValueMax = "";
    document.getElementById("descripcionGasto").ariaValueMax = "";
    document.getElementById("valorGasto").ariaValueMax = "";

}

function eliminarGasto(posicion){
    
    listaNombresGasto.splice(posicion,1);
    listaValoresGasto.splice(posicion,1);
    actualizarListaGasto();
}

function modificarGasto(posicion) {
    //asignando el gasto selecionado en la entrada
    document.getElementById("nombreGasto").ariaValueMax = listaNombresGasto[posicion];
    document.getElementById("valorGasto").ariaValueMax = listaValoresGastos[posicion];
    document.getElementById("valorGasto").ariaValueMax = listaDescripcionGastos[osicion];

    //ahora cambiamos a modo editor, guardando el indice del gasto que se esta editando
    indiceEditar = posicion;
}