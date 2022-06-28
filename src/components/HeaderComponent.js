import React from "react";
import {
   Nav,
   Navbar,
   NavbarBrand,
   NavbarToggler,
   Collapse,
   NavItem,
   Button,
   Modal,
   ModalHeader,
   ModalBody,
   FormGroup,
   Input,
   Label,
   Form,
   CloseButton,
} from "reactstrap";
import { NavLink } from "react-router-dom";
class Header extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isNavOpen: false,
         isModalOpen: false,
      };
   }

   toggleNav = () => {
      this.setState({
         isNavOpen: !this.state.isNavOpen,
      });
   };

   toggleModal = () => {
      this.setState({
         isModalOpen: !this.state.isModalOpen,
      });
   };

   handleLogin = (e) => {
      e.preventDefault();
      this.toggleModal();
      alert(
         "Username: " +
            this.username.value +
            "Password: " +
            this.password.value +
            "Remember: " +
            this.remember.checked
      );
   };

   handleClose = () => {
      this.setState({ isModalOpen: false });
   };

   render() {
      return (
         <div>
            <Navbar dark expand="md">
               <div className="container">
                  <NavbarToggler onClick={this.toggleNav} />
                  <NavbarBrand className="mr-auto" href="/">
                     <img
                        src="assets/images/logo.png"
                        height="30"
                        width="41"
                        alt="Ristorante Con Fusion"
                     />
                  </NavbarBrand>

                  <Modal isOpen={this.state.isModalOpen}>
                     <ModalHeader charCode="close">Login</ModalHeader>
                     <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                           <FormGroup>
                              <Label htmlFor="username">Username</Label>
                              <Input
                                 innerRef={(input) => (this.username = input)}
                                 type="text"
                                 id="username"
                                 name="username"
                                 placeholder="username"
                              />
                           </FormGroup>
                           <FormGroup>
                              <Label htmlFor="password">Password</Label>
                              <Input
                                 innerRef={(input) => (this.password = input)}
                                 type="password"
                                 id="password"
                                 name="password"
                                 placeholder="password"
                              />
                           </FormGroup>
                           <FormGroup className="row">
                              <Label check className="col-7">
                                 Remember me
                              </Label>
                              <Input
                                 className="col-8"
                                 type="checkbox"
                                 name="remember"
                                 innerRef={(input) => {
                                    this.remember = input;
                                 }}
                              />
                           </FormGroup>
                           <Button
                              type="button"
                              class="btn btn-secondary btn-sm ml-auto"
                              onClick={this.handleClose}
                           >
                              Cancel
                           </Button>
                           <Button type="submit" value="submit" color="primary">
                              Login
                           </Button>
                        </Form>
                     </ModalBody>
                  </Modal>

                  <Collapse isOpen={this.state.isNavOpen} navbar>
                     <Nav className="m1-auto" navbar>
                        <NavItem>
                           <NavLink className="nav-link" to="/home">
                              <span className="fa fa-home fa-lg"></span> Home
                           </NavLink>
                        </NavItem>

                        <NavItem>
                           <NavLink className="nav-link" to="/aboutus">
                              <span className="fa fa-info fa-lg"></span> About
                              Us
                           </NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink className="nav-link" to="/menu">
                              <span className="fa fa-list fa-lg"></span> Menu
                           </NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink className="nav-link" to="/contactus">
                              <span className="fa fa-address-card fa-lg"></span>{" "}
                              Contract Us
                           </NavLink>
                        </NavItem>

                        <NavItem>
                           <Button outline onClick={this.toggleModal}>
                              <span className="fa fa-sign-in fa-lg"></span>Login
                           </Button>
                        </NavItem>
                     </Nav>
                  </Collapse>
               </div>
            </Navbar>
            <div className="Jumbotron">
               <div className="container">
                  <div className="row row-header">
                     <div className="col-12 col-sm-6">
                        <h1 className="text-justify">Ristorante con Fusion</h1>
                        <p className="text-justify">
                           We take inspiration from the World's best cuisines,
                           and create a unique fusion experience. Our
                           lipsmacking creations will tickle your culinary
                           senses!
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Header;
