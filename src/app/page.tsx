import { Footer } from "@/components/footer";
import { HeaderHome } from "@/components/header-home";
import { ServicesCard } from "@/components/home/servicesCard";
import { TeamCard } from "@/components/home/teamCard";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/services";
import { teamData } from "@/data/team";
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
            <h2 className="my-5 text-base md:text-lg text-muted-foreground">No Sushi Club, cada prato é uma experiência única, criada com tradição, qualidade e paixão. Venha viver essa experiência e descubra o verdadeiro sabor do Japão!</h2>
            <Button className="px-9 py-6 sm:px-12 sm:py-7 text-xl">
              <Link href={'/shop'}>Comprar</Link>
            </Button>
          </div>
          <div className="flex-1 bg-red-600 rounded-tl-full rounded-bl-full">
            <img src="./sushi-hero.png" alt="imagem do sushi" className="w-4/5 mx-auto" />
          </div>
        </div>
      </section>
      <section id="about" className="py-24">
        <div className="wrapper">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
            <div className="relative max-h-96 p-6 sm:p-8 flex flex-col items-center text-center
              bg-cinza1 rounded-2xl shadow-md
              border-r-4 border-b-4 border-primary"
            >
              <h1 className="julee text-3xl sm:text-4xl font-semibold">
                Mais de 22 anos de experiência
              </h1>
              <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-md">
                Desde 2003, cada prato é preparado com dedicação para proporcionar
                o verdadeiro sabor da culinária japonesa, unindo tradição e qualidade.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4 w-full">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 rounded-full bg-primary/10">
                    <ChartNoAxesCombined className="text-primary size-8 sm:size-10" />
                  </div>
                  <p className="font-semibold text-sm md:text-base">+22 anos</p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Compromisso e excelência
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 rounded-full bg-primary/10">
                    <FishSymbol className="text-primary size-8 sm:size-10" />
                  </div>
                  <p className="font-semibold text-sm md:text-base">Ingredientes frescos</p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Seleção rigorosa
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Star className="text-primary size-8 sm:size-10" />
                  </div>
                  <p className="font-semibold text-sm md:text-base">5 estrelas</p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Avaliação dos clientes
                  </p>
                </div>
              </div>
            </div>
            <div className="aboutDiv1 rounded-2xl overflow-hidden shadow-md" />
            <div className="aboutDiv2 hidden sm:block rounded-2xl overflow-hidden shadow-md" />
            <div className="relative max-h-96 p-6 sm:p-8 flex flex-col items-center text-center
            bg-cinza1 rounded-2xl shadow-md
              border-l-4 border-t-4 border-primary"
            >
              <h1 className="julee text-3xl sm:text-4xl font-semibold">
                Entre para o nosso clube!
              </h1>
              <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-md">
                Seguindo a tradição japonesa, oferecemos um cardápio exclusivo
                com vantagens especiais para nossos clientes.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4 w-full">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 rounded-full bg-primary/10">
                    <House className="text-primary size-8 sm:size-10" />
                  </div>
                  <p className="font-semibold text-sm md:text-base">Aconchegante</p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Ambiente familiar
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 rounded-full bg-primary/10">
                    <CircleDollarSign className="text-primary size-8 sm:size-10" />
                  </div>
                  <p className="font-semibold text-sm md:text-base">Economize</p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Promoções exclusivas
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Rocket className="text-primary size-8 sm:size-10" />
                  </div>
                  <p className="font-semibold text-sm md:text-base">Entrega rápida</p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Qualidade garantida
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="bg-cinza1 px-4 py-24">
        <div className="wrapper-col text-center">
          <h1 className="julee text-4xl sm:text-5xl text-center mb-16">O Que Oferecemos</h1>
          <div className="wrapper-col text-center">
            <div className="flex flex-wrap justify-center gap-10">
              {servicesData.map((service, index) => (
                <ServicesCard key={index} data={service} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="team" className="px-4 py-24">
        <div className="wrapper-col text-center">
          <h1 className="julee text-4xl sm:text-5xl text-center mb-16">Nosso Time</h1>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-2">
            {teamData.map((member, index) => (
              <TeamCard key={index} data={member} />
            ))}
          </div>
        </div>
      </section>
      <section id="locals" className="pt-0 sm:py-24 px-6 flex justify-center">
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
      <Footer />
    </div>
  )
}
export default Home;