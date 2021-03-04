import React from "react";
import ReactPlayer from "react-player";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { IconButton, makeStyles, Slider, Typography } from "@material-ui/core";
import {
  Pause,
  PlayArrow,
  SkipNext,
  SkipPrevious,
  VolumeDown,
  VolumeUp,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  player: {
    position: "fixed",
    bottom: "0",
    width: "calc(100vw - 240px)",
    background: theme.palette.background.paper,
    maxHeight: "80px",
    display: "flex",
    padding: "10px 12px",
  },
  playerInfo: {
    width: "250px",
    maxWidth: "250px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      height: "60px",
      width: "60px",
      objectFit: "cover",
    },
  },
  playerInfoName: {
    marginLeft: "12px",
  },
  playerSong: {
    display: "flex",
    flex: "1",
    flexDirection: "column",
    alignItems: "center",
  },
  playerSongActions: {
    marginTop: "-12px",
    display: "flex",
    zIndex: "200",
    alignItems: "center",
    justifyContent: "center",
  },
  playerSongSlider: {
    marginTop: "-12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "60%",
  },
  playerTimer: {
    margin: "0 12px",
  },
  playerExtra: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "10%",
  },
}));
const Player = () => {
  const classes = useStyles();
  const { user, nextSongFromQueue, previousSongFromQueue } = useContext(
    UserContext
  );
  const { queue, currentSong } = user;

  const [play, setPlay] = useState(false);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [playedPercentage, setPlayedPercentage] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [actualSong, setActualSong] = useState(null);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setActualSong(queue.find((song) => song.id === currentSong));
    setPosition(queue.findIndex((song) => song.id === currentSong));
    setPlay(true);
  }, [currentSong, queue]);

  return (
    <div>
      <ReactPlayer
        playing={play}
        url={actualSong?.url}
        width="0px"
        height="0px"
        volume={volume}
        progressInterval={1}
        onProgress={({ played, playedSeconds }) => {
          setPlayedPercentage(played);
          setPlayedSeconds(
            new Date(playedSeconds * 1000).toISOString().substr(14, 5)
          );
        }}
      />
      <div className={classes.player}>
        <div className={classes.playerInfo}>
          <img src={actualSong?.picture} alt={actualSong?.name} />
          <div className={classes.playerInfoName}>
            <Typography variant="body1">{actualSong?.name}</Typography>
            <Typography variant="body2">{actualSong?.artist}</Typography>
          </div>
        </div>
        <div className={classes.playerSong}>
          <div className={classes.playerSongActions}>
            <IconButton
              color={position === 0 ? "disabled" : "inherit"}
              disabled={position === 0 ? true : false}
              onClick={() => {
                previousSongFromQueue();
              }}
            >
              <SkipPrevious color={position === 0 ? "disabled" : "inherit"} />
            </IconButton>
            {play ? (
              <Pause
                onClick={() => {
                  setPlay(false);
                }}
              />
            ) : (
              <PlayArrow
                onClick={() => {
                  setPlay(true);
                }}
              />
            )}
            <IconButton
              color={position === queue.length - 1 ? "disabled" : "inherit"}
              disabled={position === queue.length - 1 ? true : false}
              onClick={() => {
                if (position < queue.length) nextSongFromQueue();
              }}
            >
              <SkipNext
                color={position === queue.length - 1 ? "disabled" : "inherit"}
              />
            </IconButton>
          </div>
          <div className={classes.playerSongSlider}>
            <Typography variant="caption" className={classes.playerTimer}>
              {playedSeconds}
            </Typography>
            <Slider
              step={0.001}
              value={playedPercentage}
              onChange={(e, newValue) => {
                setPlayedPercentage(newValue);
              }}
              max={1}
              min={0}
              aria-labelledby="continious-slider"
            />
          </div>
        </div>
        <div className={classes.playerExtra}>
          <VolumeDown />
          <Slider
            step={0.001}
            value={volume}
            onChange={(e, newValue) => {
              setVolume(newValue);
            }}
            max={1}
            min={0}
            aria-labelledby="continious-slider"
          />
          <VolumeUp />
        </div>
      </div>
    </div>
  );
};

export default Player;
