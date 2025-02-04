import { Footer } from "@/components/footer";
import { HeaderHome } from "@/components/header-home";
import { Button } from "@/components/ui/button";
import { ChartNoAxesCombined, Check, CircleDollarSign, FishSymbol, House, Rocket, Star } from "lucide-react";
import Link from "next/link";

const Home = () => {

   return (
      <div>
         <HeaderHome />
         <section className="bg-cinza1 pt-20" id="home">
            <div className="wrapper flex-col sm:flex-row justify-center items-center gap-10 sm:gap-20 pt-6 sm:py-12 px-2 h-full">
               <div className="flex-1 text-center sm:text-start">
                  <h1 className="text-4xl sm:text-6xl julee">Sushi Club<br />Refrescante e Delicioso.</h1>
                  <h2 className="my-5 text-base">o Sushi Club, cada prato é uma experiência única, criada com tradição, qualidade e paixão. Venha viver essa experiência e descubra o verdadeiro sabor do Japão!</h2>
                  <Button className="px-9 py-6 sm:px-12 sm:py-7 text-xl">
                     <Link href={'/shop'}>Comprar</Link>
                  </Button>
               </div>
               <div className="flex-1 bg-red-600 rounded-tl-full rounded-bl-full">
                  <img src="./sushi-hero.png" alt="imagem do sushi" className="w-4/5 mx-auto" />
               </div>
            </div>
         </section>
         <section id="about">
            <div className="wrapper">
               <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
                  <div className="max-h-96 p-4 flex justify-center items-center flex-col text-center
                     border-r-4 border-b-4 border-primary">
                     <h1 className="julee text-3xl sm:text-4xl">Mais de 22 anos de experiência</h1>
                     <p className="my-2 sm:my-3 text-sm">Desde 2003, cada prato é preparado com dedicação para proporcionar a você o verdadeiro sabor da culinária japonesa, combinando tradição e qualidade.</p>
                     <div className="mt-3 flex gap-3 w-full justify-between">
                        <div className="flex flex-col items-center flex-1">
                           <ChartNoAxesCombined className="text-primary size-10 sm:size-14" />
                           <p className="font-bold">+22 anos exp</p>
                           <p className="mt-2 text-sm/5">Compromisso e excelência em cada detalhe.</p>
                        </div>
                        <div className="flex flex-col items-center flex-1">
                           <FishSymbol className="text-primary size-10 sm:size-14" />
                           <p className="font-bold">Ingredientes frescos</p>
                           <p className="mt-2 text-sm/5">Ingredientes selecionados para garantir o melhor sabor.</p>
                        </div>
                        <div className="flex flex-col items-center flex-1">
                           <Star className="text-primary size-10 sm:size-14" />
                           <p className="font-bold">5 Estrelas</p>
                           <p className="mt-2 text-sm/5">Aprovado por nossos clientes pela qualidade.</p>
                        </div>
                     </div>
                  </div>
                  <div className="aboutDiv1 flex justify-center items-center overflow-hidden">
                  </div>
                  <div className="aboutDiv2 hidden sm:flex justify-center items-center overflow-hidden">
                  </div>
                  <div className="max-h-96 p-4 flex justify-center items-center flex-col text-center
                     border-l-4 border-t-4 border-primary">
                     <h1 className="julee text-3xl sm:text-4xl">Entre para o nosso clube!</h1>
                     <p className="my-2 sm:my-3 text-sm">Seguindo a tradição japonesa garantimos um cardápio de qualidade e exclusividade para você.</p>
                     <div className="mt-3 flex gap-3 w-full justify-between">
                        <div className="flex flex-col items-center flex-1">
                           <House className="text-primary size-10 sm:size-14" />
                           <p className="font-bold">Aconchegante</p>
                           <p className="mt-2 text-sm/5">Experiência unica para você e sua familia.</p>
                        </div>
                        <div className="flex flex-col items-center flex-1 ">
                           <CircleDollarSign className="text-primary size-10 sm:size-14" />
                           <p className="font-bold">Economize</p>
                           <p className="mt-2 text-sm/5">Promoções especiais para clientes do clube.</p>
                        </div>
                        <div className="flex flex-col items-center flex-1">
                           <Rocket className="text-primary size-10 sm:size-14" />
                           <p className="font-bold">Entrega rápida</p>
                           <p className="mt-2 text-sm/5">Entrega rápida mantendo a qualidade.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section id="services" className="bg-cinza1 px-4 py-6">
            <div className="wrapper-col text-center">
               <h1 className="julee text-4xl sm:text-5xl text-center my-4">O Que Oferecemos</h1>
               <div className="flex justify-between items-center gap-8 flex-wrap">
                  <div className="flex flex-col justify-center items-center sm:flex-1 gap-2">
                     <img src="./services/services1.png" className="w-56 sm:w-72" alt="imagem do sushi em serviços" />
                     <h2 className="text-3xl julee">Nigiri</h2>
                     <p className="text-sm sm:text-base">Feito com uma bolinha de arroz moldada à mão e coberta com uma fatia de peixe cru.</p>
                  </div>
                  <div className="flex flex-col justify-center items-center sm:flex-1 gap-2">
                     <img src="./services/services2.png" className="w-56 sm:w-72" alt="imagem do sushi em serviços" />
                     <h2 className="text-3xl julee">Sushi Tradicional</h2>
                     <p className="text-sm sm:text-base">Rolinhos de sushi envoltos em alga (nori) e recheados com arroz, peixe cru e vegetais.</p>
                  </div>
                  <div className="flex flex-col justify-center items-center sm:flex-1 gap-2">
                     <img src="./services/services3.png" className="w-56 sm:w-72" alt="imagem do sushi em serviços" />
                     <h2 className="text-3xl julee">Temaki</h2>
                     <p className="text-sm sm:text-base">Sushi em formato de cone feito com folha de alga nori recheada com arroz, peixe cru, vegetais e cream cheese</p>
                  </div>
               </div>
            </div>
         </section>
         <section id="team" className=" px-4 py-6">
            <div className="wrapper-col text-center">
               <h1 className="julee text-4xl sm:text-5xl text-center my-4">Nosso Time</h1>
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 p-2">
                  <div className="flex flex-col justify-center items-center">
                     <img src="./team/team1.jpg" className="rounded-full w-10/12" alt="" />
                     <h2 className="julee text-3xl mt-3">Chefe 1</h2>
                     <div className="flex items-center sm:gap-1 mt-2">
                        <ChartNoAxesCombined className="text-primary size-5" />
                        <p>+20 anos de exp.</p>
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                     <img src="./team/team2.jpg" className="rounded-full w-10/12" alt="" />
                     <h2 className="julee text-3xl mt-3">Chefe 2</h2>
                     <div className="flex items-center sm:gap-1 mt-2">
                        <ChartNoAxesCombined className="text-primary size-5" />
                        <p>+17 anos de exp.</p>
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                     <img src="./team/team3.jpg" className="rounded-full w-10/12" alt="" />
                     <h2 className="julee text-3xl mt-3">Chefe 3</h2>
                     <div className="flex items-center sm:gap-1 mt-2">
                        <ChartNoAxesCombined className="text-primary size-5" />
                        <p>+11 anos de exp.</p>
                     </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                     <img src="./team/team4.jpg" className="rounded-full w-10/12" alt="" />
                     <h2 className="julee text-3xl mt-3">Chefe 4</h2>
                     <div className="flex items-center gap-1 mt-2">
                        <ChartNoAxesCombined className="text-primary size-5" />
                        <p>+7 anos de exp.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section id="locals" className="pt-0 sm:py-16 px-6 flex justify-center">
            <div className="max-w-4xl flex flex-col md:flex-row items-center gap-8 bg-primary p-5 sm:p-8 rounded-xl shadow-lg">
               <div className="w-full md:w-2/5 relative">
                  <img src="./locals.jpg" className="imgLocals rounded-lg" alt="Imagem da frente do restaurante" />
               </div>
               <div className="w-full md:w-2/3  text-white">
                  <h1 className="julee text-3xl sm:text-4xl">Locais que atendemos</h1>
                  <p className=" text-sm my-5">
                     Estamos presentes em diversas regiões para melhor atender você. Confira abaixo os estados onde nossa qualidade e sabor estão garantidos.
                  </p>
                  <div className="grid grid-cols-2 gap-4 font-medium">
                     <p className="flex gap-1"><Check className="size-5" /> São Paulo</p>
                     <p className="flex gap-1"><Check className="size-5" /> Rio de Janeiro</p>
                     <p className="flex gap-1"><Check className="size-5" /> Minas Gerais</p>
                     <p className="flex gap-1"><Check className="size-5" /> Espírito Santo</p>
                  </div>
                  <Button variant={"secondary"} className="w-full sm:w-32 mt-5">
                     <Link href={'/shop'}>Comprar</Link>
                  </Button>
               </div>
            </div>
         </section>
         <Footer/>
      </div>
   )
}
export default Home;