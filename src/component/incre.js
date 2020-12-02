import React from "react";
import Button from "@material-ui/core/Button";


class Incre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      show: true,
      max: 5,
      min: 0
    };
  }

  IncrementItem = () => {
    if (this.state.quantity >= 5) {
    } else {
      this.setState({
        quantity: this.state.quantity + 1
      });
    }
  };
  DecreaseItem = () => {
    if (this.state.quantity <= 1) {
    } else {
      this.setState({
        quantity: this.state.quantity - 1
      });
    }
  };
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={this.DecreaseItem}
          style={{width:"10px" ,height:"20px"}}
        >
          -
        </Button>
        <input  style={{width:"30px"}} value={this.state.quantity} />
      
        <Button
          onClick={this.IncrementItem}
          size="small"
          variant="contained"
          color="primary"
          style={{width:"20px" ,height:"20px"}}
        >
          +
        </Button>
      </div>
    );
  }
}

export default Incre;
