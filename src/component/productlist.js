import React from "react";
import { stockData } from "./data";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Incre from "./incre";
import Edit from "./Edit";
import { Image } from "semantic-ui-react";
import { Grid, Typography, CardMedia } from "@material-ui/core/";

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showbutton: false,
      showbutton1: false,
      showButtonIndex: null,
      image: null,
      showResults: false,
      keydown: ""
    };
    this.handleEdit = this.handleEdit.bind(this);
    // this.onImageChange = this.onImageChange.bind(this);
  }

  handleEdit(parameter, parm2) {
    this.setState({ id: parameter });
    console.log(this.state.id);
    this.setState({
      showbutton1: true,
      showResults: true,
      showButtonIndex: parm2
    });
    if (parameter === 0) {
      this.setState({
        showbutton: true,
        showbutton1: false
      });
    } else {
      this.setState({ showbutton: false });
    }
    this.setState({ keyup: this.props.message });
  }

  render() {
    const { showButtonIndex, showbutton, showbutton1 } = this.state;
    return (
      <div className="root">
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {stockData.map((elem, key) => (
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h5" gutterBottom>
                <div key={key}>
                  <div className="root">
                    <Paper className="paper">
                      <Grid container spacing={24}>
                        <Grid item xs={6}>
                          <CardMedia>
                            <Image
                              className="photo"
                              wrapped
                              size="small"
                              width="80%"
                              src={elem.product_pic}
                            />
                          </CardMedia>
                        </Grid>

                        <Grid item xs={6}>
                          <div>
                            <Button raised color="accent">
                              <table style={{ flex: "right" }}>
                                <tr>
                                  <Typography gutterBottom variant="subtitle1">
                                    {elem.product_name}{" "}
                                  </Typography>
                                </tr>
                                <tr>
                                  <Typography gutterBottom variant="subtitle1">
                                    {" "}
                                    Rs {elem.product_price} for Kg{" "}
                                  </Typography>
                                </tr>
                                <tr>
                                  <Typography gutterBottom variant="subtitle1">
                                    Multiple of {elem.product_weight}kg
                                  </Typography>
                                </tr>
                                <tr>
                                  <Typography gutterBottom variant="subtitle1">
                                    {" "}
                                    Stock: {elem.product_stock}
                                  </Typography>
                                </tr>
                              </table>
                            </Button>
                          </div>
                          <Grid item>
                            <Button>
                              {showbutton1 &&
                                showButtonIndex === elem.product_id && (
                                  <Incre valueFromProduct={this.state.id} />
                                )}

                              {showbutton &&
                                showButtonIndex === elem.product_id && <Edit />}

                              {this.state.showResults &&
                              showButtonIndex === elem.product_id ? null : (
                                <Button
                                  id={key.product_stock}
                                  onClick={(e) =>
                                    this.handleEdit(
                                      elem.product_stock,
                                      elem.product_id
                                    )
                                  }
                                  variant="contained"
                                  color="primary"
                                  style={{
                                    width: "130px",
                                    height: "30px"
                                  }}
                                  defaultChecked
                                >
                                  ADD
                                </Button>
                              )}
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                  </div>
                </div>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
