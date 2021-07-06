import React from "react";
import styled from "styled-components";
import { Colors } from "../../Theme/colors";
import { getFunName } from "../../helpers";

const Button = styled.button`
  text-transform: uppercase;
  margin-top:20px;
  height:30px;
  background: ${Colors.greyGradient};
  border: 1px solid #fff;
  font-weight: 600;
  font-size: 1.5rem;
  font-family: 'Open Sans';
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  position: relative;
  z-index: 2;
`;

const FormContainer = styled.form`
  background: ${Colors.blueGradient};
  max-width: 500px;
  margin: 50px auto;
  padding: 2rem;
  border: 2px solid #000;
  border-radius: 10px;
`;

//every class component have at least one render method which determines
// what html do i put in page or what dom element do i render out on the page

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    event.preventDefault();
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <FormContainer className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          ref={this.myInput}
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <Button type="submit">Visit Store </Button>
      </FormContainer>
    );
  }
}

export default StorePicker;
