"use-client"

import { CarouselDemo } from "./content"
import { DisplayName } from "./heading"

const Placeholder = () => {
   
  return (
    
    <div className="flex flex-col bg-cover bg-center pb-5 pt-2 rounded px-2 shadow justify-center"  >   <DisplayName  /><div className="p-8 justify-self-center"><CarouselDemo/></div>
   </div>
  )
}

export default Placeholder