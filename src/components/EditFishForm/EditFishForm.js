import React from "react";

class EditFishForm extends React.Component {

    handleChange = (event) => {
   const updatedFish = {
       ...this.props.fish,
       [event.currentTarget.name] : event.currentTarget.value
   }
   this.props.updateFish(this.props.index, updatedFish)
    }


  render() {
    return (
      <div className="fish-edit">
        <input
          name="name"
          onChange={this.handleChange}
          type="text"
          placeholder="Name"
          value={this.props.fish.name}
        />

        <input
          name="price"
          onChange={this.handleChange}
          type="text"
          placeholder="Price"
          value={this.props.fish.price}
        />

        <select
          name="status"
          onChange={this.handleChange}
          type="text"
          value={this.props.fish.status}
        >
          <option value="available">Fresh !</option>
          <option value="unavailable">Sold Out !</option>
        </select>

        <textarea
          name="desc"
          onChange={this.handleChange}
          type="text"
          placeholder="Desc"
          value={this.props.fish.desc}
        />

        <input
          name="image"
          onChange={this.handleChange}
          type="text"
          placeholder="Image"
          value={this.props.fish.image}
        />

        <button onClick={()=>this.props.deleteFish(this.props.index)}>Remove Fish</button>
      </div>

   
    );
  }
}

export default EditFishForm;
