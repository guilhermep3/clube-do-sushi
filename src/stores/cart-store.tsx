import { Cart } from "@/types/cart";
import { ProductType } from "@/types/productType";
import { create } from "zustand";

type States = {
   cart: Cart[]
}

type Actions = {
   upsertCartItem: (product: ProductType, quantity: number) => void;
}

const initialStates: States = {
   cart: []
}

export const useCartStore = create<States & Actions>()(set => ({
   ...initialStates,
   upsertCartItem: (product: ProductType, quantity: number) => set(state =>{
      let newCart = state.cart;

      let productIndex = newCart.findIndex(p => p.product.id === product.id);

      if(productIndex < 0){
         newCart.push({product, quantity: 0});
         productIndex = newCart.findIndex(p => p.product.id === product.id);
      }

      newCart[productIndex].quantity += quantity;

      if(newCart[productIndex].quantity <= 0){
         newCart = newCart.filter(p => p.product.id !== product.id);
      }


      return {...state, cart: newCart}
   }
   )
}))