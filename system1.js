function Persona(name, email, key){
    this.name = name;
    this.email = email;
    this.key = key;
}
 
function Usuario(name, email, productosAcumulados, key){
    Persona.call(this,name,email,key);
    this.productosAcumulados = productosAcumulados;
}
Usuario.prototype = Object.create(Persona.prototype)
Usuario.prototype.constructor = Usuario;
Usuario.prototype.acumularPuntos = function(){
    console.log("Se acumularon puntos al usuario:", this.name);
}
Usuario.prototype.canjearPuntos = function(){
    console.log("Se canjearon puntos del usuario:", this.name);
}


function Producto(name, puntosNecesarios, cantidadDisponible, stock){
    this.name = name;
    this.puntosNecesarios = puntosNecesarios;
    this.cantidadDisponible = cantidadDisponible;
    this.stock = stock;
}
Producto.prototype.obtenerInformacion = function(){
    console.log("Se obtuvo información del producto:", this.name);
}

function ProductoFisico(name, puntosNecesarios, cantidadDisponible, precio, stock){
    Producto.call(this,name,puntosNecesarios,cantidadDisponible,stock);
    this.precio = precio;
}
ProductoFisico.prototype = Object.create(Producto.prototype);
ProductoFisico.prototype.constructor = ProductoFisico;
ProductoFisico.prototype.actualizarStock = function(){
    console.log("Se actualizó el stock del producto físico:", this.name);
}
ProductoFisico.prototype.enviarProducto = function(){
    console.log("Se envió el producto físico:", this.name);
}


function ProductoDigital(name, puntosNecesarios, url, cantidadDisponible, stock){
    Producto.call(this,name,puntosNecesarios,cantidadDisponible,stock);
    this.url = url;
}
ProductoDigital.prototype = Object.create(Producto.prototype);
ProductoDigital.prototype.constructor = ProductoDigital;
ProductoDigital.prototype.descargar = function(){
    console.log("Se descargó el producto digital:", this.name);
}
ProductoDigital.prototype.obtenerProductoEmail = function(){
    console.log("Se obtuvo el producto digital por email:", this.name);
}


function Actividad(tipo, puntosOtorgados){
    this.tipo = tipo;
    this.puntosOtorgados = puntosOtorgados;
}
Actividad.prototype.completarActividad = function(){
    console.log("Se completó la actividad:", this.tipo);
}

function categoriaDeProducto(name, descripcion){
    Producto.call(this,name, puntosNecesarios, cantidadDisponible, stock)
    this.descripcion = descripcion;
}
categoriaDeProducto.prototype = Object.create(Producto.prototype)
categoriaDeProducto.prototype.constructor = categoriaDeProducto
categoriaDeProducto.prototype.listaProductos = function(){
    console.log("Esta es la lista des productos",this.name);
}


function OrdenDeCanje(usuario, producto, fecha){
    this.usuario = usuario;
    this.producto = producto;
    this.fecha = fecha;
}
OrdenDeCanje.prototype.confirmarOrden = function(){
    console.log("Se confirmó la orden para el producto:", this.producto.name);
}
OrdenDeCanje.prototype.cancelarOrden = function(){
    console.log("Se canceló la orden de canje para el producto:", this.producto.name);
}


function Administrador(name, email, key){
    Persona.call(this,name, email, key )
}
Administrador.prototype=Object.create(Persona.prototype)
Administrador.prototype.constructor = Administrador
Administrador.prototype.agregarProducto = function(){
    console.log("Se agregó un nuevo producto a la tienda");
}
Administrador.prototype.modificarProducto = function(){
    console.log("Se modificó un producto en la tienda");
}
Administrador.prototype.eliminarUsuario = function(){
    console.log("Se eliminó un usuario de la tienda");
}