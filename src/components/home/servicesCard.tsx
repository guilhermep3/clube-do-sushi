import { ServiceCard } from "@/data/services"

export const ServicesCard = ({ data }: { data: ServiceCard}) => {
  return (
    <div className="relative w-64 sm:w-72">
      <img src={data.image}
        alt="Sushi Tradicional"
        className="mx-auto -mb-28 z-10 relative w-56"
      />
      <div className="bg-zinc-300 dark:bg-zinc-800 text-foreground rounded-2xl pt-32 pb-4 px-4 shadow-lg">
        <h2 className="julee text-2xl font-semibold mb-2">{data.title}</h2>
        <p className="text-sm text-foreground/80">
          {data.description}
        </p>
      </div>
      <div className="bg-primary text-foreground text-lg font-bold py-2 rounded-b-2xl">
        Clássico
      </div>
    </div>
  )
}