const productosContainer = document.getElementById("productos-container");

   function agregarTarjeta({id,imagen,nombre,descripcion,precio}  /* --> DESTRUCTURY */){
    const card= `<div data-id=${id} class="col-card col my-4">
        <a class="card-link" href="#"> 
            <div class="card h-100 ">
            <img src="Autos/${imagen}" class="card-img-top" alt=${nombre}>

            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
        
                <p class="card-text">
                ${descripcion}
                </p>
            </div>
        
            <div class="card-footer">
                <small class="text-muted">$${precio}</small>
            </div>
            </div>
        </a>  
    </div>`
    productosContainer.innerHTML+= card;

    /* const tarjetaAgregada = document.getElementById(`card-${id}`) 
    tarjetaAgregada.addEventListener('click', (event) => {
        event.preventDefault()
        console.log("click en el producto")
    }) */
    $('.col-card').click(function(event){
        event.preventDefault()
        const id = $(this).attr('data-id')
        console.log("click en el producto",id)
    })
   }
function cargarTarjetas(){
    productos.forEach(agregarTarjeta)
}

cargarTarjetas()

function buscarPorNombre(nombreBuscado){
    const productosContainer= document.getElementById('productos-container')
    productosContainer.innerHTML=''
    const text = document.getElementById("text-prod") 
       text.innerHTML=""
    for(producto of productos){
        const nombreEnMinuscula=producto.nombre.toLowerCase()
        const nombreBuscadoEnMinuscula= nombreBuscado.toLowerCase()

        if(nombreEnMinuscula.includes(nombreBuscadoEnMinuscula)){
            agregarTarjeta(producto)
        }
    }
    
}


const txtBuscar = document.getElementById("txt-buscar")
txtBuscar.addEventListener('keyup',(envent)=>{ /* event--> informacion del evento */
    const textoBuscado = txtBuscar.value.trim() 
    console.log('Texto buscado:',textoBuscado)
    if(textoBuscado != ''){
        buscarPorNombre(textoBuscado)
    }else{
       const text = document.getElementById("text-prod") 
       text.innerHTML=""
       productosContainer.innerHTML=""
       cargarTarjetas()
    }
    if(productosContainer.innerHTML == ''){
        const text = document.getElementById("text-prod") 
        text.innerHTML=` <p id="tex-res">NO SE HAN ENCONTRADO RESULTADOS</p>`
    }
})
