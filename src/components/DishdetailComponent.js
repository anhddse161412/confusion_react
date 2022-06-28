import React from "react";
import {
   Breadcrumb,
   BreadcrumbItem,
   Card,
   CardImg,
   CardBody,
   CardText,
   CardTitle,
} from "reactstrap";

import { Link } from "react-router-dom";
// class DishDetail extends React.Component {
//    // renderDish(dish) {
//    //    console.log(dish);
//    //    if (dish != null)
//    //       return (
//    //          <div className="col-12 col-sm-5">
//    //             <Card>
//    //                <CardImg src={dish.image} alt={dish.name} />
//    //                <CardBody>
//    //                   <CardTitle>{dish.name}</CardTitle>
//    //                   <CardText>{dish.description}</CardText>
//    //                </CardBody>
//    //             </Card>
//    //          </div>
//    //       );
//    //    else return <div></div>;
//    // }
//    // renderComments(dish) {
//    //    const comment = dish.comments.map((item) => {
//    //       return (
//    //          <div key={item.id} className="text-left">
//    //             <p>{item.comment}</p>
//    //             <p>
//    //                -- {item.author} ,{item.date}
//    //             </p>
//    //          </div>
//    //       );
//    //    });
//    //    return (
//    //       <div className="col-12 col-sm-7">
//    //          <h2>Comments</h2>
//    //          {comment}
//    //       </div>
//    //    );
//    // }
//    // render() {
//    //    if (this.props.dish != null) {
//    //       return (
//    //          <div className="container">
//    //             <div className="row">
//    //                {this.renderDish(this.props.dish)}
//    //                {this.renderComments(this.props.dish)}
//    //             </div>
//    //          </div>
//    //       );
//    //    } else {
//    //       return <div>hello</div>;
//    //    }
//    // }
//    render() {
//       if (this.props.dish != null) {
//          const comment = this.props.dish.comments.map((item) => {
//             return (
//                <div key={item.id}>
//                   <p>{item.comment}</p>
//                   <p>
//                      -- {item.author}, {item.date}
//                   </p>
//                </div>
//             );
//          });

//          const dish = this.props.dish;
//          return (
//             <div className="container">
//                <div className="row">
//                   <div className="col-12 col-md-5 m-1">
//                      <Card key={dish.id}>
//                         <CardImg
//                            width="100%"
//                            src={dish.image}
//                            alt={dish.name}
//                         />
//                         <CardBody>
//                            <CardTitle>{dish.name}</CardTitle>
//                            <CardText>{dish.description}</CardText>
//                         </CardBody>
//                      </Card>
//                   </div>
//                   <div className="col-12 col-md-5 m-1">
//                      <Card>
//                         <CardBody>
//                            <div>{comment}</div>
//                         </CardBody>
//                      </Card>
//                   </div>
//                </div>
//             </div>
//          );
//       } else {
//          return <div></div>;
//       }
//    }
// }
// function renderDish({ dish }) {
//    console.log(dish);
//    if (dish != null)
//       return (
//          <div className="col-12 col-sm-5">
//             <Card>
//                <CardImg src={dish.image} alt={dish.name} />
//                <CardBody>
//                   <CardTitle>{dish.name}</CardTitle>
//                   <CardText>{dish.description}</CardText>
//                </CardBody>
//             </Card>
//          </div>
//       );
//    else return <div></div>;
// }
// function renderComments({ dish }) {
//    const comment = dish.comments.map((item) => {
//       return (
//          <div key={item.id} className="text-left">
//             <p>{item.comment}</p>
//             <p>
//                -- {item.author} ,{item.date}
//             </p>
//          </div>
//       );
//    });
//    return (
//       <div className="col-12 col-sm-7">
//          <h2>Comments</h2>
//          {comment}
//       </div>
//    );
// }

// const DishDetail = (props) => {
//    if (props.dish != null) {
//       return (
//          <div className="container">
//             <div className="row">
//                {renderDish(props)}
//                {renderComments(props)}
//             </div>
//          </div>
//       );
//    } else {
//       return <div></div>;
//    }
// };

function RenderDish({ dish }) {
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
}

export function RenderComments({ comments }) {
   const comment = comments.map((item) => {
      return (
         <div key={item.id}>
            <p>{item.comment}</p>
            <p>
               {item.author} {item.date}
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

class DishDetail extends React.Component {
   render() {
      if (this.props.dish != null) {
         const dish = this.props.dish;
         const comments = this.props.comments;
         return (
            <div className="container">
               <div className="row">
                  <Breadcrumb>
                     <BreadcrumbItem>
                        <Link to="/menu">Menu</Link>
                     </BreadcrumbItem>
                     <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                  </Breadcrumb>
                  <div className="col-12">
                     <h3>{dish.name}</h3>
                     <hr />
                  </div>
               </div>
               <div className="row">
                  <div className="col-12 col-md-5 m-1">
                     <RenderDish dish={dish} />
                  </div>
                  <div className="col-12 col-md-5 m-1">
                     <RenderComments comments={comments} />
                  </div>
               </div>
            </div>
         );
      } else {
         return <div></div>;
      }
   }
}

export default DishDetail;
