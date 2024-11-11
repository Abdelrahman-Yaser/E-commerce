import {  RouterProvider,  } from "react-router-dom"
import { router } from "./router/Routing"


export const App = () => {
  return (
    <div>
      <RouterProvider router={router} future={{ v7_startTransition: true }}/>

      
    
        </div>
  )
}
