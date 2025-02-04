import { useCartStore } from "@/stores/cart-store";
import { Sauce } from "@/types/sauce";
import { useState } from "react";

export const SauceList = () => {
   const { upsertSauce } = useCartStore();
   const [sauceSelected, setSauceSelected] = useState<Sauce | null>(null)

   const sauces: Sauce[] = [
      {
         id: 1,
         name: 'Shoyu',
         img: 'molhos/molho-shoyu.png'
      },
      {
         id: 2,
         name: 'Missô',
         img: 'molhos/molho-misso.png'
      },
      {
         id: 3,
         name: 'Pimenta',
         img: 'molhos/molho-pimenta.png'
      },
      {
         id: 4,
         name: 'Wasabi',
         img: 'molhos/molho-wasabi.png'
      }
   ]

   function handleSauceClicked(sauce: Sauce) {
      setSauceSelected(sauce);
      upsertSauce(sauce);
   };

   return (
      <div className="flex gap-2 sm:gap-3 mt-1 mb-3">
         {sauces.map(sauce => (
            <div key={sauce.id}
               className={`flex flex-col items-center justify-center flex-wrap w-full gap-2 p-2 rounded-xl bg-cinza1 border hover:border-primary transition cursor-pointer
               ${sauceSelected && sauceSelected.id === sauce.id ? 'border-primary' : 'border-transparent'}`}
               onClick={() => handleSauceClicked(sauce)}>
               <p className="text-xs sm:text-sm">{sauce.name}</p>
               <img src={sauce.img} alt={sauce.name} className=" size-6 sm:size-10" />
            </div>
         ))}
      </div>
   )
}