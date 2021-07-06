import React from "react";
import styled from "styled-components";
import { Colors } from "../../Theme/colors";
import { formatPrice } from "../../helpers";

const Button = styled.button`
  text-transform: uppercase;
  height: 30px;
  background: ${Colors.greyGradient};
  border: 1px solid ${Colors.black};
  font-weight: 600;
  font-size: 1.5rem;
  font-family: "Open Sans";
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  position: relative;
  z-index: 2;
`;

class FishComponent extends React.Component {
  handleClick = () =>{
    this.props.addToOrder(this.props.index)
  }
  render() {
    const { status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={this.props.details.image} alt={this.props.details.name} />
        <h3 className="fish-name">
          {this.props.details.name}
          <span className="price">{formatPrice(this.props.details.price)}</span>
        </h3>
        <p>{this.props.details.desc}</p>
        <Button disabled={!isAvailable} onClick={this.handleClick}>
          {isAvailable ? " Add To Cart" : "Sold Out"}
        </Button>
      </li>
    );
  }
}

export default FishComponent;
