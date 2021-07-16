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
  const addPizzaToCart = () => {
    axios({
      method: "POST",
      url: "/",
    }).then((response) => {
      dispatchEvent({
        type: "ADD_TO_CART",
        payload: { pizza },
      });
    });
  };

  const removePizzaFromCart = () => {
    axios({
      method: "DELETE",
      url: "/",
    }).then((response) => {
      dispatchEvent({
        type: "REMOVE_FROM_CART",
        payload: { pizza },
      });
    });
  };
  const gridStyles = makeStyles({
      root: {
          flexGrow: 1
      },
      paper: {
          padding: theme.spacing(1)
      }
  });
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    }
  });
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia>
          <img src={pizza.image_path} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {pizza.name} {pizza.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {pizza.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={addPizzaToCart}>
          Add To Cart
        </Button>
        <Button size="small" color="primary" onClick={removePizzaFromCart}>
          Remove From Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default PizzaItem;
