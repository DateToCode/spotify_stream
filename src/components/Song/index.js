import React from "react";
import PropTypes from "prop-types";
import { Add, FavoriteBorder, PlayCircleOutline } from "@material-ui/icons";
import { Typography } from "@material-ui/core";

import "./index.css";

const Song = ({ data }) => {
  return (
    <div className="song__container">
      <img src={data.picture} alt={data.name} />
      <div className="song__info">
        <FavoriteBorder className="song__buttonSecondary" />
        <PlayCircleOutline className="song__buttonPrimary" />
        <Add className="song__buttonSecondary" />
      </div>
      <div>
        <Typography variant="body1">{data.name}</Typography>
        <Typography variant="body2">{data.desc}</Typography>
      </div>
    </div>
  );
};

Song.defaultProps = {
  data: {},
};

Song.propTypes = {
  data: PropTypes.shape({
    picture: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
  }),
};

export default Song;
