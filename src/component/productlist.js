import React from "react";
import { stockData } from "./data";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Incre from "./incre";
import Edit from "./Edit";
import { Image } from "semantic-ui-react";
import { Grid, Typography } from "@material-ui/core/";

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showbutton: false,
      showbutton1: false,
      showButtonIndex: null,
      image: null,
      showResults: false
    };
    this.handleEdit = this.handleEdit.bind(this);
    // this.onImageChange = this.onImageChange.bind(this);
  }

  handleEdit(parameter) {
    this.setState({ id: parameter });
    console.log(this.state.id);
    this.setState({
      showButtonIndex: parameter,
      showbutton1: true,
      showResults: true
    });
    if (parameter === 0) {
      this.setState({
        showbutton: true,
        showbutton1: false,
        showbutton2: false
      });
    } else {
      this.setState({ showbutton: false, showbutton2: false });
    }
  }

  // onImageChange = (event) => {
  //   if (event.target.files && event.target.files[0]) {
  //     let img = event.target.files[0];
  //     this.setState({
  //       image: URL.createObjectURL(img)
  //     });
  //   }
  // };

  data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
  ];
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
            <Grid item xs={12} sm={6} md={3} key={this.data.indexOf(elem)}>
                  <Typography variant="h5" gutterBottom>
                    <div key={key}>
                      <div className="root">
                        <Paper className="paper">
                          <Grid container spacing={2}>
                            <Grid item>
                              <ButtonBase className="image">
                                <Image
                                  wrapped
                                  size="small"
                                  src={elem.product_pic}
                                  // onClick={this.onImageChange}
                                />
                              </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                              <Grid
                                item
                                xs
                                container
                                direction="column"
                                spacing={2}
                              >
                                <Grid item xs>
                                  <Typography gutterBottom variant="subtitle1">
                                    {elem.product_name}
                                  </Typography>
                                  <Typography variant="body2" gutterBottom>
                                    Rs {elem.product_price} per kg.
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    color="textSecondary"
                                  >
                                    Multiple of {elem.product_weight} Kg
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    color="textSecondary"
                                  >
                                    Stock avialble:{elem.product_stock}
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <Typography
                                    variant="body2"
                                    style={{ cursor: "pointer" }}
                                  >
                                    <Button>
                                      {showbutton1 &&
                                        showButtonIndex ===
                                          elem.product_stock && <Incre  valueFromProduct={this.state.id} />}

                                      {showbutton &&
                                        showButtonIndex ===
                                          elem.product_stock && <Edit/>}

                                      {/* {showbutton2 && (showButtonIndex === data.product_stock)  && <Buttons/>}  */}

                                      {this.state.showResults &&
                                      showButtonIndex ===
                                        elem.product_stock ? null : (
                                        <Button
                                          id={key.product_stock}
                                          onClick={(e) =>
                                            this.handleEdit(elem.product_stock)
                                          }
                                          variant="contained"
                                          color="primary"
                                          style={{
                                            width: "70px",
                                            height: "30px"
                                          }}
                                        >
                                          Add
                                        </Button>
                                      )}
                                    </Button>
                                  </Typography>
                                </Grid>
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
