export type TeamMember = {
  id: number
  name: string
  experience: string
  image: string
}

export const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Chefe 1",
    experience: "+20 anos de exp.",
    image: "./team/team1.jpg",
  },
  {
    id: 2,
    name: "Chefe 2",
    experience: "+17 anos de exp.",
    image: "./team/team2.jpg",
  },
  {
    id: 3,
    name: "Chefe 3",
    experience: "+11 anos de exp.",
    image: "./team/team3.jpg",
  },
  {
    id: 4,
    name: "Chefe 4",
    experience: "+7 anos de exp.",
    image: "./team/team4.jpg",
  },
]
