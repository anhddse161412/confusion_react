import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

import DishDetail from "./DishdetailComponent";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { DISHES } from "../shared/dishes";

class Main extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         selectedDish: null,
         dishes: DISHES,
      };
   }
   onDishSelect(dish) {
      this.setState({ selectedDish: dish });
   }
   render() {
      return (
         <div>
            <Navbar dark color="primary">
               <div className="container">
                  <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
               </div>
            </Navbar>
            <Header />
            <Menu
               dishes={this.state.dishes}
               click={(dish) => this.onDishSelect(dish)}
            />
            <DishDetail dish={this.state.selectedDish} />
            <Footer />
         </div>
      );
   }
}

export default Main;
