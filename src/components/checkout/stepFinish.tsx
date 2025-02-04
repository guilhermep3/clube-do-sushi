import { useCheckoutStore } from "@/stores/checkout-store"
import { Button } from "../ui/button";
import Link from "next/link";
import { GenerateMessage } from "@/lib/generate-message";

export const StepFinish = () => {
   const { name } = useCheckoutStore(state => state);

   const message = GenerateMessage();
   const LinkZap = `https://wa.me//${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(message)}`;
   return (
      <div className="flex flex-col gap-5 text-center">
         <p>Parabéns {name}!</p>
         <p  className="text-sm">Agora envie seu pedido para o whatsapp para finalizar. Nosso atendente irá te guiar durante o andamento do pedido.</p>
         <Button>
            <Link href={LinkZap} target="_blank">Enviar para o WhatsApp</Link>
         </Button>
      </div>
   )
}