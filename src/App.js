import {
  CssBaseline,
  Grid,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import NavigationDrawer from "./components/NavigationDrawer";
import SearchBar from "./components/SearchBar";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import { darkTheme } from "./theme/themeDark";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  content: {
    flexGrow: 1,
    maxWidth: "calc(100vw - 240px)",
    height: "100vh",
  },
  drawer: {
    width: "240px",
    height: "100vh",
    background: "blue",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid container className={classes.root}>
        <NavigationDrawer />
        <div className={classes.content}>
          <TopBar />
          <div style={{ marginTop: "80px" }} />
          <Home />
          <Player />
        </div>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
