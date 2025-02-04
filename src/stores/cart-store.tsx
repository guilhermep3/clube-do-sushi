import { Cart } from "@/types/cart";
import { ProductType } from "@/types/productType";
import { Sauce } from "@/types/sauce";
import { create } from "zustand";

type States = {
   cart: Cart[];
   sauceStored: Sauce
}

type Actions = {
   upsertCartItem: (product: ProductType, quantity: number) => void;
   upsertSauce: (sauce: Sauce) => void;
}

const initialStates: States = {
   cart: [],
   sauceStored: {
   id: 1,
   name: 'Shoyu',
   img: 'molhos/molho-shoyu.png'
}
}

export const useCartStore = create<States & Actions>()(set => ({
   ...initialStates,
   upsertSauce: (sauce: Sauce) => set(state => {
      return {...state, sauceStored: sauce}
   }),
   upsertCartItem: (product: ProductType, quantity: number) => set(state => {
      let newCart = state.cart;

      let productIndex = newCart.findIndex(p => p.product.id === product.id);

      if (productIndex < 0) {
         newCart.push({ product, quantity: 0 });
         productIndex = newCart.findIndex(p => p.product.id === product.id);
      }

      newCart[productIndex].quantity += quantity;

      if (newCart[productIndex].quantity <= 0) {
         newCart = newCart.filter(p => p.product.id !== product.id);
      }


      return { ...state, cart: newCart }
   }
   )
}))