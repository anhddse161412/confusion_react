import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import DishDetail from "./DishdetailComponent";
// class Menu extends Component {
//    constructor(props) {
//       super(props);
//       this.state = {
//          selectedDish: null,
//       }; //end state
//    } //end constructor
//    onDishSelect(dish) {
//       this.setState({ selectedDish: dish });
//    } //end onDishSelect
//    // renderDish(dish) {
//    //    console.log(dish);
//    //    if (dish != null)
//    //       return (
//    //          <Card>
//    //             <CardImg src={dish.image} alt={dish.name} />
//    //             <CardBody>
//    //                <CardTitle>{dish.name}</CardTitle>
//    //                <CardText>{dish.description}</CardText>
//    //             </CardBody>
//    //          </Card>
//    //       );
//    //    else return <div></div>;
//    // } //end renderDish
//    render() {
//       const menu = this.props.dishes.map((dish) => {
//          return (
//             <div key={dish.id} className="col-12 col-md-5 m-1">
//                <Card onClick={() => this.props.click(dish)}>
//                   <CardImg width="100%" src={dish.image} alt={dish.name} />
//                   <CardImgOverlay>
//                      <CardTitle>{dish.name}</CardTitle>
//                   </CardImgOverlay>
//                </Card>
//             </div>
//          );
//       });

//       return (
//          <div className="container">
//             <div className="row">{menu}</div>
//             <div className="row">
//                <DishDetail dish={this.state.selectedDish} />
//             </div>
//          </div>
//       );
//    }
// }
function RenderMenuItem({ dish, onClick }) {
   return (
      <Card onClick={() => onClick(dish)}>
         <CardImg width="100%" src={dish.image} alt={dish.name} />
         <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
         </CardImgOverlay>
      </Card>
   );
}

const Menu = (props) => {
   const menu = props.dishes.map((dish) => {
      return (
         <div key={dish.id} className="col-12 col-md-5 m-1">
            <RenderMenuItem dish={dish} onClick={props.click} />
         </div>
      );
   });
   return (
      <div className="container">
         <div className="row">{menu}</div>
      </div>
   );
};

export default Menu;
