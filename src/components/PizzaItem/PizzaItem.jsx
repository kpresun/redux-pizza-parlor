import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function PizzaItem({ pizza }) {
  const dispatch = useDispatch();
  let orderID = 1;

  const addPizzaToCart = () => {
      dispatch({
        type: "ADD_TO_CART",
        payload: { pizza, orderID },
      });
      orderID + 1;
    };

  const removePizzaFromCart = () => {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: { pizza, orderID },
      });
    });
  };


  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      height: 650,
      display: "flex"
    },
    media: {
      height: 140,
    }
  });

  const classes = useStyles();
  return (
    <Card className={classes.root} style={{display: "inline-block"}}>
      <CardActionArea>
        <CardMedia>
          <img src={pizza.image_path} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {pizza.name} 
            <br>
            </br>${pizza.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{height: 95}}>
            {pizza.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={addPizzaToCart} variant="contained">
          Add To Cart
        </Button>
        <Button size="small" color="primary" onClick={removePizzaFromCart} variant="contained">
          Remove From Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default PizzaItem;
