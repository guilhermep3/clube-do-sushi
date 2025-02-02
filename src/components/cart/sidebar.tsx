import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCartStore } from "@/stores/cart-store";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { MinusIcon, PlusIcon, ShoppingCart } from "lucide-react";
import { CartItem } from "./cartItem";

export const SideBar = () => {
   const { cart } = useCartStore();

   let subtotal = 0;
   for (let item of cart) {
      subtotal += item.quantity * item.product.price;
   }

   return (
      <Sheet>
         <SheetTrigger>
            <Button className="relative">
               <ShoppingCart className="size-6" />
               {cart.length > 0 &&
                  <span className="size-3 bg-orange-600 absolute -top-1 -right-1 rounded-full"></span>
               }
            </Button>
         </SheetTrigger>
         <SheetContent>
            <SheetHeader>
               <SheetTitle>Carrinho</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-5 my-3">
               {cart.map(item => (
                  <CartItem key={item.product.id} item={item}/>
               ))}
            </div>
            <Separator />
            <div className="flex justify-between items-center text-sm mb-3">
               <p>Subtotal:</p>
               <p>R${subtotal.toFixed(2)}</p>
            </div>
            <Button disabled={cart.length === 0} className="w-full">Comprar</Button>
         </SheetContent>
      </Sheet>
   )
}