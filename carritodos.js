

   
    
    let carrito =[];
    let total = 0;
    
    function agregarAlCarrito(nombre, precio) {
        carrito.push({ nombre, precio });
        total += precio;

    console.log(`Producto agregado: $${nombre} - Precio: $${precio.toFixed(2)}`);
    console.log(`Total actual en el carrito: $${total.toFixed(2)}`);
   

        actualizarCarrito();
    }
    function actualizarCarrito() {
        const listaCarrito = document.getElementById('listaCarrito');
        const totalCarrito = document.getElementById('totalCarrito');
    
    
        listaCarrito.innerHTML = '';
    
    
        carrito.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = ` ${item.nombre} - ${item.precio.toFixed(2)}`;
            listaCarrito.appendChild(listItem);
        });
    

        totalCarrito.textContent = total.toFixed(2);
    }
    function limpiarCarrito() {
        carrito =[];
        total = 0;
    
        console.log("Carrito limpio");
    
        
        actualizarCarrito();
    }

