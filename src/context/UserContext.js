import { createContext, useState } from "react";

export const UserContext = createContext();

const initialState = {
  queue: [],
  currentSong: null,
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);

  const addSongToQueue = (song) => {
    const auxUser = { ...user };

    if (auxUser.queue.length === 0) {
      auxUser.currentSong = song.id;
    }
    auxUser.queue.push(song);
    console.log("Actual queue, ", auxUser);
    setUser(auxUser);
  };

  const removeSongToQueue = (songId) => {
    const auxUser = { ...user };
    auxUser.queue = auxUser.queue.filter((song) => song.id !== songId);
    setUser(auxUser);
  };

  const nextSongFromQueue = () => {
    const auxUser = { ...user };
    const nextSongPosition =
      auxUser.queue.findIndex((song) => song.id === auxUser.currentSong) + 1;
    if (nextSongPosition) {
      auxUser.currentSong = auxUser.queue[nextSongPosition].id;
      setUser(auxUser);
    }
  };

  const previousSongFromQueue = () => {
    const auxUser = { ...user };
    const previousSongPosition =
      auxUser.queue.findIndex((song) => song.id === auxUser.currentSong) - 1;
    if (previousSongPosition >= 0) {
      auxUser.currentSong = auxUser.queue[previousSongPosition].id;
      setUser(auxUser);
    }
  };

  const playSongFromQueue = (song) => {
    const auxUser = { ...user };
    const songPosition = auxUser.queue.findIndex(
      (song) => song.id === auxUser.currentSong
    );
    if (songPosition >= 0) {
      auxUser.queue.splice(songPosition, 0, song);
      auxUser.currentSong = song.id;
      console.log("Actual queue, ", auxUser);
      setUser(auxUser);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        addSongToQueue,
        removeSongToQueue,
        nextSongFromQueue,
        previousSongFromQueue,
        playSongFromQueue,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
