"use client"
import { FooterShop } from "@/components/footer-shop";
import { HeaderShop } from "@/components/header.shop";
import { TabsSkeleton } from "@/components/products/skeleton";
import { Tab } from "@/components/products/tab";
import { Suspense } from "react";

const ShopPage = () => {

   return (
      <div>
         <HeaderShop />
         <div className="wrapper-col p-2">
            <Suspense fallback={<TabsSkeleton />}>
               <Tab/>
            </Suspense>
         </div>
         <FooterShop />
      </div>
   );
}
export default ShopPage;