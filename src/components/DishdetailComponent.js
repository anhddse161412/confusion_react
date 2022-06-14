import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";

class DishDetail extends React.Component {
   renderDish(dish) {
      console.log(dish);
      if (dish != null)
         return (
            <div className="col-12 col-sm-5">
               <Card>
                  <CardImg src={dish.image} alt={dish.name} />
                  <CardBody>
                     <CardTitle>{dish.name}</CardTitle>
                     <CardText>{dish.description}</CardText>
                  </CardBody>
               </Card>
            </div>
         );
      else return <div></div>;
   }
   renderComments(dish) {
      const comment = dish.comments.map((item) => {
         return (
            <div key={item.id} className="text-left">
               <p>{item.comment}</p>
               <p>
                  -- {item.author} ,{item.date}
               </p>
            </div>
         );
      });
      return (
         <div className="col-12 col-sm-7">
            <h2>Comments</h2>
            {comment}
         </div>
      );
   }
   render() {
      if (this.props.dish != null) {
         return (
            <div className="container">
               <div className="row">
                  {this.renderDish(this.props.dish)}
                  {this.renderComments(this.props.dish)}
               </div>
            </div>
         );
      } else {
         return <div>hello</div>;
      }
   }
}

export default DishDetail;
