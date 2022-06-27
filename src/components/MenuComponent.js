import React, { Component } from "react";
import {
   Breadcrumb,
   BreadcrumbItem,
   Card,
   CardImg,
   CardImgOverlay,
   CardTitle,
} from "reactstrap";
import DishDetail from "./DishdetailComponent";
import { Link } from "react-router-dom";
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
      // <Card onClick={() => onClick(dish)}>
      <Card>
         <Link to={`/menu/${dish.id}`}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
               <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
         </Link>
      </Card>
   );
}

// const Menu = (props) => {
//    const menu = props.dishes.map((dish) => {
//       return (
//          <div key={dish.id} className="col-12 col-md-5 m-1">
//             <RenderMenuItem dish={dish} onClick={props.click} />
//          </div>
//       );
//    });
//    return (
//       <div className="container">
//          <div className="row">{menu}</div>
//       </div>
//    );
// };
class Menu extends Component {
   render() {
      const menu = this.props.dishes.map((dish) => {
         return (
            <div className="col-12 col-md-5 m-1">
               <div key={dish.id}>
                  <RenderMenuItem dish={dish} />
               </div>
            </div>
         );
      });
      return (
         <div className="container">
            <div className="row">
               <Breadcrumb>
                  <BreadcrumbItem>
                     <Link to="/home">Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>Menu</BreadcrumbItem>
               </Breadcrumb>
               <div className="col-12">
                  <h3>Menu</h3>
                  <hr />
               </div>
            </div>
            <div className="row">{menu}</div>
         </div>
      );
   }
}
export default Menu;
