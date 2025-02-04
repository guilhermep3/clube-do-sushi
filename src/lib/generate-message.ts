import { useCartStore } from "@/stores/cart-store";
import { useCheckoutStore } from "@/stores/checkout-store"

export const GenerateMessage = () => {
   const { name, address } = useCheckoutStore(state => state);
   const { cart, sauceStored } = useCartStore(state => state);

   let orderProducts = [];
   for (let item of cart) {
      orderProducts.push(`${item.product.name} x${item.quantity}`)
   }

   return `**Dados do cliente:**
Nome: ${name}
Endereço: ${address.street}, ${address.number} (${address.complement})
${address.district}, ${address.city}/${address.state}
------
**Pedido:**
${orderProducts.join("\n")}
**Molho Adicional:**
${sauceStored?.name}
`
}