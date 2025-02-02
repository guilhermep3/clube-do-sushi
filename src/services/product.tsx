import { products } from "@/data/products";
import { ProductType } from "@/types/productType"

export const GetAllProducts = (): ProductType[] => {
   return (
      products
   )
};