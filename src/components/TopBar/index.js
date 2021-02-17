import { Button, makeStyles } from "@material-ui/core";
import SearchBar from "../SearchBar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "12px 16px",
    alignItems: "center",
    position: "fixed",
    width: "calc(100vw - 240px)",
    background: theme.palette.background.default,
    zIndex: "1",
    top: "0",
  },
  button: {
    borderRadius: "24px",
  },
  buttonProfile: {
    marginLeft: "12px",
  },
}));

const TopBar = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SearchBar />
      <Button variant="outlined" className={classes.button}>
        Mejora tu cuenta
      </Button>
      <Button
        variant="contained"
        className={[classes.button, classes.buttonProfile].join(" ")}
      >
        Perfil
      </Button>
    </div>
  );
};

export default TopBar;
