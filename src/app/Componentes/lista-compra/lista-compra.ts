import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.html',
  styleUrls: ['./lista-compra.scss']
})
export class ListaProductos implements OnInit {

  productos: any[];
  // creo un array llamado productos; en él creo cada uno de los productos, con sus datos.
  // estos productos serán los que se mostrarán.
  constructor() {
    const producto1 = {
      titulo: 'Nombre Producto 1',
      cuerpo: `Descripción Producto 1 `,
      comprado: true
    };
    const producto2 = {
      titulo: 'Nombre Producto 2',
      cuerpo: `Descripción Producto 2`,
      comprado: false,
    };
    const producto3 = {
      titulo: 'Nombre Producto 3',
      cuerpo: `Desripción Producto 3`,
      comprado: false,
    };
    const producto4 = {
      titulo: 'Nombre Producto 4',
      cuerpo: `Descripción Producto 4`,
      comprado: true,
    };
    this.productos = [];
    this.productos.push(producto1);
    this.productos.push(producto2);
    this.productos.push(producto3);
    this.productos.push(producto4);
  }

  ngOnInit() {
  }

}
