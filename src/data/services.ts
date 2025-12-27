export type ServiceCard = {
  title: string
  description: string
  image: string
  tag: string
}

export const servicesData: ServiceCard[] = [
  {
    title: "Nigiri",
    description:
      "Feito com uma bolinha de arroz moldada à mão e coberta com uma fatia de peixe cru.",
    image: "./servicesimg/services1.png",
    tag: "Tradicional",
  },
  {
    title: "Sushi Tradicional",
    description:
      "Rolinhos envoltos em alga nori, recheados com arroz, peixe cru e vegetais.",
    image: "./servicesimg/services2.png",
    tag: "Clássico",
  },
  {
    title: "Temaki",
    description:
      "Sushi em formato de cone com alga nori, arroz, peixe cru, vegetais e cream cheese.",
    image: "./servicesimg/services3.png",
    tag: "Especial",
  },
]
