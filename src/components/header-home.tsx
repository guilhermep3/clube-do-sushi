import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export const HeaderHome = () => {

   return (
      <div className="bg-cinza2 z-30 fixed top-0 right-0 left-0">
         <div className="wrapper flex justify-between items-center px-5 sm:px-10 py-3">
            <Link href={'/'}>
               <img src="./sushi-logo.png" alt="logo da empresa" className="w-16 h-auto" />
            </Link>
            <nav className="hidden sm:block">
               <ul className="flex gap-5">
                  <li><a href="#home" className="hover:text-red-600 transition">Home</a></li>
                  <li><a href="#about" className="hover:text-red-600 transition">Sobre</a></li>
                  <li><a href="#services" className="hover:text-red-600 transition">Serviços</a></li>
                  <li><a href="#team" className="hover:text-red-600 transition">Time</a></li>
                  <li><a href="#locals" className="hover:text-red-600 transition">Locais</a></li>
               </ul>
            </nav>
            <div className="flex items-center gap-3">
               <ThemeToggle />
               <Button>
                  <Link href={'/shop'}>Comprar</Link>
               </Button>
            </div>
         </div>
      </div>
   )
}