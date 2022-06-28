import React from "react";
import SimpleForm from "./SimpleForm";

class ContactPage extends React.Component {
   submit = (values) => {
      console.log(values);
   };
   render() {
      return (
         <div>
            <SimpleForm onSubmit={this.submit} />
         </div>
      );
   }
}

export default ContactPage;
