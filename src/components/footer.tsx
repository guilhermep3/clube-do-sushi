import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

export const Footer = () => {

   return (
      <footer className="bg-cinza1">
         <div className="wrapper-col p-4 sm:p-10 gap-7">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-14 sm:w-3/4 mx-auto">
               <div>
                  <h1 className="font-bold mb-3">Link</h1>
                  <ul className="flex flex-col gap-2">
                     <li><a href="#home" className="hover:text-primary transition text-sm">Home</a></li>
                     <li><a href="#about" className="hover:text-primary transition text-sm">Sobre</a></li>
                     <li><a href="#services" className="hover:text-primary transition text-sm">Serviços</a></li>
                     <li><a href="#team" className="hover:text-primary transition text-sm">Time</a></li>
                     <li><a href="#locals" className="hover:text-primary transition text-sm">Locais</a></li>
                  </ul>
               </div>
               <div>
                  <h1 className="font-bold mb-3">Horários</h1>
                  <ul className="flex flex-col gap-2">
                     <li className="text-sm"><span className="text-primary text-base mr-1">Seg a sex</span> 07:00 - 23:00</li>
                     <li className="text-sm"><span className="text-primary text-base mr-1">Sáb</span> 08:00 - 23:00</li>
                     <li className="text-sm"><span className="text-primary text-base mr-1">Dom</span> 08:00 - 22:00</li>
                  </ul>
               </div>
               <div>
                  <h1 className="font-bold mb-3">Contatos</h1>
                  <ul className="flex flex-col gap-2">
                     <li className="text-sm"><span className="text-base">Email:</span><p>clubedosushi@gmail.com</p></li>
                     <li className="text-sm"><span className="text-base">Número:</span><p>55 987654321</p></li>
                     <li className="text-sm"></li>
                  </ul>
               </div>
               <div>
                  <h1 className="font-bold mb-3">Redes Sociais</h1>
                  <ul className="flex flex-col gap-3">
                     <li className="text-sm flex gap-1"><InstagramIcon size={20} className="text-primary"/> @clubedosushi</li>
                     <li className="text-sm flex gap-1"><FacebookIcon size={20} className="text-primary"/> @clubedosushi</li>
                     <li className="text-sm flex gap-1"><TwitterIcon size={20} className="text-primary"/> @clubedosushi</li>
                  </ul>
               </div>
            </div>
            <a href="https://github.com/guilhermep3" target="_blank" className="text-center text-sm hover:underline opacity-70">developed by Guilherme Pereira</a>
         </div>
      </footer>
   )
}