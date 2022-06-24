import React from "react";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { DISHES } from "../shared/dishes";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";

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
      const HomePage = () => {
         return <Home />;
      };
      return (
         <div>
            {/* <Navbar dark color="primary">
               <div className="container">
                  <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
               </div>
            </Navbar> */}
            <Header />
            {/* <Menu
               dishes={this.state.dishes}
               click={(dish) => this.onDishSelect(dish)}
            />
            <DishDetail dish={this.state.selectedDish} /> */}
            <Switch>
               <Route path="/home" component={HomePage} />
               <Route
                  exact
                  path="/menu"
                  component={() => <Menu dishes={this.state.dishes} />}
               />
               <Redirect to="/home" />
            </Switch>
            <Footer />
         </div>
      );
   }
}

export default Main;
