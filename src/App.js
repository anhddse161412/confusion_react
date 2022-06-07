import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Hello2 from "./components/Hello2";
import { Navbar, NavbarBrand } from "reactstrap";
function App() {
   const data = {
      id: "1",
      name: "name",
   };
   return (
      //     <div className="App">
      //       <header className="App-header">
      //         <img src={logo} className="App-logo" alt="logo" />
      //         <p>
      //           Edit <code>src/App.js</code> and save to reload.
      //         </p>
      //         <a
      //           className="App-link"
      //           href="https://reactjs.org"
      //           target="_blank"
      //           rel="noopener noreferrer"
      //         >
      //           Learn React
      //         </a>
      //       </header>
      //     </div>
      <div className="App">
         <Navbar dark color="primary">
            <div className="container">
               <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
         </Navbar>
      </div>
   );
}

// function formatName(user) {
//    return user.firstName + " " + user.lastName;
// }

// const user = {
//    firstName: "Harper",
//    lastName: "Perez",
// };

// const element = <h1> Hello, {formatName(user)}</h1>;

// function App() {
//    const name = "Josh";
//    //  const element = <h1>hello, {name}</h1>;

//    return (
//       <div className="App">
//          <h1>Hello world</h1>
//          {element}
//       </div>

//    );
// }

export default App;
