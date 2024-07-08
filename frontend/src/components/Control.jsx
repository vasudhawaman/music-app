import React, { useState, useEffect, useContext } from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import Forward10Icon from '@mui/icons-material/Forward10';
import Replay10Icon from '@mui/icons-material/Replay10';
import PauseIcon from '@mui/icons-material/Pause';
import { PlayContext } from "../context/PlayContext";
import { PlayerContext } from "../context/PlayerContext";
export default function Control() {
  const { start, setStart } = useContext(PlayContext)
  const {
    audioRef,
    current, setCurrent,
    songs, setSongs, nextSong,
    playStatus, setPlayStatus,
    play, pause, handleSongSpeed,
    playbackSpeed, setPlaybackSpeed
  } = useContext(PlayerContext)

  useEffect(() => {

    if (current) {
      audioRef.current.ontimeupdate = () => {
        setValue(audioRef.current.currentTime);

      }
    }
    if (start) {
      audioRef.current.play()
      setMax(audioRef.current.duration);

      audioRef.current.ontimeupdate = () => {
        setValue(audioRef.current.currentTime);

      }

    }
  }, [playStatus, start])

  const [value, setValue] = useState(0);
  const [maxValue, setMax] = useState(0);
  const [isPlaying, setPlaying] = useState(false)

  function handleValue(e) {

    const song = document.getElementById("audio");

    audioRef.current.currentTime = e.target.value;
    setValue(e.target.value)
    setPlayStatus(true)

  }
  function handlePlay() {

    setPlayStatus(true)
    play()
    setMax(audioRef.current.duration);

  }

  function handlePause() {
    //  setPlaying(false);
    setPlayStatus(false)
    setStart(false)
    pause()
  }
  function replay10() {
    const song = document.getElementById("audio");
    song.currentTime = song.currentTime - 10;
    setValue((prev) => prev - 10)
  }
  function forward10() {
    const song = document.getElementById("audio");
    song.currentTime = song.currentTime + 10;
    setValue((prev) => prev + 10)
  }
  function forwardTO() {
    console.log(current.index)
    nextSong(current.index + 1)
    setPlayStatus(false)
  }
  function backwardTO() {
    nextSong(current.index - 1)
    setPlayStatus(false)
  }
  return (
    <div className="h-1/3 pl-5 pr-5 text-orange-300 bg-black ml-0">
      <div>{`${Math.floor(value / 60)}` + ':' + `${Math.floor(value % 60)}`}</div>
      <div class="bg-black">
        <input type="range" min="0" max={maxValue} id="myRange" className="w-full " value={value} style={{ accentColor: "rgb(249 ,115, 22)" }} onChange={handleValue} />
      </div>
      <div className="flex justify-center items-center bg-black">
        <div className="flex mt-0  bg-black">
          <div className="bg-black"><Replay10Icon className="text-left text-md sm:text-3xl text-orange-300" onClick={replay10} /></div>
          <div> <SkipPreviousIcon className="text-left text-md sm:text-3xl text-orange-300" onClick={backwardTO} /></div>
          {playStatus ?
            <PauseIcon className="text-center text-base text-orange-300" onClick={handlePause} /> : <PlayCircleIcon className="text-center text-md sm:text-3xl text-orange-300" onClick={handlePlay} />
          }
          <div> <SkipNextIcon className="text-right text-xs sm:text-3xl text-orange-300" onClick={forwardTO} /></div>

          <div><Forward10Icon className="text-right text-md sm:text-3xl text-orange-300" onClick={forward10} /></div>
          <div>
            <label className='text-orange' htmlFor="playbackSpeed">Playback Speed: </label>
            <select
              id="playbackSpeed"
              value={playbackSpeed}
              onChange={handleSongSpeed}
            >
              <option value="0.25">0.25x</option>
              <option value="0.5">0.5x</option>
              <option value="0.75">0.75x</option>
              <option value="1">1x</option>
              <option value="1.25">1.25x</option>
              <option value="1.5">1.5x</option>
              <option value="1.75">1.75x</option>
              <option value="2">2x</option>
            </select>
          </div>
          {current ? <audio id="audio" src={current.now.audio} ref={audioRef} hidden /> : null}
        </div>

      </div>


    </div>
  )
}