import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";

import RadioIcon from "@material-ui/icons/Radio";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "240px",
    flexShrink: 0,
  },
  drawerPaper: {
    width: "240px",
  },
  titleList: {
    padding: "12px 16px",
    fontWeight: "bold",
  },
}));

const itemsMainList = [
  {
    text: "Inicio",
    icon: <HomeIcon />,
  },
  { text: "Buscar", icon: <ExploreIcon /> },
  { text: "Radio", icon: <RadioIcon /> },
];

const NavigationDrawer = () => {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
    >
      <div className={classes.drwaerContainer}>
        <List>
          {itemsMainList.map((item) => (
            <ListItem button>
              <ListItemIcon>{item.icon} </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Typography variant="body1" className={classes.titleList}>
          TU BIBLIOTECA
        </Typography>
        <List>
          {[
            "Especialmente para ti",
            "Escuchad. recient.",
            "Canciones que te gu...",
            "Álbumes",
            "Artistas",
            "Podcasts",
          ].map((text) => (
            <ListItem button>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default NavigationDrawer;
