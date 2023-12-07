import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartModel } from '../../domain/models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //Definimos nuestro BehaviorSubject, este debe tener un valor inicial siempre
  private cart = new BehaviorSubject<Array<CartModel>>([]);

  //Tenemos un observable con el valor actual del BehaviourSubject
  public currentDataCart$ = this.cart.asObservable();

  public changeCart(cart: CartModel) {
    //Obtenemos el valor actual
    let listCart = this.cart.getValue();
    //Si no es el primer item del carrito
    if (listCart) {
      //Buscamos si ya cargamos ese item en el carrito
      const objIndex = listCart.findIndex(obj => obj.product.id == cart.product.id);
      //Si ya cargamos uno aumentamos su cantidad
      if (objIndex != -1) {
        listCart[objIndex].amount += 1;
      }
      //Si es el primer item de ese tipo lo agregamos derecho al carrito
      else {
        cart.amount = 1;
        listCart.push(cart);
      }
    }
    //Si es el primer elemento lo inicializamos
    else {
      listCart = [];
      cart.amount = 1;
      listCart.push(cart);
    }
    //Enviamos el valor a todos los Observers que estan escuchando nuestro Observable
    this.cart.next(listCart);
  }

  add(cart: CartModel) {
    //Obtenemos el valor actual de carrito
    const listCart = this.cart.getValue();
    //Buscamos el item del carrito para eliminar
    const objIndex = listCart.findIndex(obj => obj.product.id == cart.product.id);
    if (objIndex != -1) {
      //Seteamos la cantidad en 1 (ya que los array se modifican los valores por referencia, si vovlemos a agregarlo la cantidad no se reiniciará)
      listCart[objIndex].amount += 1;
      //Eliminamos el item del array del carrito
      // listCart.splice(objIndex,1);
    }
    this.cart.next(listCart);
  }

  subtract(cart: CartModel) {
    //Obtenemos el valor actual de carrito
    const listCart = this.cart.getValue();
    //Buscamos el item del carrito para eliminar
    const objIndex = listCart.findIndex(obj => obj.product.id == cart.product.id);
    if (objIndex != -1) {
      if (listCart[objIndex].amount > 1) {
        //Seteamos la cantidad en 1 (ya que los array se modifican los valores por referencia, si vovlemos a agregarlo la cantidad no se reiniciará)
        listCart[objIndex].amount -= 1;
        //Eliminamos el item del array del carrito
        // listCart.splice(objIndex,1);
      } else {
        this.remove(cart);
      }
    }
    this.cart.next(listCart);
  }

  remove(cart: CartModel) {
    //Obtenemos el valor actual de carrito
    const listCart = this.cart.getValue();
    //Buscamos el item del carrito para eliminar
    const objIndex = listCart.findIndex(obj => obj.product.id == cart.product.id);
    if (objIndex != -1) {
      //Seteamos la cantidad en 1 (ya que los array se modifican los valores por referencia, si vovlemos a agregarlo la cantidad no se reiniciará)
      listCart[objIndex].amount = 1;
      //Eliminamos el item del array del carrito
      listCart.splice(objIndex, 1);
    }
    this.cart.next(listCart); //Enviamos el valor a todos los Observers que estan escuchando nuestro Observable
  }

  clean() {
    //Limpiamos todo el carrito
    let listCart = this.cart.getValue();
    listCart = [];
    this.cart.next(listCart);
  }

  length() {
    const listCart = this.cart.getValue();
    return listCart.length;
  }
}
