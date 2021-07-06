import React from "react";
import styled from "styled-components";
import { Colors } from "../../Theme/colors";

const Button = styled.button`
  text-transform: uppercase;
  height:30px;
  background: ${Colors.greyGradient};
  border: 1px solid ${Colors.black};
  font-weight: 600;
  font-size: 1.5rem;
  font-family: 'Open Sans';
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  position: relative;
  z-index: 2;
`;



class AddFishComponent extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  CreateFish = (event) => {
    event.preventDefault();
    const fish = {
      nameRef: this.nameRef.current.value,
      priceRef: parseFloat(this.priceRef.current.value),
      statusRef: this.statusRef.current.value,
      descRef: this.descRef.current.value,
      imageRef: this.imageRef.current.value,
    };
    this.props.addFish(fish);

    //To refresh the form after submission
    event.currentTarget.reset();
  };

  render() {
    return (

      <div>
<form className="fish-edit" onSubmit={this.CreateFish}>
        <input name="name" type="text" ref={this.nameRef} placeholder="Name" />

        <input
          name="price"
          type="text"
          ref={this.priceRef}
          placeholder="Price"
        />

        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh !</option>
          <option value="unavailable">Sold Out !</option>
        </select>

        <textarea name="desc" placeholder="Desc" ref={this.descRef} />

        <input
          name="image"
          type="text"
          placeholder="Image"
          ref={this.imageRef}
        />
       <Button type="submit">+ Add Fish</Button>
      </form>

     

      </div>
      

      
    
     
    );
  }
}

export default AddFishComponent;
