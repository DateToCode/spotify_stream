import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import { Avatar, Typography } from "@material-ui/core";

const Artist = ({ data }) => {
  return (
    <div className="artist__container">
      <Avatar alt={data.name} src={data.img} className="artist__avatar" />
      <Typography variant="body1" align="center">
        {data.name}
      </Typography>
    </div>
  );
};

Artist.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string,
  }),
};

export default Artist;
