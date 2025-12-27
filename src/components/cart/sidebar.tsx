"use client"
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCartStore } from "@/stores/cart-store";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { ShoppingCart } from "lucide-react";
import { CartItem } from "./cartItem";
import { SauceList } from "../products/sauce";
import { useState } from "react";
import { CheckoutDialog } from "../checkout/dialogCheckout";

export const SideBar = () => {
  const { cart } = useCartStore();
  const [checkoutOpen, setCheckoutOpen] = useState<boolean>(false);

  let subtotal = 0;
  for (let item of cart) {
    subtotal += item.quantity * item.product.price;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <div className="relative bg-primary p-2 rounded-lg">
          <ShoppingCart className="size-6" />
          {cart.length > 0 &&
            <span className="size-3 bg-orange-500 absolute -top-1 -right-1 rounded-full"></span>
          }
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-5 my-3">
          {cart.map(item => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>
        <Separator />
        <div className="flex justify-between items-center text-base my-3">
          <p>Subtotal:</p>
          <p>R${subtotal.toFixed(2)}</p>
        </div>
        <Separator />
        <div>
          <p>Molho adicional: </p>
          <SauceList />
        </div>
        <Button
          disabled={cart.length === 0}
          className="w-full"
          onClick={() => setCheckoutOpen(true)}>Comprar
        </Button>
        <CheckoutDialog
          open={checkoutOpen}
          onOpenChange={setCheckoutOpen}
        />
      </SheetContent>
    </Sheet>
  )
}