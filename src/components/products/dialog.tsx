"use client"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ProductType } from "@/types/productType";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useCartStore } from "@/stores/cart-store";
import { useState } from "react";

type props = {
   product: ProductType;
   isOpen: boolean;
   onClose: () => void;
}
export const DialogModal = ({ product, isOpen, onClose }: props) => {
   const { toast } = useToast();
   const { upsertCartItem } = useCartStore(state => state);
   const [quantity, setQuantity] = useState<number>(1);

   function handleAddProduct(){
      upsertCartItem(product, quantity)
      toast({
         title: `Adicionado ao carrinho!`,
         description:`${product.name}`,
         action: <ToastAction altText="fechar">Fechar</ToastAction>
      })
      onClose()
   };

   return (
      <Dialog open={isOpen} onOpenChange={onClose}>
         <DialogContent className="flex flex-col sm:flex-row">
            <div className="w-72 sm:w-96">
               <img src={product.image} alt={product.name} className="w-full h-60 sm:h-72 object-cover" />
            </div>
            <div className="flex flex-col justify-between">
               <div>
                  <DialogTitle className="text-3xl julee">{product.name}</DialogTitle>
                  <DialogDescription>{product.description}</DialogDescription>
               </div>
               <div className="flex justify-between items-center">
                  <div className="flex items-center">
                     <Button variant={"secondary"} size={"icon"}
                        className="size-7 rounded-sm" onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}>
                        <MinusIcon />
                     </Button>
                     <span className="text-lg mx-2">{quantity}</span>
                     <Button variant={"secondary"} size={"icon"}
                        className="size-7 rounded-sm" onClick={() => setQuantity(prev => prev + 1)}>
                        <PlusIcon />
                     </Button>
                  </div>
                  <Button onClick={handleAddProduct}>Adicionar</Button>
               </div>
            </div>
         </DialogContent>
      </Dialog>
   )
}