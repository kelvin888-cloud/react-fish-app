import React from "react";
import HeaderComponent from "./HeaderComponent/Header";
import InventoryComponent from "./InventoryComponent/Inventory";
import OrderComponent from "./OrderComponent/OrderStore";
import sampleFishes from "../sample-fishes";
import FishComponent from "./DisplayFishComponent/Fish";
import base from "../Base/base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  componentDidMount() {
    const { params } = this.props.match;

    //to reinstate our localstorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes",
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = (fish) => {
    //taking a copy of the existing state
    const fishes = { ...this.state.fishes };

    //add our new fish to the fishes variable
    fishes[`fish${Date.now()}`] = fish;

    //set the new fishes to state
    this.setState({
      fishes: fishes,
    });
    console.log(fishes);
  };


  updateFish =(key, updatedFish) =>{
    const fishes = {...this.state.fishes}
    fishes[key] = updatedFish;
    this.setState({
      fishes: fishes
    })
  }

  deleteFish =(key) =>{
    //taking a copy of the existing state
    const fishes = {...this.state.fishes}

     //update the state - remove item from state
    fishes[key] = null;

     //update current state
    this.setState({fishes:fishes})
  }

  loadSampleFishes = () => {
    console.log("Loading fishes");
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = (key) => {
    // take a copy of state
    const order = { ...this.state.order };

    // add to the order or update the number of order
    order[key] = order[key] + 1 || 1;

    //call setState to update our order
    this.setState({
      order: order,
    });
    console.log(order);
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <HeaderComponent tagline="Fresh SeaFood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => (
              <FishComponent
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>

        <OrderComponent fishes={this.state.fishes} order={this.state.order} />
        <InventoryComponent
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes} //load the fish inside Inventory component
        />
      </div>
    );
  }
}

export default App;
