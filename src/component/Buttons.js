import React from "react";
import Button from "@material-ui/core/Button";
import Incre from "./incre";

export default class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: null,
      redirect: false
    };
    this.handleclick = this.handleclick.bind(this);
  }

  handleclick() {
    this.setState({ redirect: true });
  }

  componentDidMount() {
    this.setState({ stock: this.props.message });
    console.log(this.state.stock);
  }

  render() {
    return (
      <div className="root">
        {this.state.redirect !== true && (
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleclick}
            style={{
              width: "130px",
              height: "30px"
            }}
            defaultChecked
          >
            ADD
          </Button>
        )}
        {this.state.redirect && this.state.stock === this.props.message && (
          <Incre valueFromProduct={this.props.message} />
        )}
      </div>
    );
  }
}
