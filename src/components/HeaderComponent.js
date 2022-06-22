import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

class Header extends React.Component {
   render() {
      return (
         <>
            <Navbar dark>
               <div className="container">
                  <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
               </div>
            </Navbar>
            <header className="header">
               <div className="container">
                  <div className="row row-header">
                     <div className="col-12 col-sm-6">
                        <h1 className="text-justify">Ristorante Con Fusion</h1>
                        <p className="text-justify">
                           We take inspiration from the World's best cuisines,
                           and create a unique fusion experience. Our
                           lipsmacking creations will tickle your culinary
                           senses!
                        </p>
                     </div>
                  </div>
               </div>
            </header>
         </>
      );
   }
}

export default Header;
