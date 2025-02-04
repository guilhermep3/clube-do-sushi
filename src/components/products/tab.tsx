"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GetAllProducts } from "@/services/product";
import { ProductType } from "@/types/productType";
import { EmptyProducts } from "./empty";
import { Button } from "../ui/button";
import { useState } from "react";
import { DialogModal } from "./dialog";

type Tabs = {
   title: string;
   value: string;
   products: ProductType[];
};

export const Tab = () => {
   const products = GetAllProducts();
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const [productModal, setProductModal] = useState<ProductType>();
   function onProductClick(product: ProductType) {
      setProductModal(product)
      setIsOpen(true)
   }

   const tabs: Tabs[] = [
      {
         title: "Sushi",
         value: "sushi",
         products: products.filter((p) => p.category === "sushi"),
      },
      {
         title: "Temaki",
         value: "temaki",
         products: products.filter((p) => p.category === "temaki"),
      },
      {
         title: "Nigiri",
         value: "nigiri",
         products: products.filter((p) => p.category === "nigiri"),
      },
      {
         title: "Combinados",
         value: "pack",
         products: products.filter((p) => p.category === "pack"),
      },
   ];

   return (
      <Tabs defaultValue="sushi" className="py-5" style={{ minHeight: "75vh" }}>
         <TabsList className="flex mt-24">
            {tabs.map((item) => (
               <TabsTrigger key={item.value} value={item.value} className="flex-1">
                  {item.title}
               </TabsTrigger>
            ))}
         </TabsList>
         {tabs.map((item) => (
            <TabsContent key={item.value} value={item.value} className="mt-6">
               {item.products.length > 0 ? (
                  <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mb-10 mx-1">
                     {item.products.map((product) => (
                        <div key={product.id} className="bg-cinza1 h-auto mb-5">
                           <img src={product.image} alt={product.name} className="w-full h-2/3 sm:h-3/4 object-cover" />
                           <div className="flex justify-between items-center px-1">
                              <h2 className="text-lg my-2">{product.name}</h2>
                              <p>R${product.price.toFixed(2)}</p>
                           </div>
                           <Button className="w-full" onClick={() => onProductClick(product)}>
                              Ver mais
                           </Button>
                        </div>
                     ))}
                  </div>
               ) : (
                  <EmptyProducts />
               )}
            </TabsContent>
         ))}
         {productModal && (
            <DialogModal
               isOpen={isOpen}
               onClose={() => setIsOpen(false)}
               product={productModal}
            />
         )}

      </Tabs>
   );
};