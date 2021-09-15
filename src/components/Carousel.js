import { makeStyles } from "@material-ui/core";
import React from "react";
import AliceCarousel, { Classnames } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    margin: "0 auto",
    padding: 20,
    // overflow: "hidden",
    // [theme.breakpoints.up("md")]: {
    //   maxWidth: 800,
    // },

    // [theme.breakpoints.down("sm")]: {
    //   maxWidth: 600,
    // },
    // [theme.breakpoints.down("xs")]: {
    //   width: 390,
    // },
  },
  item: {
    "&>img": {
      objectFit: "cover",
      width: "100%",
      borderRadius: 30,
    },
  },
}));
const Carousel = () => {
  const classes = useStyles();
  const items = [
    <div className={classes.item} data-value="1">
      <img src="http://labgo.ca/wp-content/uploads/2021/08/img1.jpg" alt="" />
    </div>,
    <div className={classes.item} data-value="2">
      <img src="http://labgo.ca/wp-content/uploads/2021/08/img4.jpg" alt="" />
    </div>,
    <div className={classes.item} data-value="3">
      <img src="http://labgo.ca/wp-content/uploads/2021/08/img5.jpg" alt="" />
    </div>,
    <div className={classes.item} data-value="4">
      <img src="http://labgo.ca/wp-content/uploads/2021/08/img2.jpg" alt="" />
    </div>,
  ];
  return (
    <div className={classes.root}>
      <AliceCarousel
        animationType="fadeout"
        animationDuration={800}
        disableButtonsControls
        infinite
        autoPlay
        autoPlayControls
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        touchTracking={false}
        items={items}
        mouseTracking
        keyboardNavigation
      />
    </div>
  );
};

export default Carousel;
