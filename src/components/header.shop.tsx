import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { SideBar } from "./cart/sidebar"

export const HeaderShop = () => {

  return (
    <div className="bg-cinza2 z-30 fixed top-0 right-0 left-0">
      <div className="wrapper flex justify-between items-center px-5 sm:px-10 py-2">
        <Link href={'/'}>
          <img src="./sushi-logo.png" alt="logo da empresa" className="w-16 h-auto" />
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <SideBar />
        </div>
      </div>
    </div>
  )
}