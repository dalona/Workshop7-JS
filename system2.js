function Cliente(name, email, key, address, phone) {
    this.name = name;
    this.email = email;
    this.key = key;
    this.address = address;
    this.phone = phone;
}
Cliente.prototype.realizarPedido = function() {
    console.log("Se realizó un pedido para el cliente:", this.name);
}
Cliente.prototype.verHistorialPedidos = function() {
    console.log("Se visualizó el historial de pedidos para el cliente:", this.name);
}
Cliente.prototype.autenticacion = function() {
    console.log("Se autenticó al cliente:", this.name);
}

 function Restaurante(name){
    this.name = name;
}


 function RestauranteDigital(name, menuQR) {
    Restaurante.call(this,name)
    this.menuQR = menuQR;
}
RestauranteDigital.prototype = Object.create(Restaurante.prototype)
RestauranteDigital.prototype.constructor = RestauranteDigital
RestauranteDigital.prototype.agregarPlato = function() {
    console.log("Se agregó un plato al menú del restaurante digital:", this.name);
}
RestauranteDigital.prototype.actualizarPlato = function() {
    console.log("Se actualizó un plato del menú del restaurante digital:", this.name);
}



function RestauranteFisico(name, address, menuFisico) {
    Restaurante.call(this,name)
    this.address = address;
    this.menuFisico = menuFisico;
}
RestauranteFisico.prototype = Object.create(Restaurante.prototype)
RestauranteFisico.prototype.constructor = RestauranteFisico
RestauranteFisico.prototype.agregarPlato = function() {
    console.log("Se agregó un plato al menú del restaurante físico:", this.name);
}
RestauranteFisico.prototype.actualizarPlato = function() {
    console.log("Se actualizó un plato del menú del restaurante físico:", this.name);
}
RestauranteFisico.prototype.eliminarPlato = function() {
    console.log("Se eliminó un plato del menú del restaurante físico:", this.name);
}


function Pedido(cliente, restaurante, detallesPedido) {
    this.cliente = cliente;
    this.restaurante = restaurante;
    this.detallesPedido = detallesPedido;
}
Pedido.prototype.actualizarEstado = function() {
    console.log("Se actualizó el estado del pedido");
}
Pedido.prototype.calcularTotal = function() {
    console.log("Se calculó el total del pedido");
}


function Plato(name, precio, ingredientes) {
    this.name = name;
    this.precio = precio;
    this.ingredientes = ingredientes;
}
Plato.prototype.obtenerInfo = function() {
    console.log("Se obtuvo información del plato:", this.name);
}


function Menu(plato){
    this.plato = plato;
}


function MenuQR(plato, URL) {
    Menu.call(this,plato)
    this.URL = URL;
}
MenuQR.prototype = Object.create(Menu.prototype)
MenuQR.prototype.constructor = MenuQR
MenuQR.prototype.generarQR = function() {
    console.log("Se generó un código QR para el plato:", this.plato.name);
};


function MenuFisico(plato) {
    Menu.call(this,plato)
}
MenuFisico.prototype = Object.create(Menu.prototype)
MenuFisico.prototype.constructor = MenuFisico
MenuFisico.prototype.impresion = function() {
    console.log("Se imprimió el menú físico");
}
MenuFisico.prototype.visualizacion = function() {
    console.log("Se visualizó el menú físico");
}


function Repartidor(name, email, key, vehiculo, disponibilidad) {
    this.name = name;
    this.email = email;
    this.key = key;
    this.vehiculo = vehiculo;
    this.disponibilidad = disponibilidad;
}
Repartidor.prototype.aceptarEnvio = function() {
    console.log("El repartidor", this.name, "aceptó un envío");
}
Repartidor.prototype.actualizarUbicacion = function() {
    console.log("Se actualizó la ubicación del repartidor", this.name);
}
Repartidor.prototype.completarEntrega = function() {
    console.log("El repartidor", this.name, "completó una entrega");
}
Repartidor.prototype.autenticacion = function() {
    console.log("Se autenticó al repartidor:", this.name);
}
Repartidor.prototype.actualizarEstado = function() {
    console.log("Se actualizó el estado del repartidor:", this.name);
}