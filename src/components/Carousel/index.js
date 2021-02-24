import { Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import Song from "../Song";
import Artist from "../Artist";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "22px",
    padding: "16px 22px 16px 0",
    overflow: "hidden",
  },
  carouselContainer: {
    display: "flex",
    overflow: "scroll",
    minHeight: "350px",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
}));

const Carousel = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h6">{props.title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} className={classes.carouselContainer}>
        {props.data.map((item, index) => {
          if (item.type === "song") {
            return <Song data={item} key={index + "_song" + item._id} />;
          } else if (item.type === "artist") {
            return <Artist data={item} key={index + "_artist" + item._id} />;
          } else {
            return null;
          }
        })}
        {props.data.map((item) => (
          <h1>{item.title}</h1>
        ))}
      </Grid>
    </div>
  );
};

export default Carousel;
