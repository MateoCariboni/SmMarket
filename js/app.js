const btnTodos = document.querySelector('.todos');
const btnFragancias = document.querySelector('.fragancias');
const btnPremiums = document.querySelector('.premiums');
const btnBodySplashes = document.querySelector('.bodySplashes');
const btnTextiles = document.querySelector('.textiles');
const btnDifusores = document.querySelector('.difusores');
const contenedorProductos = document.querySelector('.productos');

const productos = () =>{
    let productosArreglo = [];
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto => productosArreglo = [...productosArreglo,producto]);

    const fragancia = productosArreglo.filter(fragancia=> fragancia.getAttribute('data-producto') === 'fragancia');
    const premium = productosArreglo.filter(premium => premium.getAttribute('data-producto') === 'premium');
    const bodySplash = productosArreglo.filter(bodySplash => bodySplash.getAttribute('data-producto') === 'bodySplash');
    const textil = productosArreglo.filter(textil=> textil.getAttribute('data-producto') === 'textil');
    const difusor = productosArreglo.filter(difusor=> difusor.getAttribute('data-producto') === 'difusor');

    mostrarProductos(fragancia, premium, bodySplash, textil, difusor, productosArreglo);

}

const mostrarProductos = (fragancia, premium, bodySplash, textil, difusor, todos) =>{
    btnFragancias.addEventListener('click', ()=>{
        limpiarHtml(contenedorProductos);
        fragancia.forEach(fragancia=> contenedorProductos.appendChild(fragancia));
    });

    btnPremiums.addEventListener('click', ()=>{
        limpiarHtml(contenedorProductos);
        premium.forEach(premium=> contenedorProductos.appendChild(premium));
    });

    btnBodySplashes.addEventListener('click', ()=>{
        limpiarHtml(contenedorProductos);
        bodySplash.forEach(bodySplash=> contenedorProductos.appendChild(bodySplash));
    });
    btnTextiles.addEventListener('click', ()=>{
        limpiarHtml(contenedorProductos);
        textil.forEach(textil=> contenedorProductos.appendChild(textil));
    });
    btnDifusores.addEventListener('click', ()=>{
        limpiarHtml(contenedorProductos);
        difusor.forEach(difusor=> contenedorProductos.appendChild(difusor));
    });
    btnTodos.addEventListener('click',()=>{
        limpiarHtml(contenedorProductos);
        todos.forEach(todos=> contenedorProductos.appendChild(todos));
    });
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    productos();
});