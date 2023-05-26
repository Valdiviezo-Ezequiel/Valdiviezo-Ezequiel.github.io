window.addEventListener('DOMContentLoaded', function () { //carga del sw
    if (navigator.serviceWorker && navigator.serviceWorker.register){ //chequea si el navegador soporta sw
        navigator.serviceWorker.register('sw.js'); //registra el sw
    }else{
        console.log("no puedo usar service worker");
    }
})


// ------ FUNCIONES ------
        //Funcion que imprime todos los productos obtenidos del JSON
function productos() {
    
    fetch('productos.json')
        .then(respuesta => respuesta.json())
        .then(json => {


            let productos = document.getElementById('productos');
            let html = '<div id="contenedor-productos" class="row justify-content-center">';


            productos.innerHTML = '';

            json.forEach(producto => {
                html += `<div class="card col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                            <img src="${producto.imagen}" class="card-img-top" alt="${producto.alt}">
                            <div class="card-body">
                                <h3 class="card-title">${producto.nombre}</h3>
                                <p class="card-text">${producto.descripcion}</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Disciplina: ${producto.disciplina}</li>
                                <li class="list-group-item">Precio: ${producto.precio} </li>
                                <li class="list-group-item">${producto.envio}</li>
                            </ul>
                            <div class="card-body m-auto">
                                <a type="button" class="btn btn-outline-danger">Ver más</a>
                            </div>
                        </div> `
            });
            html += '</div>';
            productos.innerHTML = html;

        })
}
