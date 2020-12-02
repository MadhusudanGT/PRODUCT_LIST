import React from "react";
import Incre from "./incre"
import {stockData} from "./data"
import Edit from "./Edit"
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import img1 from "./onion.jpg"
import CardMedia from '@material-ui/core/CardMedia';
export default class ProductList extends React.Component{
  
    constructor(props) {
        super(props);
        this.state = {
            showbutton: false,
            showbutton1:false,
            showButtonIndex: null,
          image:""
        };  
        this.handleEdit = this.handleEdit.bind(this);
        
      }

      handleEdit (parameter){
        this.setState({id:parameter})
        console.log(this.state.id)
        this.setState({
          showButtonIndex: parameter,
         showbutton1:true,
         
        });
        if(parameter===0){
            this.setState({showbutton:true,
                showbutton1:false,
                showbutton2:false
            })
        }
        else{
            this.setState({showbutton:false,
            showbutton2:false

            })
        }
      };


 render(){
  const { showButtonIndex, showbutton ,showbutton1} = this.state;
return(
   <div>
     <img src="./onion.jpg"/>
    {stockData.map((data ,key) => {
      console.log(data)
console.log(data.product_pic)

      return (
        <div key={key}>
          <div>
          <Grid container className="root" spacing={2}>
<Grid item xs={12}>
  <Grid container justify="center">
    {[].map((value) => (
      <Grid key={value} item>
        <Paper className="paper" />
      </Grid>
    ))}
  </Grid>
</Grid>
<Grid item xs={4}>
  <Paper className="control">
    <Grid container>
      <Grid item>
        <ButtonBase className="image">
        <CardMedia
        className="media"
        image="./onion.jpg"
        title="Paella dish"
      />
               
        </ButtonBase>
      </Grid>
      {/* <Grid item1> */}
      <Grid item xs={4} sm container>
        <Grid item xs container direction="column" spacing={3}>
          <Grid item xs>
          <Typography gutterBottom variant="subtitle1">
              {data.product_name}
            </Typography>
            <Typography variant="body2" gutterBottom>
             Rs {data.product_price}per Kg
            </Typography>
            <Typography variant="body2" color="textSecondary">
             Multiple of {data.product_weight} kg
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" style={{ cursor: "pointer" }}>
              <Button >

              {showbutton1 && (showButtonIndex === data.product_stock)  && <Incre/>} 

{showbutton && (showButtonIndex === data.product_stock) && <Edit />}

{/* {showbutton2 && (showButtonIndex === data.product_stock)  && <Buttons/>}  */}

<Button id={key.product_stock}  onClick={e => this.handleEdit(data.product_stock)} variant="contained" color="primary">
Add
  </Button> 

              </Button>
            </Typography>
          </Grid>
        </Grid>
        {/*  */}
      </Grid>
    </Grid>
  </Paper>
</Grid>
</Grid>
</div>
        </div>
      )
    })}
</div>
)
  }
  }
            