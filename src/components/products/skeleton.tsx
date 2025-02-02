import { Skeleton } from "../ui/skeleton"

export const TabsSkeleton = () => {

   return (
      <div className="mt-24">
         <Skeleton className="w-full h-10 rounded-xl"/>
         <div className="mt-6 grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {Array.from({length: 6}, (item, index) => (
               <div key={index} className="flex flex-col gap-1">
                  <Skeleton className="w-full h-32 rounded-xl"/>
                  <Skeleton className="w-2/3 h-7 rounded-xl"/>
                  <Skeleton className="w-16 h-5 rounded-xl"/>
                  <Skeleton className="w-full h-9 rounded-xl"/>
               </div>
            ))}
         </div>
      </div>
   )
}