import React from "react";
import { formatPrice } from "../../helpers";

class OrderComponent extends React.Component {
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === 'available';

    //making sure the fish is loaded before continue
    if(!fish) return null;

    if (!isAvailable) {
      return <li key={key}>sorry {fish ? fish.name : 'fish'} is no longer available</li>
    }


    return (
      <li key={key}>
        {count} lbs {fish.name}
        {formatPrice(count * fish.price)}
      </li>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";

      if (isAvailable) {
        return prevTotal + count * fish.price;
      } else {
        return prevTotal;
      }
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Your Order </h2>
        <ul className='order'>{orderIds.map(this.renderOrder)}</ul>

        <div className="total">
          <strong> Total: {formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default OrderComponent;
