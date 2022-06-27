import React from "react";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { DISHES } from "../shared/dishes";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { COMMENTS } from "../shared/comments";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import DishDetail from "./DishdetailComponent";
class Main extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         selectedDish: null,
         dishes: DISHES,
         promotions: PROMOTIONS,
         leaders: LEADERS,
         comments: COMMENTS,
      };
   }
   onDishSelect(dish) {
      this.setState({ selectedDish: dish });
   }
   render() {
      const HomePage = () => {
         return (
            <Home
               dish={this.state.dishes.filter((dish) => dish.featured)[0]}
               promotion={
                  this.state.promotions.filter((promo) => promo.featured)[0]
               }
               leader={
                  this.state.leaders.filter((leader) => leader.featured)[0]
               }
            />
         );
      };

      const DishWithId = ({ match }) => {
         return (
            <DishDetail
               dish={
                  this.state.dishes.filter(
                     (dish) => dish.id === parseInt(match.params.dishId, 10)
                  )[0]
               }
               comments={this.state.comments.filter(
                  (comment) =>
                     comment.dishId === parseInt(match.params.dishId, 10)
               )}
            />
         );
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
               <Route exact path="/contactus" component={Contact} />
               <Route
                  exact
                  path="/menu"
                  component={() => <Menu dishes={this.state.dishes} />}
               />
               <Route
                  exact
                  path="/aboutus"
                  component={() => <About leaders={this.state.leaders} />}
               />
               <Route path="/menu/:dishId" component={DishWithId} />
               <Redirect to="/home" />
            </Switch>
            <Footer />
         </div>
      );
   }
}

export default Main;
