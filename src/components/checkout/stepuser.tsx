"use client"
import { Steps } from "@/types/steps"
import { Dispatch, SetStateAction } from "react"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCheckoutStore } from "@/stores/checkout-store";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
   name: z.string().min(2, 'Preencha seu nome')
})

type props = {
   setStep: Dispatch<SetStateAction<Steps>>
}
export const StepUser = ({ setStep }: props) => {
   const { name, setName } = useCheckoutStore();
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: { name }
   })

   const onSubmit = (values: z.infer<typeof formSchema>) => {
      setName(values.name)
      setStep('address')
   }

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <FormField control={form.control}
               name='name'
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Seu Nome</FormLabel>
                     <FormControl>
                        <Input
                           autoFocus
                           placeholder="Digite seu nome"
                           {...field}
                           className="text-sm"
                        />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <Button type="submit" variant={'outline'}>Próximo</Button>
         </form>
      </Form>
   )
}