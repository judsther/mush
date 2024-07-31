//Hover de banner

const banner = document.getElementById('hover-banner');

banner.addEventListener('mouseover', ()=>{
   banner.src = '/img/Banner2.png'
});
   
banner.addEventListener('mouseout', ()=>{
    banner.src = '/img/Banner1.png';
 });

 //Invitar a subscribirse al hacer click en banner 


banner.addEventListener('click', () =>{
    prompt('¡Ingresa tu email para recibir las fechas de lanzamiento antes que nadie!')
})


 //Funcionalidad carrito

 const cartContainer = document.querySelector('#lista-carrito tbody');
let productsCart = [];

function addCart(evento){
    evento.preventDefault();
    console.log("Agregaste!");
    let productoSeleccionado = evento.target.parentElement.parentElement;
    leerDatosProductos(productoSeleccionado);
}

function leerDatosProductos(producto){
    console.log(producto.querySelector('button').getAttribute('data-id'));


const infoProducto = {
    id: producto.querySelector('button').getAttribute('data-id'),
    image: producto.querySelector('img').src,
    producto: producto.querySelector('.card-title').textContent,
    cantidad: 1

} 

const existe = productsCart.some((producto) => producto.id == infoProducto.id);

if(existe){
    productsCart.map((producto) =>{
        if(producto.id === infoProducto.id){
            producto.cantidad += 1;
            return producto;
        }
    })
}else{
productsCart.push(infoProducto);
}
console.log(productsCart);
pintarCarritoHTML()
}

function pintarCarritoHTML(){
    
    cartContainer.innerHTML = '';
    
    productsCart.map((producto) => {
        
        const filaTabla = document.createElement('tr');

        filaTabla.innerHTML = `
        <td><img src="${producto.image}" width="100"></td>
        <td>${producto.producto}</td>
        <td>${producto.cantidad}</td>
        <td>$27.99</td>
        `

        
        cartContainer.appendChild(filaTabla)  

    })
}
