import { Outlet } from "react-router-dom";
import Headers from "../headers/Headertwo_page";


function Root_page() {
    return (
      <>
          <Headers />
          <Outlet />
          
      </>
    );
  }
  
  export default Root_page;