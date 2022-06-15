import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";

function renderDish(dish) {
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
function renderComments(dish) {
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

const DishDetail = (props) => {
   return (
      <div className="container">
         <div className="row">
            {renderDish(props.dish)}
            {renderComments(props.dish)}
         </div>
      </div>
   );
};

export default DishDetail;
