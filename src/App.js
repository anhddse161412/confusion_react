// import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { DISHES } from "./shared/dishes";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
// function App() {
//    return (
//       <div className="App">
//          <Navbar dark color="primary">
//             <div className="container">
//                <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//             </div>
//          </Navbar>
//       </div>
//    );
// }
class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         dishes: DISHES,
      };
   }
   render() {
      return (
         <BrowserRouter>
            <div className="App">
               <Main />
            </div>
         </BrowserRouter>
      );
   }
}

export default App;
