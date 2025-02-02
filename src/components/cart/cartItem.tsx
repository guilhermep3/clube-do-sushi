import { MinusIcon, PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductType } from "@/types/productType"
import { Cart } from "@/types/cart"
import { useCartStore } from "@/stores/cart-store"

type props = {
   item: Cart
}
export const CartItem = ({ item }: props) => {
   const { upsertCartItem } = useCartStore();

   function handleMinusBtn(){
      upsertCartItem(item.product, -1)
   }
   function handlePlusBtn(){
      upsertCartItem(item.product, 1)
   }

   return (
      <div className="flex items-center justify-between gap-5">
         <div className="flex gap-2">
            <div className="w-16 overflow-hidden">
               <img src={item.product.image} alt={item.product.name} className="w-full rounded-lg" />
            </div>
            <div className="text-sm">
               <p>{item.product.name}</p>
               <p className="opacity-70 mt-1">R${item.product.price.toFixed(2)}</p>
            </div>
         </div>
         <div>
            <div className="flex items-center">
               <Button variant={"outline"} size={"icon"}
                  className="size-5 rounded-sm" onClick={handleMinusBtn}>
                  <MinusIcon />
               </Button>
               <span className="text-sm mx-2">{item.quantity}</span>
               <Button variant={"outline"} size={"icon"}
                  className="size-5 rounded-sm" onClick={handlePlusBtn}>
                  <PlusIcon />
               </Button>
            </div>
         </div>
      </div>
   )
}