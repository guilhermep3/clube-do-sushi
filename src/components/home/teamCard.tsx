import { TeamMember } from "@/data/team"
import { ChartNoAxesCombined } from "lucide-react"

export const TeamCard = ({ data }: { data: TeamMember }) => {

  return (
    <div
      className="group bg-zinc-300 dark:bg-zinc-800 rounded-2xl p-5 flex flex-col items-center text-center
      shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative mb-4">
        <img
          src={data.image}
          alt={data.name}
          className="rounded-full w-40 h-40 object-cover border-4 border-primary/20
            transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full shadow">
          <ChartNoAxesCombined className="size-5" />
        </span>
      </div>
      <h2 className="julee text-2xl mt-2">{data.name}</h2>
      <p className="mt-1 text-sm md:text-base text-muted-foreground font-medium">
        {data.experience}
      </p>
    </div>
  )
}