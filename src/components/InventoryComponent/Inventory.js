import React from "react";
import styled from "styled-components";
import { Colors } from "../../Theme/colors";
import EditFishForm from "../EditFishForm/EditFishForm";
import AddFishComponent from "../AddFishComponent/AddFish";

const Button = styled.button`
  text-transform: uppercase;
  margin-top: 20px;
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

class InventoryComponent extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory </h2>

        {Object.keys(this.props.fishes).map((key) => (
          <EditFishForm 
          key={key} 
          index={key}
          fish={this.props.fishes[key]}
          updateFish={this.props.updateFish}
          deleteFish={this.props.deleteFish} />
        ))}

        <AddFishComponent addFish={this.props.addFish} />
        <Button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </Button>
      </div>
    );
  }
}

export default InventoryComponent;
