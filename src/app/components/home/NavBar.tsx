
import React, { memo } from "react";
import { cookies } from "next/headers";
import BurgerMenu from "./BurgerMenu";

const NavBar = memo(async () => {
  const loggedin = cookies().has("JWT")
    
    const data =  cookies().get("JWT")    
    
  
    
     
    
  
  return (

    
<>
          <BurgerMenu loggedin={loggedin} data={data} />
        
    
    
</>    
  );
});

export default NavBar;


