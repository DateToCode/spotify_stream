import { Typography } from "@material-ui/core";
import Carousel from "../../components/Carousel";
import songs from "../../assets/data/songs.json";
import artists from "../../assets/data/artists.json";
const Home = () => {
  return (
    <div>
      <Typography variant="h1">Home</Typography>
      <Carousel data={artists} title="Artistas más escuchados" />
      <Carousel data={songs} title="Canciones más escuchadas de 2021" />
    </div>
  );
};

export default Home;
