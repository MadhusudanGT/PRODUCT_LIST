import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Btn from "./Buttons";
class Incre extends React.Component {
  state = {
    counter: 1,
    stock: null,
    buttoncall: null
  };

  handleIncrement = () => {
    if (this.state.counter < this.state.stock) {
      this.setState((state) => ({ counter: state.counter + 1 }));
    }
  };

  handleDecrement = () => {
    if (this.state.counter > 1) {
      this.setState((state) => ({ counter: state.counter - 1 }));
    } else {
      console.log(this.state.counter);
      this.setState({ buttoncall: this.state.counter });
    }
  };

  componentDidMount() {
    this.setState({ stock: this.props.valueFromProduct });
    console.log(this.state.stock);
  }

  render() {
    return (
      <div>
        {this.state.buttoncall !== this.state.counter && (
          <ButtonGroup size="medium">
            <Button
              onClick={this.handleDecrement}
              color="primary"
              variant="contained"
            >
              -
            </Button>

            <Button disabled>{this.state.counter}</Button>
            <Button
              onClick={this.handleIncrement}
              color="primary"
              variant="contained"
            >
              +
            </Button>
          </ButtonGroup>
        )}
        {this.state.buttoncall === this.state.counter && (
          <Btn message={this.state.stock} />
        )}
      </div>
    );
  }
}

export default Incre;
